'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight } from 'lucide-react'
import type { CaseStudy } from '@/payload-types'
import { Media } from '@/components/Media'

interface CaseStudiesProps {
  caseStudies: CaseStudy[]
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div
        className="w-full py-12 sm:py-16 md:py-20"
        style={{
          background:
            'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
        }}
      >
        <div className="container px-4 sm:px-6">
          <div className="text-center py-12">
            <p
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: '18px',
                color: '#666666',
              }}
            >
              No case studies available yet. Check back soon!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((caseStudy, index) => (
            <ScrollReveal
              key={caseStudy.id}
              direction="up"
              delay={0.1 + index * 0.1}
              duration={0.6}
              distance={30}
            >
              <div className="h-full">
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const featuredImage =
    caseStudy.featuredImage && typeof caseStudy.featuredImage === 'object'
      ? caseStudy.featuredImage
      : null

  const category =
    caseStudy.category && typeof caseStudy.category === 'object' ? caseStudy.category : null

  return (
    <div
      className="h-full transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
      style={{
        borderRadius: '10px',
        background: isHovered ? '#252626' : '#FFF',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        color: isHovered ? '#FFF' : '#000',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Image */}
      {featuredImage && (
        <div
          className="relative w-full aspect-video overflow-hidden"
          style={{
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          <Media
            resource={featuredImage}
            size="33vw"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Category Badge */}
        {/* {category && (
          <div
            className="mb-3 sm:mb-4 inline-block"
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              backgroundColor: isHovered ? 'rgba(255, 117, 31, 0.2)' : '#FFDFAF',
              color: isHovered ? '#FF751F' : '#000',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'Geist, sans-serif',
            }}
          >
            {category.title}
          </div>
        )} */}

        {/* Title */}
        <h3
          className="mb-3 sm:mb-4 font-semibold flex-shrink-0"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            lineHeight: '1.3',
            color: 'inherit',
            fontFamily: 'Anton, sans-serif',
            fontWeight: 400,
          }}
        >
          {caseStudy.title}
        </h3>

        {/* Client */}
        {/* {caseStudy.client && (
          <p
            className="mb-2 text-sm"
            style={{
              color: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)',
              fontFamily: 'Geist, sans-serif',
              fontWeight: 500,
            }}
          >
            Client: {caseStudy.client}
          </p>
        )} */}

        {/* Excerpt - flex-grow to fill available space */}
        {caseStudy.excerpt && (
          <p
            className="mb-4 sm:mb-6 flex-grow"
            style={{
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              lineHeight: '1.6',
              color: isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)',
              fontFamily: 'Geist, sans-serif',
            }}
          >
            {caseStudy.excerpt}
          </p>
        )}

        {/* View Case Study Button */}
        <Link href={`/case-studies/${caseStudy.slug}`} className="mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="w-fit flex-shrink-0 self-start flex items-center gap-2"
            style={{
              borderColor: isHovered ? 'hsl(23, 100%, 56%)' : '#000',
              color: isHovered ? '#FFF' : '#000',
              backgroundColor: isHovered ? 'hsl(23, 100%, 56%)' : 'transparent',
              borderRadius: '38px',
              padding: '6px 16px',
            }}
          >
            View Case Study
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

