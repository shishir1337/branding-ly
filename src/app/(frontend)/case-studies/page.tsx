import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { CaseStudies } from '@/components/CaseStudies'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: 'Case Studies | Brandingly',
  description: 'Ideas, Insights & Iterations - Explore our portfolio of successful projects.',
}

export const revalidate = 600

export default async function CaseStudiesPage() {
  const payload = await getPayload({ config: configPromise })

  const caseStudies = await payload.find({
    collection: 'case-studies',
    depth: 2,
    limit: 100,
    overrideAccess: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    select: {
      id: true,
      title: true,
      client: true,
      excerpt: true,
      slug: true,
      featuredImage: true,
      category: true,
    },
  })

  return (
    <article>
      <PageHeader
        title="Case Studies"
        subtitle={
          <>
            Ideas, Insights & Iterations
          </>
        }
      />
      <CaseStudies caseStudies={caseStudies.docs} />
    </article>
  )
}

