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

export function RenderCaseStudySections({ sections }: { sections: CaseStudy['sections'] }) {
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
              <div key={key} className="w-full py-16 sm:py-20 md:py-24 bg-white">
                <div className="container px-4 sm:px-6">
                  <div className="max-w-4xl mx-auto">
                    {block.heading && (
                      <div className="mb-6 sm:mb-8">
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-5 sm:mb-6">
                          <div
                            className="w-14 h-1 rounded-full"
                            style={{ backgroundColor: 'hsl(23, 100%, 56%)' }}
                          />
                        </div>
                        <h2
                          className="text-left"
                          style={{
                            fontFamily: 'Anton, sans-serif',
                            fontSize: 'clamp(36px, 6vw, 52px)',
                            fontWeight: 400,
                            lineHeight: '1.15',
                            color: '#000000',
                            letterSpacing: '-0.5px',
                          }}
                        >
                          {block.heading}
                        </h2>
                      </div>
                    )}
                    <div
                      className="prose prose-lg max-w-none"
                      style={{
                        fontFamily: 'Geist, sans-serif',
                        fontSize: 'clamp(17px, 2vw, 19px)',
                        lineHeight: 1.75,
                        color: '#2A2A2A',
                      }}
                    >
                      <RichText
                        className="max-w-4xl mx-auto"
                        data={block.content}
                        enableGutter={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          case 'technologies':
            return (
              <TechnologiesSection
                key={key}
                technologies={
                  block.items
                    ?.map((item) =>
                      item && typeof item !== 'number' ? { name: item.name ?? '' } : { name: '' },
                    )
                    .filter((t) => t.name) ?? []
                }
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
