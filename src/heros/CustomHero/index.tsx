'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Link from 'next/link'

export const CustomHero: React.FC = () => {
  return (
    <div 
      className="relative w-full py-20 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#070515' }}
    >
      <div className="container flex flex-col items-center text-center">
        {/* Leading Marketing Agency Text */}
        <p 
          className="font-bold"
          style={{ 
            color: 'hsl(23, 100%, 56%)',
            fontSize: '16px',
            fontWeight: 700
          }}
        >
          # Leading Marketing Agency
        </p>

        {/* Main Heading */}
        <h1 
          className="mb-4"
          style={{ 
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Anton, sans-serif',
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '80px',
            letterSpacing: '-1.28px'
          }}
        >
          <span>
            TRANSFORMING<br />
            IDEAS INTO REAL WORLD<br />
          </span>
          <span style={{ color: 'hsl(23, 100%, 56%)' }}>RESULTS</span>
        </h1>

        {/* Review Section */}
        <div className="flex items-center gap-4 mb-8">
          {/* Review Platform Image */}
          <div className="flex-shrink-0" style={{ height: '31px' }}>
            <Image
              src="/reviewplatform.png"
              alt="Review Platform"
              width={55}
              height={31}
              className="h-full w-auto"
            />
          </div>

          {/* Rating Section */}
          <div className="flex flex-col items-start">
            {/* Rating and Stars */}
            <div className="flex items-center gap-2 mb-1" style={{ height: '31px' }}>
              <span className="text-white text-2xl font-semibold">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-current"
                    style={{ 
                      color: 'hsl(23, 100%, 56%)',
                      width: '20px',
                      height: '20px'
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Review Text */}
            <p className="text-white text-sm">Based on 44+ reviews</p>
          </div>
        </div>

        {/* CTA Button */}
        <HoverBorderGradient
          as="div"
          containerClassName="rounded-full cursor-pointer [&>div:last-child]:!bg-[hsl(23,100%,56%)]"
          className="!bg-[hsl(23,100%,56%)] text-white flex items-center gap-2 text-lg font-medium"
          style={{
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '40px',
            paddingRight: '40px'
          }}
          duration={1}
          clockwise={true}
        >
          <Link href="/contact" className="flex items-center gap-2">
            <span>Book A Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </HoverBorderGradient>
      </div>
    </div>
  )
}

