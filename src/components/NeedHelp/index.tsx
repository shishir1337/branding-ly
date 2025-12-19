'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const NeedHelp: React.FC = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <ScrollReveal direction="right" delay={0.1} duration={0.7} distance={50}>
            <div className="flex flex-col">
              {/* "Need Help?" Title */}
              <h2
                className="mb-4 sm:mb-6"
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
                Need Help?
              </h2>

              {/* Subtitle with primary color for "service your need?" */}
              <h3
                className="mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(24px, 5vw, 40px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  color: '#000000',
                }}
              >
                Couldn&apos;t Find the{' '}
                <span style={{ color: 'hsl(23, 100%, 56%)' }}>service your need?</span>
              </h3>

              {/* Description text */}
              <p
                className="mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#000000',
                }}
              >
                We might forget to put it in the list.
              </p>

              {/* Long description */}
              <p
                className="mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#666666',
                }}
              >
                Don&apos;t worry, our team of experts can help you navigate the maze of options and
                create a customized solution tailored to your unique needs.
              </p>

              {/* Arrow image and Contact Us button */}
              <div className="relative inline-block">
                <Image
                  src="/arrow.svg"
                  alt="Arrow"
                  width={60}
                  height={60}
                  className="hidden md:block absolute -top-8 left-1/2 -translate-x-[110%] w-auto h-auto z-0 pointer-events-none"
                />
                <Button
                  asChild
                  size="lg"
                  style={{
                    backgroundColor: 'hsl(23, 100%, 56%)',
                    color: 'white',
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    padding: '12px 32px',
                    borderRadius: '38px',
                  }}
                  className="hover:opacity-90 relative z-10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Image */}
          <ScrollReveal direction="left" delay={0.2} duration={0.7} distance={50}>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/communication.svg"
                alt="Communication"
                width={700}
                height={700}
                className="w-full max-w-2xl h-auto"
                style={{
                  background: 'transparent',
                }}
                unoptimized
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

