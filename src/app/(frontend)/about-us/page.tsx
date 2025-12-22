import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { Statistics } from '@/components/Statistics'
import { OurValues } from '@/components/OurValues'
import { TeamSection } from '@/components/TeamSection'
import { OurProcess } from '@/components/OurProcess'
import { IndustriesWeServe } from '@/components/IndustriesWeServe'
import { AboutUsFAQ } from '@/components/AboutUsFAQ'

export const metadata: Metadata = {
  title: 'About Us | Brandingly',
  description: 'It all begins with a simple conversation.',
}

export const revalidate = 600

export default async function AboutUsPage() {
  return (
    <article>
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
      <TeamSection />
      <OurProcess />
      <IndustriesWeServe />
      <AboutUsFAQ />
    </article>
  )
}

