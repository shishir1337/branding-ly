'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import type { TeamMember } from '@/payload-types'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

const PRIMARY_COLOR = 'hsl(23, 100%, 56%)'

export const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleNext = useCallback(() => {
    if (!teamMembers || teamMembers.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }, [teamMembers])

  const handlePrev = useCallback(() => {
    if (!teamMembers || teamMembers.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }, [teamMembers])

  useEffect(() => {
    if (!teamMembers || teamMembers.length === 0) return
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleNext, handlePrev, teamMembers])

  if (!teamMembers || teamMembers.length === 0) {
    return null
  }

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col">
          {/* Text Content */}
          <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
            <div className="mb-8 sm:mb-12">
              {/* "Meet the Team" */}
              <p
                className="mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 600,
                  lineHeight: '140%',
                  letterSpacing: '-0.32px',
                  color: PRIMARY_COLOR,
                }}
              >
                Meet the Team
              </p>

              {/* "DRIVEN BY PEOPLE POWERED BY PASSION" */}
              <h2
                className="mb-8 sm:mb-10"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.15',
                  letterSpacing: 'clamp(-0.8px, -0.04vw, -2px)',
                  textTransform: 'uppercase',
                  color: '#000000',
                }}
              >
                DRIVEN BY{' '}
                <span style={{ color: PRIMARY_COLOR }}>PEOPLE</span>
                <br />
                <span style={{ color: PRIMARY_COLOR }}>POWERED</span> BY PASSION
              </h2>
            </div>
          </ScrollReveal>

          {/* Carousel - Under the text */}
          <ScrollReveal direction="up" delay={0.2} duration={0.6} distance={30}>
            <div
              className="relative w-full overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Carousel Track - Shows 5 full + 0.5 of 6th */}
              <div
                className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / teamMembers.length)}%)`,
                }}
              >
                {teamMembers.map((member) => {
                  const image =
                    member.image && typeof member.image === 'object'
                      ? member.image
                      : null
                  const imageUrl = image?.url ? getMediaUrl(image.url, image.updatedAt) : ''

                  return (
                    <div
                      key={member.id}
                      className="relative flex-shrink-0 group overflow-hidden rounded-xl"
                      style={{
                        width: 'clamp(140px, 235px, 20vw)',
                        flexShrink: 0,
                        aspectRatio: '235/437',
                      }}
                    >
                      <div className="relative w-full h-full bg-gray-200">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={member.name || ''}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 140px, 235px"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: '#F8F8F8' }}
                          >
                            <span className="text-gray-400 text-sm">No image</span>
                          </div>
                        )}

                        {/* Hover - Bottom bar with Name and Role */}
                        <div
                          className="absolute flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4"
                          style={{
                            backgroundColor: PRIMARY_COLOR,
                            bottom: '8px',
                            left: '8px',
                            right: '8px',
                            borderRadius: '8px',
                          }}
                        >
                          <p
                            className="text-white font-semibold text-center mb-0.5 truncate"
                            style={{
                              fontSize: 'clamp(13px, 1.6vw, 16px)',
                              fontFamily: 'Geist, sans-serif',
                            }}
                          >
                            {member.name}
                          </p>
                          <p
                            className="text-white/95 text-center truncate"
                            style={{
                              fontSize: 'clamp(11px, 1.4vw, 14px)',
                              fontFamily: 'Geist, sans-serif',
                            }}
                          >
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Arrow Navigation - Under carousel */}
            <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={handlePrev}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${PRIMARY_COLOR}`,
                  color: PRIMARY_COLOR,
                  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                }}
                aria-label="Previous team member"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `2px solid ${PRIMARY_COLOR}`,
                  color: PRIMARY_COLOR,
                  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                }}
                aria-label="Next team member"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
