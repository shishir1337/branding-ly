'use client'

import React from 'react'
import Image from 'next/image'

export const TrustedBrands: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-10 md:py-12">
      <div className="container mb-6 sm:mb-8 md:mb-10">
        {/* Section Title */}
        <p 
          className="text-center font-medium"
          style={{ 
            color: '#1D2D35',
            fontSize: 'clamp(14px, 2vw, 18px)',
            opacity: 0.7
          }}
        >
          Trusted & Collaborating with global industry leaders
        </p>
      </div>

      {/* Marquee Container - Full Width */}
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-marquee gap-8 md:gap-12">
          {/* First set of logos */}
          {[...Array(8)].map((_, i) => (
            <div key={`logo-1-${i}`} className="flex-shrink-0">
              <Image
                src="/clients/brandimage.svg"
                alt="Client Brand"
                width={114}
                height={22}
                className="h-auto opacity-50 hover:opacity-100 transition-opacity"
                style={{ width: 'clamp(80px, 12vw, 114px)' }}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(8)].map((_, i) => (
            <div key={`logo-2-${i}`} className="flex-shrink-0">
              <Image
                src="/clients/brandimage.svg"
                alt="Client Brand"
                width={114}
                height={22}
                className="h-auto opacity-50 hover:opacity-100 transition-opacity"
                style={{ width: 'clamp(80px, 12vw, 114px)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

