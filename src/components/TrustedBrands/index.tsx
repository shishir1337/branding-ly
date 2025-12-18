'use client'

import React from 'react'
import Image from 'next/image'

// Generate array of client image paths
const clientImages = Array.from({ length: 20 }, (_, i) => `/clients/${i + 1}.png`)

export const TrustedBrands: React.FC = () => {
  // Duplicate the array for seamless marquee loop
  const marqueeImages = [...clientImages, ...clientImages]

  return (
    <div className="w-full bg-white py-4 sm:py-6 md:py-8">
      <div className="container mb-4 sm:mb-6 md:mb-8">
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
          {marqueeImages.map((src, i) => (
            <div key={`logo-${i}`} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Client Brand ${i % 20 + 1}`}
                width={114}
                height={60}
                className="h-auto opacity-50 hover:opacity-100 transition-opacity"
                style={{ width: 'clamp(80px, 12vw, 114px)', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

