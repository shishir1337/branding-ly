'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface ResultsSectionProps {
  results?: {
    sectionLabel?: string | null
    title: string
    description: DefaultTypedEditorState
    metrics?: Array<{ label: string; value: string }> | null
  } | null
}

const MetricCard: React.FC<{ metric: { label: string; value: string }; index: number }> = ({
  metric,
  index,
}) => {
  return (
    <ScrollReveal direction="up" delay={0.1 + index * 0.1} duration={0.6} distance={30}>
      <div
        className="p-6 sm:p-8 text-center h-full transition-all duration-300 hover:scale-[1.02]"
        style={{
          borderRadius: '16px',
          background: '#FFF',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <p
          className="mb-3"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1',
            color: 'hsl(23, 100%, 56%)',
            fontFamily: 'Anton, sans-serif',
            letterSpacing: '-1px',
          }}
        >
          {metric.value}
        </p>
        <p
          style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '1.5',
            color: '#4A4A4A',
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

  const sectionLabel = results.sectionLabel?.trim() || 'The Results'
  const metrics = results.metrics || []

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <ScrollReveal
            direction="up"
            delay={0.1}
            duration={0.6}
            distance={30}
            className="lg:col-span-5"
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
                className="mb-6"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(34px, 5vw, 50px)',
                  fontWeight: 400,
                  lineHeight: '1.12',
                  color: '#000000',
                  letterSpacing: '-0.5px',
                }}
              >
                {results.title}
              </h2>
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: '#FAFAFA',
                  borderLeft: '5px solid hsl(23, 100%, 56%)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <RichText
                  data={results.description}
                  enableGutter={false}
                  className="case-study-description"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 'clamp(16px, 1.8vw, 18px)',
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: '#2A2A2A',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

          {metrics.length > 0 && (
            <ScrollReveal
              direction="up"
              delay={0.2}
              duration={0.6}
              distance={30}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
    </section>
  )
}
