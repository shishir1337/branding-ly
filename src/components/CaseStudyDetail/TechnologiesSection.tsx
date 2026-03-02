'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Media } from '@/components/Media'

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
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12">
            {/* "Technologies Used" */}
            <p
              className="mb-4 sm:mb-6 text-left"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: '15.909px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '140%',
                letterSpacing: '-0.318px',
                color: 'hsl(23, 100%, 56%)',
              }}
            >
              {sectionLabel}
            </p>

            {/* Title */}
            <h2
              className="text-left mb-8 sm:mb-12"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                color: '#000000',
              }}
            >
              {sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {technologies.map((tech, index) => {
            if (!tech || typeof tech === 'number') return null

            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + index * 0.05}
                duration={0.6}
                distance={20}
              >
                <div
                  className="px-4 sm:px-6 py-2 sm:py-3"
                  style={{
                    borderRadius: '20px',
                    background: '#FFDFAF',
                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '1.4',
                      color: '#000000',
                      fontFamily: 'Geist, sans-serif',
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
    </div>
  )
}

