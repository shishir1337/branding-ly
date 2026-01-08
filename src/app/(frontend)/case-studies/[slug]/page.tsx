import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { CaseStudyDetailHero } from '@/components/CaseStudyDetail/CaseStudyDetailHero'
import { FeaturedImageSection } from '@/components/CaseStudyDetail/FeaturedImageSection'
import { ChallengeSection } from '@/components/CaseStudyDetail/ChallengeSection'
import { SolutionSection } from '@/components/CaseStudyDetail/SolutionSection'
import { ResultsSection } from '@/components/CaseStudyDetail/ResultsSection'
import { GallerySection } from '@/components/CaseStudyDetail/GallerySection'
import { TestimonialSection } from '@/components/CaseStudyDetail/TestimonialSection'
import { TechnologiesSection } from '@/components/CaseStudyDetail/TechnologiesSection'
import RichText from '@/components/RichText'
import { ContactUs } from '@/components/ContactUs'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const caseStudies = await payload.find({
    collection: 'case-studies',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = caseStudies.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function CaseStudyDetailPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/case-studies/' + decodedSlug
  const caseStudy = await queryCaseStudyBySlug({ slug: decodedSlug })

  if (!caseStudy) return <PayloadRedirects url={url} />

  return (
    <article>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <CaseStudyDetailHero caseStudy={caseStudy} />

      <FeaturedImageSection featuredImage={caseStudy.featuredImage} />

      <ChallengeSection challenge={caseStudy.challenge} />

      <SolutionSection solution={caseStudy.solution} />

      <ResultsSection results={caseStudy.results} />

      {/* Content */}
      {caseStudy.content && (
        <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <RichText className="max-w-4xl mx-auto" data={caseStudy.content} enableGutter={false} />
          </div>
        </div>
      )}

      <TechnologiesSection technologies={caseStudy.technologies} />

      <GallerySection gallery={caseStudy.gallery} />

      <TestimonialSection testimonial={caseStudy.testimonial} />

      <ContactUs />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const caseStudy = await queryCaseStudyBySlug({ slug: decodedSlug })

  return generateMeta({ doc: caseStudy })
}

const queryCaseStudyBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'case-studies',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

