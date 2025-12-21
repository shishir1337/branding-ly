'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import type { Service } from '@/payload-types'

interface ServiceDetailHeroProps {
  service: Service
}

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({ service }) => {
  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <div
      className="relative w-full py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#070515' }}
    >
      <div className="container flex flex-col items-center text-center px-4 sm:px-6">
        {/* Main Heading */}
        <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={30}>
          <h1
            className="mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-0"
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(28px, 7vw, 64px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(36px, 9vw, 80px)',
              letterSpacing: 'clamp(-0.56px, -0.015vw, -1.28px)',
            }}
          >
            <span style={{ color: 'hsl(23, 100%, 56%)' }}>{service.title}</span>
            <br />
            <span style={{ color: '#FFFFFF' }}>Services in Bangladesh</span>
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6} distance={20}>
          <p
            className="mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            {service.description}
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={0.6} duration={0.6} distance={20}>
          <HoverBorderGradient
            as="div"
            containerClassName="rounded-full cursor-pointer [&>div:last-child]:!bg-[hsl(23,100%,56%)] w-fit mx-auto"
            className="!bg-[hsl(23,100%,56%)] text-white flex items-center justify-center gap-2 font-medium"
            style={{
              paddingTop: 'clamp(12px, 1.8vw, 15px)',
              paddingBottom: 'clamp(12px, 1.8vw, 15px)',
              paddingLeft: 'clamp(24px, 4.5vw, 40px)',
              paddingRight: 'clamp(24px, 4.5vw, 40px)',
              fontSize: 'clamp(14px, 2vw, 18px)',
            }}
            duration={1}
            clockwise={true}
          >
            <Link
              href="#contact"
              onClick={handleGetStartedClick}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Link>
          </HoverBorderGradient>
        </ScrollReveal>
      </div>
    </div>
  )
}

