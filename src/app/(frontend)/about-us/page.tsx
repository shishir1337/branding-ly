import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { Statistics } from '@/components/Statistics'
import { OurValues } from '@/components/OurValues'
import { TeamSection } from '@/components/TeamSection'
import { OurProcess } from '@/components/OurProcess'
import { IndustriesWeServe } from '@/components/IndustriesWeServe'
import { AboutUsFAQ } from '@/components/AboutUsFAQ'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PageSEOSchema } from '@/components/PageSEOSchema'
import { getPageSEOMetadata } from '@/utilities/getPageSEOMetadata'

export async function generateMetadata(): Promise<Metadata> {
  return getPageSEOMetadata('aboutUs', {
    path: '/about-us',
    defaultTitle: 'About Us | Brandingly',
    defaultDescription: 'It all begins with a simple conversation.',
  })
}

export const revalidate = 600

export default async function AboutUsPage() {
  const payload = await getPayload({ config: configPromise })

  const teamMembersResult = await payload.find({
    collection: 'team-members',
    depth: 1,
    limit: 50,
    overrideAccess: false,
    sort: 'order',
    select: {
      id: true,
      name: true,
      role: true,
      image: true,
      order: true,
    },
  })

  const teamMembers = teamMembersResult.docs || []

  return (
    <article>
      <PageSEOSchema pageKey="aboutUs" />
      <PageHeader
        title="About us"
        subtitle={
          <>
            Your Trusted Marketing Partner in{' '}
            <span style={{ color: 'hsl(23, 100%, 56%)' }}>Bangladesh</span>
          </>
        }
        ctaButton={{
          text: 'Book A Call',
          href: '#contact',
        }}
      />
      <Statistics customBackground />
      <OurValues />
      <TeamSection teamMembers={teamMembers} />
      <OurProcess />
      <IndustriesWeServe />
      <AboutUsFAQ />
    </article>
  )
}

