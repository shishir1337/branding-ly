'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface ChallengeSectionProps {
  challenge?: {
    sectionLabel?: string | null
    title: string
    description: DefaultTypedEditorState
  } | null
}

const DEFAULT_SECTION_LABEL = 'The Challenge'

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({ challenge }) => {
  if (!challenge || !challenge.title || !challenge.description) {
    return null
  }

  const sectionLabel = challenge.sectionLabel?.trim() || DEFAULT_SECTION_LABEL

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <ScrollReveal
            direction="up"
            delay={0.1}
            duration={0.6}
            distance={30}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-1 rounded-full" style={{ backgroundColor: 'hsl(23, 100%, 56%)' }} />
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    lineHeight: '140%',
                    letterSpacing: '1px',
                    color: 'hsl(23, 100%, 56%)',
                    textTransform: 'uppercase',
                  }}
                >
                  {sectionLabel}
                </p>
              </div>
              <h2
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(34px, 5vw, 50px)',
                  fontWeight: 400,
                  lineHeight: '1.12',
                  color: '#000000',
                  letterSpacing: '-0.5px',
                }}
              >
                {challenge.title}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            delay={0.2}
            duration={0.6}
            distance={30}
            className="lg:col-span-8"
          >
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10"
              style={{
                backgroundColor: '#FAFAFA',
                border: '1px solid rgba(0,0,0,0.05)',
                borderLeft: '5px solid hsl(23, 100%, 56%)',
                boxShadow: '0 8px 26px rgba(0, 0, 0, 0.06)',
              }}
            >
              <RichText
                data={challenge.description}
                enableGutter={false}
                className="case-study-description"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(17px, 2vw, 19px)',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#2A2A2A',
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
