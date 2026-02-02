'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Media } from '@/components/Media'
import type { CaseStudy } from '@/payload-types'

interface FeaturedImageSectionProps {
  featuredImage?: CaseStudy['featuredImage']
}

export const FeaturedImageSection: React.FC<FeaturedImageSectionProps> = ({ featuredImage }) => {
  if (!featuredImage || typeof featuredImage !== 'object') {
    return null
  }

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6 flex justify-center">
        <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={40}>
          <div className="max-w-6xl w-full flex justify-center">
            <div
              className="rounded-2xl overflow-hidden w-full"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Media
                resource={featuredImage}
                size="80vw"
                className="w-full h-auto mx-auto block"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

