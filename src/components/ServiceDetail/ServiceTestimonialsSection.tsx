'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import type { Service } from '@/payload-types'

interface ServiceTestimonialsSectionProps {
  testimonials?: Service['testimonials']
}

export const ServiceTestimonialsSection: React.FC<ServiceTestimonialsSectionProps> = ({
  testimonials,
}) => {
  // Don't render if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  // Transform CMS testimonials to AnimatedTestimonials format
  const formattedTestimonials = testimonials
    .filter((t) => t && typeof t === 'object')
    .map((testimonial) => {
      if (!testimonial || typeof testimonial === 'number') return null
      const image = testimonial.image
      let imageUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

      if (image && typeof image === 'object' && 'url' in image) {
        imageUrl = image.url || imageUrl
      }

      return {
        quote: testimonial.quote || '',
        name: testimonial.name || '',
        designation: testimonial.designation || '',
        src: imageUrl,
      }
    })
    .filter((t) => t !== null) as Array<{
      quote: string
      name: string
      designation: string
      src: string
    }>

  if (formattedTestimonials.length === 0) {
    return null
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
                letterSpacing: '-0.32px',
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
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#000000' }}>What our </span>
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>customer</span>
              <span style={{ color: '#000000' }}> says</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Animated Testimonials */}
        <div className="max-w-6xl mx-auto">
          <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
        </div>
      </div>
    </div>
  )
}

