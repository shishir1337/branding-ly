'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const AboutUs: React.FC = () => {
  return (
    <div 
      className="w-full"
      style={{ 
        backgroundColor: '#F8F8F8',
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)'
      }}
    >
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* About Us Title */}
            <h2 
              className="mb-4 sm:mb-6 pl-0 sm:pl-4 lg:pl-8"
              style={{
                color: 'hsl(23, 100%, 56%)',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: 700,
                fontFamily: 'Geist, sans-serif'
              }}
            >
              About us
            </h2>

            {/* About Us Image */}
            <div className="flex-shrink-0">
              <Image
                src="/aboutus.png"
                alt="About Us"
                width={396.396}
                height={411.208}
                className="w-full h-auto"
                style={{
                  height: 'auto'
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <h3 
              className="mb-4 sm:mb-6 md:mb-8"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(24px, 5vw, 45px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'clamp(1.2, 1.3, 1.3)',
                letterSpacing: 'clamp(-0.8px, -0.04vw, -2.25px)',
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: '#000000' }}>
                We are full Marketing agency helping brands{' '}
                grow connector help your company to lead{' '}
                through tailored strategies blending the{' '}
                creativity. We Are{' '}
              </span>
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>Branding-ly.</span>
            </h3>

            {/* Two Column Text Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-6 md:mb-8">
              {/* Left Text */}
              <p 
                className="text-black"
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  lineHeight: 'clamp(1.5, 1.6, 1.6)'
                }}
              >
                At Branding-ly, we know how important marketing is. Positioned as a leading marketing agency in Dhaka, we don't just want to be a regular marketing agency; we aim to be an integral part of the businesses we serve.
                <br /><br />
                Founded in 2022, our main goal is to cater marketing needs of all types of businesses..
              </p>

              {/* Right Text */}
              <p 
                className="text-black"
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  lineHeight: 'clamp(1.5, 1.6, 1.6)'
                }}
              >
                Unlike any other marketing company in Dhaka, we want to change how marketing works. We want to mix creativity, smart data, and cool technology to make marketing even better
              </p>
            </div>

            {/* CTA Button */}
            <div className="w-full sm:w-fit">
              <Button 
                asChild 
                variant="default" 
                size="lg"
                style={{ 
                  backgroundColor: 'hsl(23, 100%, 56%)', 
                  color: 'white',
                  fontSize: 'clamp(14px, 1.8vw, 16px)'
                }}
                className="hover:opacity-90 w-full sm:w-auto"
              >
                <Link href="/about">More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

