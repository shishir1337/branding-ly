'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Media } from '@/components/Media'
import type { CaseStudy } from '@/payload-types'

interface CaseStudyDetailHeroProps {
  caseStudy: CaseStudy
}

export const CaseStudyDetailHero: React.FC<CaseStudyDetailHeroProps> = ({ caseStudy }) => {
  const featuredImage =
    caseStudy.featuredImage && typeof caseStudy.featuredImage === 'object'
      ? caseStudy.featuredImage
      : null

  const category =
    caseStudy.category && typeof caseStudy.category === 'object' ? caseStudy.category : null

  return (
    <div className="relative w-full">
      {/* Hero Section with Image Background */}
      <div
        className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#070515' }}
      >
        {/* Content */}
        <div className="relative container flex flex-col items-center text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 z-10">
          {/* Category Badge */}
          {category && (
            <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={20}>
              <div
                className="mb-4 sm:mb-6 inline-block"
                style={{
                  padding: '8px 20px',
                  borderRadius: '30px',
                  backgroundColor: 'rgba(255, 117, 31, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 117, 31, 0.3)',
                  color: '#FF751F',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Geist, sans-serif',
                }}
              >
                {category.title}
              </div>
            </ScrollReveal>
          )}

          {/* Main Heading */}
          <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={30}>
            <h1
              className="mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 md:px-0"
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(36px, 8vw, 72px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'clamp(44px, 10vw, 88px)',
                letterSpacing: 'clamp(-0.72px, -0.02vw, -1.44px)',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>{caseStudy.title}</span>
            </h1>
          </ScrollReveal>

          {/* Client */}
          {caseStudy.client && (
            <ScrollReveal direction="up" delay={0.3} duration={0.6} distance={20}>
              <div
                className="mb-6 sm:mb-8 inline-flex items-center gap-3 px-6 py-3 rounded-full"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <span
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  Client:
                </span>
                <span
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  {caseStudy.client}
                </span>
              </div>
            </ScrollReveal>
          )}

          {/* Excerpt */}
          {caseStudy.excerpt && (
            <ScrollReveal direction="up" delay={0.4} duration={0.6} distance={20}>
              <p
                className="mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4"
                style={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  textAlign: 'center',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                }}
              >
                {caseStudy.excerpt}
              </p>
            </ScrollReveal>
          )}

          {/* Scroll Indicator */}
          <ScrollReveal direction="up" delay={0.6} duration={0.6} distance={20}>
            <div className="flex flex-col items-center gap-2 mt-8">
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Scroll to explore
              </span>
              <div
                className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                <div
                  className="w-1 h-3 rounded-full animate-bounce"
                  style={{
                    backgroundColor: 'hsl(23, 100%, 56%)',
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
