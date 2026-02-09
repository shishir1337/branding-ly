'use client'

import React, { Fragment } from 'react'
import type { Service } from '@/payload-types'
import { TechnologySection } from './TechnologySection'
import { ServicesProvidedSection } from './ServicesProvidedSection'
import { EveryWebsiteIncludesSection } from './EveryWebsiteIncludesSection'
import { ServiceTestimonialsSection } from './ServiceTestimonialsSection'
import { PortfolioSection } from './PortfolioSection'
import { WhyChooseSection } from './WhyChooseSection'
import { ProcessSection } from './ProcessSection'
import { FAQBlock } from '@/components/FAQ/FAQBlock'
import RichText from '@/components/RichText'

export function RenderServiceSections({ sections }: { sections: Service['sections'] }) {
  if (!sections || sections.length === 0) return null

  return (
    <Fragment>
      {sections.map((block, index) => {
        if (!block || typeof block === 'number') return null
        const key = 'id' in block && block.id ? block.id : index

        switch (block.blockType) {
          case 'technologies':
            return (
              <TechnologySection
                key={key}
                technologies={{
                  sectionTitle: block.sectionTitle ?? undefined,
                  sectionSubtitle: block.sectionSubtitle ?? undefined,
                  items: block.items ?? [],
                }}
              />
            )
          case 'servicesProvided':
            return (
              <ServicesProvidedSection
                key={key}
                section={{
                  sectionTitle: block.sectionTitle ?? undefined,
                  items: block.items ?? [],
                }}
              />
            )
          case 'everyWebsiteIncludes':
            return (
              <EveryWebsiteIncludesSection
                key={key}
                section={{
                  enabled: true,
                  sectionTitle: block.sectionTitle ?? undefined,
                  sectionSubtitle: block.sectionSubtitle ?? undefined,
                  items: block.items ?? [],
                }}
              />
            )
          case 'testimonials':
            return (
              <ServiceTestimonialsSection
                key={key}
                section={{
                  enabled: true,
                  items: block.items ?? [],
                }}
              />
            )
          case 'portfolio':
            return (
              <PortfolioSection
                key={key}
                portfolioImages={block.items ?? []}
                sectionTitle={block.sectionTitle ?? undefined}
                sectionSubtitle={block.sectionSubtitle ?? undefined}
              />
            )
          case 'whyChoose':
            return (
              <WhyChooseSection
                key={key}
                section={{
                  enabled: true,
                  sectionTitle: block.sectionTitle ?? undefined,
                  items: block.items ?? [],
                }}
              />
            )
          case 'processSteps':
            return (
              <ProcessSection
                key={key}
                section={{
                  enabled: true,
                  sectionTitle: block.sectionTitle ?? undefined,
                  items: block.items ?? [],
                }}
              />
            )
          case 'faq':
            return (
              <FAQBlock
                key={key}
                sectionTitle={block.sectionTitle ?? undefined}
                heading={block.heading ?? undefined}
                description={block.description ?? undefined}
                image={block.image}
                items={block.items ?? []}
              />
            )
          case 'richText':
            return (
              <div
                key={key}
                className="w-full py-12 sm:py-16 md:py-20 bg-white"
              >
                <div className="container px-4 sm:px-6">
                  <div className="max-w-4xl mx-auto">
                    {block.heading && (
                      <h2
                        className="mb-6 sm:mb-8 text-left"
                        style={{
                          fontFamily: 'Anton, sans-serif',
                          fontSize: 'clamp(28px, 5vw, 40px)',
                          fontWeight: 400,
                          lineHeight: 'normal',
                          color: '#000000',
                        }}
                      >
                        {block.heading}
                      </h2>
                    )}
                    <RichText
                      className="max-w-4xl mx-auto"
                      data={block.content}
                      enableGutter={false}
                    />
                  </div>
                </div>
              </div>
            )
          default:
            return null
        }
      })}
    </Fragment>
  )
}
