'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Media } from '@/components/Media'
import type { CaseStudy } from '@/payload-types'

interface GallerySectionProps {
  gallery?: CaseStudy['gallery']
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  if (!gallery || gallery.length === 0) {
    return null
  }

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
            {/* "Gallery" */}
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
              Project Gallery
            </p>

            {/* Title */}
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
              Visual Showcase
            </h2>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gallery.map((item, index) => {
            if (!item || typeof item === 'number' || !item.image) return null

            const image = typeof item.image === 'object' ? item.image : null
            if (!image) return null

            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + index * 0.1}
                duration={0.6}
                distance={30}
              >
                <div
                  className="overflow-hidden rounded-lg bg-white"
                  style={{
                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Media
                      resource={image}
                      size="33vw"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {item.caption && (
                    <div className="p-4">
                      <p
                        style={{
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: '1.4',
                          color: '#666666',
                          fontFamily: 'Geist, sans-serif',
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}

