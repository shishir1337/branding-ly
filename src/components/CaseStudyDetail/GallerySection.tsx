'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

interface GalleryItem {
  image: number | MediaType
  alt?: string | null
  caption?: string | null
}

interface GallerySectionProps {
  gallery?: GalleryItem[] | null
  sectionLabel?: string | null
  sectionTitle?: string | null
}

const DEFAULT_LABEL = 'Project Gallery'
const DEFAULT_TITLE = 'Visual Showcase'

export const GallerySection: React.FC<GallerySectionProps> = ({
  gallery,
  sectionLabel: sectionLabelProp,
  sectionTitle: sectionTitleProp,
}) => {
  if (!gallery || gallery.length === 0) {
    return null
  }

  const sectionLabel = sectionLabelProp?.trim() || DEFAULT_LABEL
  const sectionTitle = sectionTitleProp?.trim() || DEFAULT_TITLE

  return (
    <div
      className="w-full py-16 sm:py-20 md:py-24"
      style={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div
                className="w-14 h-1 rounded-full"
                style={{ backgroundColor: 'hsl(23, 100%, 56%)' }}
              />
              <p
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
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

            {/* Title */}
            <h2
              className="text-left mb-8 sm:mb-10"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(36px, 6vw, 52px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.15',
                color: '#000000',
                letterSpacing: '-0.5px',
              }}
            >
              {sectionTitle}
            </h2>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                    className="overflow-hidden rounded-xl bg-white group cursor-pointer transition-all duration-300 hover:shadow-xl"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Media
                        resource={image}
                        size="33vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {item.caption && (
                      <div className="p-4 sm:p-5">
                        <p
                          style={{
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '1.5',
                            color: '#555555',
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
    </div>
  )
}
