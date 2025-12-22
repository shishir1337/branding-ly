'use client'

import React, { useState, useEffect, useCallback } from 'react'
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
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = React.useRef<HTMLDivElement>(null)

  // Handle navigation
  const handleNext = useCallback(() => {
    if (!services || services.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }, [services])

  const handlePrev = useCallback(() => {
    if (!services || services.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [services])

  // Keyboard navigation
  useEffect(() => {
    if (!services || services.length === 0) return
    const handleKeyPress = (e: KeyboardEvent) => {
      if (carouselRef.current?.contains(document.activeElement) || document.activeElement === document.body) {
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          handlePrev()
        } else if (e.key === 'ArrowDown') {
          e.preventDefault()
          handleNext()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleNext, handlePrev, services])

  // Mouse wheel navigation
  useEffect(() => {
    if (!services || services.length === 0) return
    const handleWheel = (e: WheelEvent) => {
      if (carouselRef.current?.contains(e.target as Node)) {
        e.preventDefault()
        if (e.deltaY > 0) {
          handleNext()
        } else {
          handlePrev()
        }
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false })
      return () => carousel.removeEventListener('wheel', handleWheel)
    }
  }, [handleNext, handlePrev, services])

  // Auto-advance carousel (pauses on hover)
  useEffect(() => {
    if (!services || services.length === 0) return
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [services, isHovered])

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

  // Ensure we have services
  if (!services || services.length === 0) {
    return null
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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid hsl(23, 100%, 56%)',
                    color: 'hsl(23, 100%, 56%)',
                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                  }}
                  aria-label="Previous service"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ChevronUp size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-all hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid hsl(23, 100%, 56%)',
                    color: 'hsl(23, 100%, 56%)',
                    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                  }}
                  aria-label="Next service"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ChevronDown size={24} />
                </button>
              </div>

              {/* Service Indicator Dots */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    color: '#666',
                    fontSize: '12px',
                  }}
                >
                  {currentIndex + 1} / {services.length}
                </span>
                <div className="flex gap-1.5">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: index === currentIndex ? '24px' : '8px',
                        height: '8px',
                        backgroundColor:
                          index === currentIndex
                            ? 'hsl(23, 100%, 56%)'
                            : 'rgba(255, 117, 31, 0.3)',
                        cursor: 'pointer',
                      }}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Vertical Carousel */}
          <FollowerPointerCard title="Learn More">
            <div
              ref={carouselRef}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              tabIndex={0}
              role="region"
              aria-label="Services carousel"
            >
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

                  return (
                    <div
                      key={`${service.id}-${position}`}
                      className="absolute left-0 right-0 transition-all duration-700 ease-out px-4"
                      style={{
                        transform: isCenter
                          ? 'translateY(-50%) scale(1) translateZ(0)'
                          : isTop
                            ? 'translateY(-100%) scale(0.85) translateZ(0)'
                            : 'translateY(0%) scale(0.85) translateZ(0)',
                        opacity: isCenter ? 1 : isTop ? 0.4 : 0.4,
                        zIndex: isCenter ? 20 : 10,
                        top: isCenter ? '50%' : isTop ? '25%' : '75%',
                        filter: isCenter
                          ? 'none'
                          : 'blur(1px) brightness(0.95)',
                        willChange: 'transform, opacity',
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
      className="block p-6 sm:p-8 transition-all duration-300 cursor-pointer"
      style={{
        borderRadius: '14px',
        background: '#FFF',
        boxShadow: isActive
          ? '0 10px 30px -5px rgba(255, 117, 31, 0.3), 0 0 15px 0 rgba(0, 0, 0, 0.2)'
          : '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        transform: isActive ? 'scale(1)' : 'scale(0.9)',
        border: isActive ? '2px solid rgba(255, 117, 31, 0.2)' : '2px solid transparent',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = 'scale(0.92)'
          e.currentTarget.style.opacity = '0.6'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.transform = 'scale(0.9)'
          e.currentTarget.style.opacity = '0.4'
        }
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

