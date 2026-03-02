'use client'

import React, { Fragment } from 'react'
import type { CaseStudy } from '@/payload-types'
import { ChallengeSection } from './ChallengeSection'
import { SolutionSection } from './SolutionSection'
import { ResultsSection } from './ResultsSection'
import { GallerySection } from './GallerySection'
import { TestimonialSection } from './TestimonialSection'
import { TechnologiesSection } from './TechnologiesSection'
import RichText from '@/components/RichText'

export function RenderCaseStudySections({
  sections,
}: {
  sections: CaseStudy['sections']
}) {
  if (!sections || sections.length === 0) return null

  return (
    <Fragment>
      {sections.map((block, index) => {
        if (!block || typeof block === 'number') return null
        const key = 'id' in block && block.id ? block.id : index

        switch (block.blockType) {
          case 'challenge':
            return (
              <ChallengeSection
                key={key}
                challenge={{
                  sectionLabel: block.sectionLabel ?? undefined,
                  title: block.title ?? '',
                  description: block.description ?? '',
                }}
              />
            )
          case 'solution':
            return (
              <SolutionSection
                key={key}
                solution={{
                  sectionLabel: block.sectionLabel ?? undefined,
                  title: block.title ?? '',
                  description: block.description ?? '',
                }}
              />
            )
          case 'results':
            return (
              <ResultsSection
                key={key}
                results={{
                  sectionLabel: block.sectionLabel ?? undefined,
                  title: block.title ?? '',
                  description: block.description ?? '',
                  metrics: block.metrics ?? undefined,
                }}
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
          case 'technologies':
            return (
              <TechnologiesSection
                key={key}
                technologies={block.items?.map((item) =>
                  item && typeof item !== 'number' ? { name: item.name ?? '' } : { name: '' }
                ).filter((t) => t.name) ?? []}
                sectionLabel={block.sectionLabel ?? undefined}
                sectionTitle={block.sectionTitle ?? undefined}
              />
            )
          case 'gallery':
            return (
              <GallerySection
                key={key}
                gallery={block.items ?? []}
                sectionLabel={block.sectionLabel ?? undefined}
                sectionTitle={block.sectionTitle ?? undefined}
              />
            )
          case 'testimonial':
            return (
              <TestimonialSection
                key={key}
                testimonial={{
                  sectionTitle: block.sectionTitle ?? undefined,
                  quote: block.quote ?? '',
                  author: block.author ?? '',
                  position: block.position ?? '',
                  image: block.image,
                }}
              />
            )
          default:
            return null
        }
      })}
    </Fragment>
  )
}
