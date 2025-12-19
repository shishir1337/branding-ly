'use client'

import React, { useState, useEffect, useRef } from 'react'

interface WhyUsCard {
  title: string
  subtitle: string
  description: string
  backgroundColor: string
}

const whyUsData: WhyUsCard[] = [
  {
    title: 'Strategy',
    subtitle: '100% CUSTOMIZED',
    description: "We don't follow templates—we tailor every solution to fit your brand's specific goals.",
    backgroundColor: '#070515'
  },
  {
    title: 'CREATIVE & IMPACTFUL',
    subtitle: 'BEAUTY MEETS RESULTS',
    description: "Design isn't just for show. We build interfaces that not only look good but also drive action.",
    backgroundColor: '#0E0B25'
  },
  {
    title: 'FAST & FLEXIBLE',
    subtitle: 'MOVE QUICK, STAY SHARP',
    description: 'Our agile team delivers with speed while staying open to changes along the way. No bottlenecks.',
    backgroundColor: '#070515'
  }
]

export const WhyUs: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate when section enters viewport
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      // Start animation when section enters viewport
      // End when section is fully scrolled past
      const startPoint = windowHeight
      const endPoint = windowHeight - sectionHeight - 300 // 300px scroll distance
      
      // Calculate scroll progress (0 to 1)
      let progress = 0
      if (sectionTop < startPoint && sectionTop > endPoint) {
        progress = (startPoint - sectionTop) / (startPoint - endPoint)
        progress = Math.max(0, Math.min(1, progress))
      } else if (sectionTop <= endPoint) {
        progress = 1
      }

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate transform based on scroll progress
  // Start: show 400px from right (translateX positions card so only 400px visible from right)
  // End: show full card (translateX = 0, card width = 912px)
  const maxWidth = 912
  const initialVisibleWidth = 400
  const cardWidth = initialVisibleWidth + (scrollProgress * (maxWidth - initialVisibleWidth))
  // Translate to keep right edge aligned, revealing from right to left
  // When progress is 0, we want to show 400px from right, so translateX = 912 - 400 = 512
  // When progress is 1, we want to show full card, so translateX = 0
  const translateX = (maxWidth - initialVisibleWidth) * (1 - scrollProgress)

  return (
    <div ref={sectionRef} className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6">
        <div className="flex justify-end md:justify-center overflow-hidden">
          <div 
            ref={containerRef}
            className="flex flex-col md:flex-row overflow-hidden"
            style={{
              width: `${cardWidth}px`,
              maxWidth: '912px',
              borderRadius: '15px',
              boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
              transform: `translateX(${translateX}px)`,
              minWidth: '400px',
              marginLeft: 'auto',
              transition: 'transform 0.1s ease-out, width 0.1s ease-out'
            }}
          >
            {whyUsData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-between px-6 sm:px-8 py-8 flex-shrink-0"
                style={{
                  backgroundColor: card.backgroundColor,
                  width: '304px',
                  minHeight: '284px',
                  flexShrink: 0,
                  borderRadius: index === 0 ? '15px 0 0 15px' : index === whyUsData.length - 1 ? '0 15px 15px 0' : '0'
                }}
              >
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: 400,
                      fontFamily: 'Anton, sans-serif',
                      lineHeight: '1.2'
                    }}
                  >
                    {card.title}
                  </h3>
                  <h4
                    style={{
                      color: 'hsl(23, 100%, 56%)',
                      fontSize: 'clamp(12px, 1.5vw, 14px)',
                      fontWeight: 400,
                      fontFamily: 'Anton, sans-serif',
                      lineHeight: '1.3'
                    }}
                  >
                    {card.subtitle}
                  </h4>
                </div>
                <p
                  className="mt-auto"
                  style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontFamily: 'Geist, sans-serif',
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

