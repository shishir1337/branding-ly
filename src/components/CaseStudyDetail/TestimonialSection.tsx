'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Media } from '@/components/Media'
import type { CaseStudy } from '@/payload-types'

interface TestimonialSectionProps {
  testimonial?: CaseStudy['testimonial']
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonial }) => {
  if (!testimonial || !testimonial.quote || !testimonial.author) {
    return null
  }

  const image =
    testimonial.image && typeof testimonial.image === 'object' ? testimonial.image : null

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 sm:p-12 rounded-2xl"
              style={{
                background: '#FFF',
                boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Quote */}
              <div className="mb-6 sm:mb-8">
                <svg
                  width="48"
                  height="36"
                  viewBox="0 0 48 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                  style={{ color: 'hsl(23, 100%, 56%)' }}
                >
                  <path
                    d="M0 36V21.6C0 15.6 1.2 10.8 3.6 7.2C6 3.6 9.6 1.2 14.4 0L18 3.6C14.4 4.8 12 6.6 10.8 9C9.6 11.4 9 14.4 9 18V36H0ZM28.8 36V21.6C28.8 15.6 30 10.8 32.4 7.2C34.8 3.6 38.4 1.2 43.2 0L46.8 3.6C43.2 4.8 40.8 6.6 39.6 9C38.4 11.4 37.8 14.4 37.8 18V36H28.8Z"
                    fill="currentColor"
                  />
                </svg>
                <p
                  style={{
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#333333',
                    fontFamily: 'Geist, sans-serif',
                  }}
                >
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {image && (
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-full overflow-hidden"
                      style={{
                        width: '64px',
                        height: '64px',
                      }}
                    >
                      <Media
                        resource={image}
                        size="64px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <p
                    style={{
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '1.4',
                      color: '#000000',
                      fontFamily: 'Geist, sans-serif',
                    }}
                  >
                    {testimonial.author}
                  </p>
                  {testimonial.position && (
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
                      {testimonial.position}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

