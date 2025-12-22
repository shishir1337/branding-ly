import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { Statistics } from '@/components/Statistics'

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
    </article>
  )
}

