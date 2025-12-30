import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { ServiceDetailHero } from '@/components/ServiceDetail/ServiceDetailHero'
import { TechnologySection } from '@/components/ServiceDetail/TechnologySection'
import { ServicesProvidedSection } from '@/components/ServiceDetail/ServicesProvidedSection'
import { EveryWebsiteIncludesSection } from '@/components/ServiceDetail/EveryWebsiteIncludesSection'
import { ServiceTestimonialsSection } from '@/components/ServiceDetail/ServiceTestimonialsSection'
import { PortfolioSection } from '@/components/ServiceDetail/PortfolioSection'
import { WhyChooseSection } from '@/components/ServiceDetail/WhyChooseSection'
import { ProcessSection } from '@/components/ServiceDetail/ProcessSection'
import { ContactUs } from '@/components/ContactUs'
import RichText from '@/components/RichText'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const services = await payload.find({
      collection: 'services',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    })

    const params = services.docs.map(({ slug }) => {
      return { slug }
    })

    return params
  } catch (error) {
    // If database is not accessible during build, return empty array
    // Pages will be generated on-demand instead
    console.warn('Failed to generate static params for services:', error)
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ServiceDetailPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/services/' + decodedSlug
  const service = await queryServiceBySlug({ slug: decodedSlug })

  if (!service) return <PayloadRedirects url={url} />

  return (
    <article>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <ServiceDetailHero service={service} />

      <TechnologySection technologies={service.technologies} />

      <ServicesProvidedSection servicesProvided={service.servicesProvided} />

      <EveryWebsiteIncludesSection features={service.everyWebsiteIncludes} />

      <ServiceTestimonialsSection testimonials={service.testimonials} />

      <PortfolioSection portfolioImages={service.portfolioImages} />

      <WhyChooseSection features={service.whyChoose} />

      <ProcessSection processSteps={service.processSteps} />

      {/* Service Content from CMS */}
      {service.content && (
        <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <RichText className="max-w-4xl mx-auto" data={service.content} enableGutter={false} />
          </div>
        </div>
      )}

      <ContactUs />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const service = await queryServiceBySlug({ slug: decodedSlug })

  return generateMeta({ doc: service })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'services',
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

