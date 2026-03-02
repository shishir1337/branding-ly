'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface SolutionSectionProps {
  solution?: {
    sectionLabel?: string | null
    title: string
    description: DefaultTypedEditorState
  } | null
}

const DEFAULT_SECTION_LABEL = 'Our Solution'

export const SolutionSection: React.FC<SolutionSectionProps> = ({ solution }) => {
  if (!solution || !solution.title || !solution.description) {
    return null
  }

  const sectionLabel = solution.sectionLabel?.trim() || DEFAULT_SECTION_LABEL

  return (
    <section
      className="w-full py-16 sm:py-20 md:py-24"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <ScrollReveal
            direction="up"
            delay={0.1}
            duration={0.6}
            distance={30}
            className="lg:col-span-8 lg:order-1 order-2"
          >
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10 bg-white"
              style={{
                border: '1px solid rgba(0,0,0,0.05)',
                borderLeft: '5px solid hsl(23, 100%, 56%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.09)',
              }}
            >
              <RichText
                data={solution.description}
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

          <ScrollReveal
            direction="up"
            delay={0.2}
            duration={0.6}
            distance={30}
            className="lg:col-span-4 lg:order-2 order-1"
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
                {solution.title}
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
