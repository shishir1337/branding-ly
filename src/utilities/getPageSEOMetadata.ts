import type { Metadata } from 'next'
import { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { mergeOpenGraph } from './mergeOpenGraph'

const DEFAULT_TITLE = 'Leading Branding & Marketing Agency in Bangladesh'
const DEFAULT_DESCRIPTION =
  'Top branding & marketing agency in Bangladesh. We help businesses grow through strategic marketing, creative design, and campaigns that deliver real results.'

export type PageSEOKey =
  | 'home'
  | 'services'
  | 'aboutUs'
  | 'blog'
  | 'caseStudies'
  | 'contact'

export type PageSEOSection = {
  metaTitle?: string | null
  metaDescription?: string | null
  customSchema?: string | null
}

const queryPageSEO = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const global = await payload.findGlobal({
    slug: 'page-seo',
    depth: 0,
  })
  return global as Record<PageSEOKey, PageSEOSection> | null
})

/**
 * Returns the custom JSON-LD schema string for a page if set and valid.
 * Returns null if not set or invalid JSON.
 */
export async function getPageSEOSchema(pageKey: PageSEOKey): Promise<string | null> {
  const seo = await queryPageSEO()
  const section = seo?.[pageKey] as PageSEOSection | undefined
  const raw = section?.customSchema?.trim()
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as unknown
    // Must be object or array (JSON-LD can be one or multiple schemas)
    if (typeof parsed !== 'object' || parsed === null) return null
    return JSON.stringify(parsed)
  } catch {
    return null
  }
}

/**
 * Returns metadata for a fixed page (Home, Services, About Us, Blog, Case Studies, Contact)
 * using the Page SEO global. Use in generateMetadata for those routes.
 */
export async function getPageSEOMetadata(
  pageKey: PageSEOKey,
  options: { path?: string; defaultTitle?: string; defaultDescription?: string } = {},
): Promise<Metadata> {
  const { path = '/', defaultTitle = DEFAULT_TITLE, defaultDescription = DEFAULT_DESCRIPTION } =
    options

  const seo = await queryPageSEO()
  const section = seo?.[pageKey] as PageSEOSection | undefined

  const title = section?.metaTitle?.trim() || defaultTitle
  const description = section?.metaDescription?.trim() || defaultDescription

  return {
    title,
    description,
    openGraph: mergeOpenGraph({
      title,
      description,
      url: path,
    }),
  }
}
