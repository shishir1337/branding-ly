import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { NeedHelp } from '@/components/NeedHelp'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { PageSEOSchema } from '@/components/PageSEOSchema'
import { getPageSEOMetadata } from '@/utilities/getPageSEOMetadata'

export async function generateMetadata(): Promise<Metadata> {
  return getPageSEOMetadata('services', {
    path: '/services',
    defaultTitle: 'Services | Brandingly',
    defaultDescription:
      'Transforming Vision into Real Results with Innovative Strategic Digital Solutions.',
  })
}

export const revalidate = 600

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })

  const services = await payload.find({
    collection: 'services',
    depth: 0,
    limit: 100,
    overrideAccess: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: 'order',
    select: {
      id: true,
      title: true,
      description: true,
      icon: true,
      slug: true,
    },
  })

  return (
    <article>
      <PageSEOSchema pageKey="services" />
      <PageHeader
        title="Services"
        subtitle={
          <>
            Transforming Vision into Real Results
            <br />
            with Innovative Strategic Digital Solutions.
          </>
        }
      />
      <Services services={services.docs} />
      <WhyChooseUs />
      <NeedHelp />
    </article>
  )
}

