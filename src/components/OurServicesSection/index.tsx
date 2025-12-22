'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronUp, ChevronDown } from 'lucide-react'
import { getServiceIcon } from '@/utilities/getServiceIcon'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import type { Service } from '@/payload-types'

interface OurServicesSectionProps {
  services: Service[]
}

export const OurServicesSection: React.FC<OurServicesSectionProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ensure we have services
  if (!services || services.length === 0) {
    return null
  }

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [services.length])

  // Get visible cards (always 3 cards)
  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex - 1 + i + services.length) % services.length
      cards.push({
        service: services[index],
        position: i, // 0 = top, 1 = center, 2 = bottom
      })
    }
    return cards
  }

  const visibleCards = getVisibleCards()

  return (
    <div
      className="w-full"
      style={{
        background: '#F8F8F8',
      }}
    >
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Label */}
            <p
              className="mb-4"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 600,
                color: 'hsl(23, 100%, 56%)',
              }}
            >
              Our Services
            </p>

            {/* Heading */}
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.2',
                color: '#000000',
                textTransform: 'uppercase',
              }}
            >
              EVERYTHING{' '}
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>YOUR BRAND</span>{' '}
              NEEDS ONLINE
            </h2>

            {/* Description */}
            <p
              className="mb-8"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.6',
                color: '#000000',
              }}
            >
              From SEO and paid ads to social media, branding, and web design — we
              offer everything you need to grow and succeed online.
            </p>

            {/* See All Services Button */}
            <Link href="/services" className="mb-8">
              <Button
                size="lg"
                className="flex items-center gap-2"
                style={{
                  backgroundColor: 'hsl(23, 100%, 56%)',
                  color: '#FFFFFF',
                  borderRadius: '38px',
                  padding: '12px 24px',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}
              >
                See All Services
                <ArrowRight size={20} />
              </Button>
            </Link>

            {/* Carousel Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid hsl(23, 100%, 56%)',
                  color: 'hsl(23, 100%, 56%)',
                  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                }}
                aria-label="Previous service"
              >
                <ChevronUp size={24} />
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid hsl(23, 100%, 56%)',
                  color: 'hsl(23, 100%, 56%)',
                  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                }}
                aria-label="Next service"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </div>

          {/* Right Column - Vertical Carousel */}
          <FollowerPointerCard title="Click to view">
            <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
              {/* Mask overlay for fade effect */}
              <div
                className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
                style={{
                  height: '120px',
                  background:
                    'linear-gradient(to bottom, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
                style={{
                  height: '120px',
                  background:
                    'linear-gradient(to top, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)',
                }}
              />

              {/* Carousel Container */}
              <div className="relative h-full">
                {visibleCards.map(({ service, position }) => {
                  const isCenter = position === 1
                  const isTop = position === 0
                  const isBottom = position === 2

                  return (
                    <div
                      key={`${service.id}-${position}`}
                      className="absolute left-0 right-0 transition-all duration-500 ease-in-out px-4"
                      style={{
                        transform: isCenter
                          ? 'translateY(-50%) scale(1)'
                          : isTop
                            ? 'translateY(-100%) scale(0.85)'
                            : 'translateY(0%) scale(0.85)',
                        opacity: isCenter ? 1 : 0.5,
                        zIndex: isCenter ? 20 : 10,
                        top: isCenter ? '50%' : isTop ? '25%' : '75%',
                      }}
                    >
                      <ServiceCard service={service} isActive={isCenter} />
                    </div>
                  )
                })}
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  service: Service
  isActive: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block p-6 sm:p-8 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
      style={{
        borderRadius: '14px',
        background: '#FFF',
        boxShadow: isActive
          ? '0 0 15px 0 rgba(0, 0, 0, 0.3)'
          : '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        transform: isActive ? 'scale(1)' : 'scale(0.9)',
      }}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6"
        style={{
          borderRadius: '9px',
          background: '#FFDFAF',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        }}
      >
        <div style={{ color: '#000000' }}>
          {getServiceIcon(service.icon || 'target', 32)}
        </div>
      </div>

      {/* Title */}
      <h3
        className="mb-3 sm:mb-4 font-semibold"
        style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          lineHeight: '1.3',
          color: '#000000',
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 'clamp(14px, 1.8vw, 16px)',
          lineHeight: '1.6',
          color: '#000000',
        }}
      >
        {service.description}
      </p>
    </Link>
  )
}

