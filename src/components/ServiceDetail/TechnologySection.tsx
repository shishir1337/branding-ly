'use client'

import React, { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import RichText from '@/components/RichText'
interface TechnologyCardProps {
  tech: {
    title: string
    description: unknown
  }
  index: number
}

/** Supports both block shape (sectionTitle, sectionSubtitle, items) and legacy group shape (enabled, ...) */
interface TechnologySectionProps {
  technologies?: {
    enabled?: boolean
    sectionTitle?: string | null
    sectionSubtitle?: string | null
    items?: Array<{ title?: string | null; description?: unknown; id?: string | null }> | null
  }
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollReveal
      direction="up"
      delay={0.1 + index * 0.1}
      duration={0.6}
      distance={30}
    >
      <div
        className="p-6 sm:p-8 h-full cursor-pointer transition-all duration-300"
        style={{
          borderRadius: '14px',
          background: '#FFF',
          boxShadow: isHovered
            ? '0 8px 20px 0 rgba(0, 0, 0, 0.15)'
            : '0 0 5px 0 rgba(0, 0, 0, 0.25)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          border: isHovered ? '1px solid rgba(255, 117, 31, 0.2)' : '1px solid transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3
          className="mb-3 sm:mb-4 transition-colors duration-300"
          style={{
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            color: isHovered ? '#FF751F' : '#FF751F',
            fontFamily: 'Anton, sans-serif',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            display: 'inline-block',
          }}
        >
          {tech.title}
        </h3>
        <div
          style={{
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            color: '#000000',
            fontFamily: 'Helvetica, Arial, sans-serif',
            transition: 'opacity 0.3s ease',
            opacity: isHovered ? 0.9 : 1,
          }}
        >
          <RichText data={tech.description as Parameters<typeof RichText>[0]['data']} enableProse={false} enableGutter={false} />
        </div>
      </div>
    </ScrollReveal>
  )
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ technologies }) => {
  if (!technologies?.items?.length || technologies.enabled === false) {
    return null
  }

  const sectionTitle = technologies.sectionTitle || 'Technology We Use'
  const sectionSubtitle = technologies.sectionSubtitle || 'We believe in using the best\ntools for each job.'

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12">
            {sectionTitle && (
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
                {sectionTitle}
              </p>
            )}
            {sectionSubtitle && (
              <h2
                className="text-left"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  color: '#000000',
                  whiteSpace: 'pre-line',
                }}
              >
                {sectionSubtitle}
              </h2>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.items.map((tech, index) => {
            if (!tech || typeof tech === 'number') return null
            return (
              <TechnologyCard
                key={index}
                tech={{
                  title: tech.title || '',
                  description: tech.description ?? null,
                }}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

