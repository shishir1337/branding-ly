'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import RichText from '@/components/RichText'
import type { CaseStudy } from '@/payload-types'

interface CaseStudyDetailHeroProps {
  caseStudy: CaseStudy
}

export const CaseStudyDetailHero: React.FC<CaseStudyDetailHeroProps> = ({ caseStudy }) => {
  const category =
    caseStudy.category && typeof caseStudy.category === 'object' ? caseStudy.category : null

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[50vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#070515' }}
      >
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(23, 100%, 56%) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, hsl(23, 100%, 56%) 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative container flex flex-col items-center text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 z-10">
          {/* Category Badge */}
          {category && (
            <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={20}>
              <div
                className="mb-5 sm:mb-6 inline-block"
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  backgroundColor: 'rgba(255, 117, 31, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 117, 31, 0.25)',
                  color: '#FF751F',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Geist, sans-serif',
                  letterSpacing: '0.5px',
                }}
              >
                {category.title}
              </div>
            </ScrollReveal>
          )}

          {/* Main Heading */}
          <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={30}>
            <h1
              className="mb-5 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-0"
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(40px, 8vw, 80px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'clamp(48px, 10vw, 96px)',
                letterSpacing: 'clamp(-0.8px, -0.02vw, -1.6px)',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>{caseStudy.title}</span>
            </h1>
          </ScrollReveal>

          {/* Client */}
          {caseStudy.client && typeof caseStudy.client === 'object' && caseStudy.client.root && (
            <ScrollReveal direction="up" delay={0.3} duration={0.6} distance={20}>
              <div
                className="mb-5 sm:mb-6 inline-flex items-center gap-3 px-6 py-3 rounded-full"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                  }}
                >
                  Client:
                </span>
                <div
                  className="[&_.payload-richtext]:text-white [&_.payload-richtext]:text-base [&_.payload-richtext]:font-semibold [&_.payload-richtext]:font-[Geist,sans-serif] [&_.payload-richtext]:m-0 [&_.payload-richtext]:inline"
                  style={{ display: 'inline' }}
                >
                  <RichText
                    data={caseStudy.client}
                    enableGutter={false}
                    enableProse={false}
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Excerpt */}
          {caseStudy.excerpt && (
            <ScrollReveal direction="up" delay={0.4} duration={0.6} distance={20}>
              <p
                className="mb-8 sm:mb-10 max-w-3xl mx-auto px-4"
                style={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  textAlign: 'center',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.75',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                }}
              >
                {caseStudy.excerpt}
              </p>
            </ScrollReveal>
          )}

          {/* Subtle Scroll Indicator */}
          <ScrollReveal direction="up" delay={0.6} duration={0.6} distance={20}>
            <div className="flex flex-col items-center gap-2 mt-6 sm:mt-8">
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Scroll to explore
              </span>
              <div
                className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <div
                  className="w-1 h-2.5 rounded-full"
                  style={{
                    backgroundColor: 'hsl(23, 100%, 56%)',
                    animation: 'bounce 2s infinite',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
