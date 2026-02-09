'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Image from 'next/image'

type PortfolioImageItem = {
  image?: unknown
  alt?: string | null
  id?: string | null
}

interface PortfolioSectionProps {
  portfolioImages?: PortfolioImageItem[] | null
  sectionTitle?: string | null
  sectionSubtitle?: string | null
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioImages,
  sectionTitle: titleProp,
  sectionSubtitle: subtitleProp,
}) => {
  if (!portfolioImages || portfolioImages.length === 0) {
    return null
  }
  const sectionTitle = titleProp ?? 'Our Portfolios'
  const sectionSubtitle = subtitleProp ?? 'Case Studies'

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12">
            <p
              className="mb-4 sm:mb-6 text-left"
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
              {sectionTitle}
            </p>
            <h2
              className="text-left"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                color: '#000000',
              }}
            >
              {sectionSubtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {portfolioImages.map((item, index) => {
            if (!item || typeof item === 'number') return null
            const image = item.image
            if (!image || typeof image === 'number') return null

            const imageUrl =
              typeof image === 'object' && image !== null && 'url' in image && typeof (image as { url?: string }).url === 'string'
                ? (image as { url: string }).url
                : '/webdesigncase1.png'
            const altText = item.alt || `Portfolio case study ${index + 1}`

            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={0.1 + index * 0.1}
                duration={0.6}
                distance={30}
              >
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: '22.35px',
                    border: '5px solid #1E1E20',
                    background: '#1E1E20',
                    padding: '8px',
                    marginTop: index === 0 ? '0px' : index === 1 ? '60px' : '120px',
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={altText}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{
                      borderRadius: '14.35px',
                      display: 'block',
                    }}
                  />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}

