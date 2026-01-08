'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { CaseStudy } from '@/payload-types'

interface SolutionSectionProps {
  solution?: CaseStudy['solution']
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ solution }) => {
  if (!solution || !solution.title || !solution.description) {
    return null
  }

  return (
    <div
      className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(23, 100%, 56%) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
            <div className="mb-8 sm:mb-12">
              {/* "Our Solution" */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: 'hsl(23, 100%, 56%)' }}
                />
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '15.909px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '140%',
                    letterSpacing: '-0.318px',
                    color: 'hsl(23, 100%, 56%)',
                    textTransform: 'uppercase',
                  }}
                >
                  Our Solution
                </p>
              </div>

              {/* Title */}
              <h2
                className="mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(32px, 6vw, 48px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.2',
                  color: '#000000',
                }}
              >
                {solution.title}
              </h2>

              {/* Description */}
              <div
                className="p-6 sm:p-8 rounded-2xl bg-white"
                style={{
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  borderLeft: '4px solid hsl(23, 100%, 56%)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '1.8',
                    color: '#333333',
                  }}
                >
                  {solution.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

