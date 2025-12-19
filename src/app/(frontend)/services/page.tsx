import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { NeedHelp } from '@/components/NeedHelp'

export const metadata: Metadata = {
  title: 'Services | Brandingly',
  description: 'Transforming Vision into Real Results with Innovative Strategic Digital Solutions.',
}

export default function ServicesPage() {
  return (
    <article>
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
      <Services />
      <WhyChooseUs />
      <NeedHelp />
    </article>
  )
}

