'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { CaseStudy } from '@/payload-types'

interface ResultsSectionProps {
  results?: CaseStudy['results']
}

const MetricCard: React.FC<{ metric: { label: string; value: string }; index: number }> = ({
  metric,
  index,
}) => {
  return (
    <ScrollReveal
      direction="up"
      delay={0.1 + index * 0.1}
      duration={0.6}
      distance={30}
    >
      <div
        className="p-6 sm:p-8 text-center"
        style={{
          borderRadius: '14px',
          background: '#FFF',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        }}
      >
        <p
          className="mb-2"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            color: 'hsl(23, 100%, 56%)',
            fontFamily: 'Anton, sans-serif',
          }}
        >
          {metric.value}
        </p>
        <p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.4',
            color: '#666666',
            fontFamily: 'Geist, sans-serif',
          }}
        >
          {metric.label}
        </p>
      </div>
    </ScrollReveal>
  )
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
  if (!results || !results.title || !results.description) {
    return null
  }

  const metrics = results.metrics || []

  return (
    <div className="w-full py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-5"
        style={{
          background: 'radial-gradient(circle, hsl(23, 100%, 56%) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
            <div className="mb-12 sm:mb-16">
              {/* "The Results" */}
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
                  The Results
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
                {results.title}
              </h2>

              {/* Description */}
              <div
                className="p-6 sm:p-8 rounded-2xl mb-8 sm:mb-12"
                style={{
                  backgroundColor: '#F8F8F8',
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
                  {results.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Metrics Grid */}
          {metrics.length > 0 && (
            <ScrollReveal direction="up" delay={0.2} duration={0.6} distance={30}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {metrics.map((metric, index) => {
                  if (!metric || typeof metric === 'number') return null
                  return (
                    <MetricCard
                      key={index}
                      metric={{
                        label: metric.label || '',
                        value: metric.value || '',
                      }}
                      index={index}
                    />
                  )
                })}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  )
}

