'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface Testimonial {
  quote: string
  author: string
  role: string
  width: number
  height: number
}

// Sample testimonials with varying sizes for masonry effect
// Organized to balance heights: tall cards (344px, 331px) paired with short cards (239px)
const testimonials: Testimonial[] = [
  // Column 1: Tall + Short
  {
    quote: "Brandingly created our entire brand identity from scratch. The logo, website, marketing materials – everything was perfect. Highly recommended!",
    author: "Startup Founder",
    role: "Dhaka",
    width: 396,
    height: 331
  },
  {
    quote: "Best decision we made was hiring BRANDING-LY for our digital marketing. Lead generation increased by 400% in 3 months.",
    author: "Manufacturing Company",
    role: "Bangladesh",
    width: 396,
    height: 239
  },
  // Column 2: Short + Tall
  {
    quote: "Their event management team organized our product launch flawlessly. Professional, creative, and stress-free experience.",
    author: "FMCG Brand",
    role: "Dhaka",
    width: 396,
    height: 239
  },
  {
    quote: "Working with Branding-ly has transformed our online presence. Our website traffic doubled, and sales are at an all-time high.",
    author: "E-commerce Business",
    role: "Dhaka",
    width: 396,
    height: 344
  },
  // Column 3: Short + Tall
  {
    quote: "They understand our vision and deliver beyond expectations. Truly exceptional team.",
    author: "Emily Davis",
    role: "CMO, BrandCo",
    width: 396,
    height: 239
  },
  {
    quote: "The team's creativity and attention to detail is unmatched. We've achieved remarkable growth since working together.",
    author: "Lisa Anderson",
    role: "CEO, InnovateNow",
    width: 396,
    height: 344
  },
  // Column 4: Tall + Short
  {
    quote: "Professional, creative, and results-oriented. They've become an integral part of our success story.",
    author: "Jennifer Martinez",
    role: "Marketing Head, NextGen",
    width: 396,
    height: 331
  },
  {
    quote: "Best marketing decision we ever made. Results speak for themselves.",
    author: "David Brown",
    role: "Founder, ScaleUp",
    width: 396,
    height: 239
  },
  // Column 5: Short + Tall
  {
    quote: "Exceptional service and measurable results. Couldn't be happier with our partnership.",
    author: "James Taylor",
    role: "Director, FutureBrand",
    width: 396,
    height: 239
  },
  {
    quote: "They transformed our brand presence completely. The impact has been phenomenal.",
    author: "Amanda White",
    role: "CMO, DigitalFirst",
    width: 396,
    height: 344
  }
]

// Duplicate for infinite scroll
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials]

export const Testimonials: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="text-center mb-8 sm:mb-12">
          {/* "Our Testimonials" Title */}
          <p 
            className="mb-4 sm:mb-6"
            style={{
              color: 'hsl(23, 100%, 56%)',
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '140%',
              letterSpacing: '-0.32px'
            }}
          >
            Our Testimonials
          </p>

          {/* Main Heading */}
          <h2 
            className="mb-4 sm:mb-6"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(32px, 8vw, 64px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(40px, 10vw, 80px)',
              textAlign: 'center'
            }}
          >
            <span style={{ color: '#000000' }}>
              Trusted by Brands, Backed<br />by Proven{' '}
            </span>
            <span style={{ color: 'hsl(23, 100%, 56%)' }}>Results</span>
          </h2>

          {/* Description */}
          <p 
            className="max-w-3xl mx-auto"
            style={{
              color: '#898989',
              textAlign: 'center',
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
          >
            We partner with ambitious brands, delivering measurable results and experiences clients are proud to talk about.
          </p>
        </div>
        </ScrollReveal>

      </div>

      {/* Masonry Cards Container with Infinite Scroll - Full Width */}
      <div className="relative w-full">
        {/* Left Fade Mask */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
          }}
        />

        {/* Right Fade Mask */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'
          }}
        />

        {/* Scrolling Container */}
        <div className="overflow-x-hidden w-full">
          <div className="flex animate-testimonials gap-4 sm:gap-6" style={{ width: 'fit-content' }}>
            {/* Group testimonials into columns of 2 cards each */}
            {Array.from({ length: Math.ceil(infiniteTestimonials.length / 2) }).map((_, colIndex) => {
              const topCard = infiniteTestimonials[colIndex * 2]
              const bottomCard = infiniteTestimonials[colIndex * 2 + 1]
              
              return (
                <div
                  key={`column-${colIndex}`}
                  className="flex-shrink-0 flex flex-col gap-4 sm:gap-6"
                  style={{ width: '396px' }}
                >
                  {/* Top Card */}
                  {topCard && (
                    <div
                      className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                      style={{
                        width: `${topCard.width}px`,
                        height: `${topCard.height}px`,
                        borderRadius: '9px',
                        background: '#F8F8F8',
                        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.25)',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'default'
                      }}
                    >
                      <p 
                        className="text-black mb-4"
                        style={{
                          fontSize: 'clamp(14px, 1.8vw, 16px)',
                          lineHeight: '1.6',
                          fontFamily: 'Geist, sans-serif'
                        }}
                      >
                        &ldquo;{topCard.quote}&rdquo;
                      </p>
                      <div>
                        <p 
                          className="text-black font-semibold mb-1"
                          style={{
                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                            fontFamily: 'Geist, sans-serif'
                          }}
                        >
                          {topCard.author}
                        </p>
                        <p 
                          className="text-[#898989]"
                          style={{
                            fontSize: 'clamp(12px, 1.5vw, 14px)',
                            fontFamily: 'Geist, sans-serif'
                          }}
                        >
                          {topCard.role}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Card */}
                  {bottomCard && (
                    <div
                      className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                      style={{
                        width: `${bottomCard.width}px`,
                        height: `${bottomCard.height}px`,
                        borderRadius: '9px',
                        background: '#F8F8F8',
                        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.25)',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'default'
                      }}
                    >
                      <p 
                        className="text-black mb-4"
                        style={{
                          fontSize: 'clamp(14px, 1.8vw, 16px)',
                          lineHeight: '1.6',
                          fontFamily: 'Geist, sans-serif'
                        }}
                      >
                        &ldquo;{bottomCard.quote}&rdquo;
                      </p>
                      <div>
                        <p 
                          className="text-black font-semibold mb-1"
                          style={{
                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                            fontFamily: 'Geist, sans-serif'
                          }}
                        >
                          {bottomCard.author}
                        </p>
                        <p 
                          className="text-[#898989]"
                          style={{
                            fontSize: 'clamp(12px, 1.5vw, 14px)',
                            fontFamily: 'Geist, sans-serif'
                          }}
                        >
                          {bottomCard.role}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        </div>
    </div>
  )
}

