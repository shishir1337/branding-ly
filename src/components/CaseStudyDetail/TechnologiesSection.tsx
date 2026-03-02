'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface TechnologiesSectionProps {
  technologies?: Array<{ name: string }> | null
  sectionLabel?: string | null
  sectionTitle?: string | null
}

const DEFAULT_LABEL = 'Technologies Used'
const DEFAULT_TITLE = 'Tech Stack'

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  technologies,
  sectionLabel: sectionLabelProp,
  sectionTitle: sectionTitleProp,
}) => {
  if (!technologies || technologies.length === 0) {
    return null
  }

  const sectionLabel = sectionLabelProp?.trim() || DEFAULT_LABEL
  const sectionTitle = sectionTitleProp?.trim() || DEFAULT_TITLE

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
                {sectionTitle}
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
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: '#FAFAFA',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {technologies.map((tech, index) => {
                  if (!tech || typeof tech === 'number') return null

                  return (
                    <ScrollReveal
                      key={index}
                      direction="up"
                      delay={0.1 + index * 0.04}
                      duration={0.5}
                      distance={16}
                    >
                      <div
                        className="px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 hover:scale-[1.03]"
                        style={{
                          borderRadius: '999px',
                          background: 'linear-gradient(135deg, #FFDFAF 0%, #FFE8C4 100%)',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(255, 117, 31, 0.15)',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 'clamp(14px, 1.7vw, 16px)',
                            fontWeight: 600,
                            lineHeight: '1.3',
                            color: '#111111',
                            fontFamily: 'Geist, sans-serif',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tech.name}
                        </p>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
