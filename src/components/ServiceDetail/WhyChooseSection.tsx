'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { CheckCircle } from 'lucide-react'
import RichText from '@/components/RichText'

type WhyChooseItem = {
  title?: string | null
  description?: unknown
  id?: string | null
}

interface WhyChooseSectionProps {
  section?: {
    enabled?: boolean
    sectionTitle?: string | null
    items?: WhyChooseItem[] | null
  }
}

interface FeatureCardProps {
  feature: WhyChooseItem
  isWide?: boolean
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isWide = false, delay: _delay = 0 }) => {
  if (!feature || typeof feature === 'number') return null

  const title = feature.title || ''
  const description = feature.description || null
  return (
    <div
      className={`group relative overflow-hidden h-full rounded-2xl bg-white p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 ${
        isWide ? 'flex flex-col justify-center' : ''
      }`}
      style={{
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(139.25% 144.68% at 100% -32.85%, rgba(255, 223, 175, 0.2) 21.12%, rgba(255, 238, 223, 0.1) 73.2%, rgba(255, 255, 255, 0.05) 89.16%)',
        }}
      />

      {/* Icon container */}
      <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground bg-primary/10 text-primary">
        <CheckCircle className="h-6 w-6" />
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="mb-2 font-semibold"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            lineHeight: '1.3',
            color: 'hsl(23, 100%, 56%)',
          }}
        >
          {title}
        </h3>
        <div
          className={`leading-relaxed ${isWide ? 'max-w-md' : ''}`}
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: '1.6',
            color: '#666666',
          }}
        >
          <RichText data={(description ?? undefined) as Parameters<typeof RichText>[0]['data']} enableProse={false} enableGutter={false} />
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full transition-transform duration-500 group-hover:scale-150"
        style={{
          backgroundColor: 'rgba(255, 223, 175, 0.1)',
        }}
      />
    </div>
  )
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ section }) => {
  if (!section?.items?.length || section.enabled === false) {
    return null
  }

  const sectionTitle = section.sectionTitle || 'Why Choose Brandingly'
  const sectionSubtitle = section.sectionTitle ? null : 'Why Choose Brandingly – What Makes Us Different'

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <div className="container px-4 sm:px-6">
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
            <h2
              className="text-left"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                color: '#000000',
              }}
            >
              {section.sectionTitle ? (
                section.sectionTitle
              ) : (
                <>
                  Why Choose <span style={{ color: 'hsl(23, 100%, 56%)' }}>Brandingly</span> – What <br />
                  Makes Us Different
                </>
              )}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {section.items.slice(0, 3).map((feature, index) => {
            if (!feature || typeof feature === 'number') return null
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + index * 0.1}
                duration={0.6}
                distance={30}
                className="h-full"
              >
                <FeatureCard feature={feature} delay={100 + index * 100} />
              </ScrollReveal>
            )
          })}
          {section.items[6] && typeof section.items[6] === 'object' && (
            <ScrollReveal
              direction="up"
              delay={0.4}
              duration={0.6}
              distance={30}
              className="h-full lg:row-span-2 lg:row-start-1 lg:col-start-4"
            >
              <FeatureCard feature={section.items[6]} isWide delay={400} />
            </ScrollReveal>
          )}
          {section.items.slice(3, 6).map((feature, index) => {
            if (!feature || typeof feature === 'number') return null
            return (
              <ScrollReveal
                key={index + 3}
                direction="up"
                delay={0.5 + index * 0.1}
                duration={0.6}
                distance={30}
                className="h-full"
              >
                <FeatureCard feature={feature} delay={500 + index * 100} />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}

