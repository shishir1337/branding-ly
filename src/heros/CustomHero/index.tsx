'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const CustomHero: React.FC = () => {
  return (
    <div 
      className="relative w-full py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#070515' }}
    >
      <div className="container flex flex-col items-center text-center px-4 sm:px-6">
        {/* Leading Marketing Agency Text */}
        <ScrollReveal direction="fade" delay={0.1} duration={0.6}>
          <p 
            className="font-bold mb-2 sm:mb-4 md:mb-5"
            style={{ 
              color: 'hsl(23, 100%, 56%)',
              fontSize: 'clamp(12px, 2vw, 16px)',
              fontWeight: 700,
              lineHeight: '1.2'
            }}
          >
            # Leading Branding Agency
          </p>
        </ScrollReveal>

        {/* Main Heading */}
        <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={30}>
          <h1 
            className="mb-2 sm:mb-4 md:mb-2 px-2 sm:px-4 md:px-0"
            style={{ 
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(28px, 7vw, 64px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(36px, 9vw, 80px)',
              letterSpacing: 'clamp(-0.56px, -0.015vw, -1.28px)'
            }}
          >
            <span>
              TRANSFORMING<br />
              IDEAS INTO REAL WORLD<br />
            </span>
            <span style={{ color: 'hsl(23, 100%, 56%)' }}>RESULTS</span>
          </h1>
        </ScrollReveal>

        {/* Review Section */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6} distance={20}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-2 md:mb-5">
          {/* Review Platform Image */}
          <div className="flex-shrink-0" style={{ height: 'clamp(22px, 3.5vw, 31px)' }}>
            <Image
              src="/reviewplatform.png"
              alt="Review Platform"
              width={55}
              height={31}
              className="h-full w-auto"
              style={{ height: 'clamp(22px, 3.5vw, 31px)' }}
            />
          </div>

          {/* Rating Section */}
          <div className="flex flex-col items-start">
            {/* Rating and Stars */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-0.5" style={{ height: 'clamp(22px, 3.5vw, 31px)' }}>
              <span 
                className="text-white font-semibold whitespace-nowrap"
                style={{ fontSize: 'clamp(16px, 2.5vw, 24px)' }}
              >
                5.0
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-current flex-shrink-0"
                    style={{ 
                      color: 'hsl(23, 100%, 56%)',
                      width: 'clamp(14px, 2vw, 20px)',
                      height: 'clamp(14px, 2vw, 20px)'
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Review Text */}
            <p 
              className="text-white text-left whitespace-nowrap"
              style={{ fontSize: 'clamp(11px, 1.8vw, 14px)' }}
            >
              Based on 44+ reviews
            </p>
          </div>
        </div>
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
            fontSize: 'clamp(14px, 2vw, 18px)'
          }}
          duration={1}
          clockwise={true}
        >
          <Link href="/contact" className="flex items-center gap-2 whitespace-nowrap">
            <span>Book A Call</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </Link>
        </HoverBorderGradient>
        </ScrollReveal>
      </div>
    </div>
  )
}

