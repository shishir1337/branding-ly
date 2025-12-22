'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Briefcase, Heart, DollarSign, Calendar } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  label: string
  value: string
  suffix?: string
  prefix?: string
  duration?: number
}

const stats: StatItem[] = [
  {
    icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Completed Projects',
    value: '100',
    suffix: '+',
    duration: 2000
  },
  {
    icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Customer Satisfaction',
    value: '100',
    suffix: '%',
    duration: 2000
  },
  {
    icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Raised by Clients',
    value: '10',
    prefix: '$',
    suffix: 'M',
    duration: 2000
  },
  {
    icon: <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />,
    label: 'Years in business',
    value: '2',
    suffix: ' years',
    duration: 2000
  }
]

const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start)
  const countRef = useRef<number>(start)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const hasAnimatedRef = useRef<boolean>(false)

  useEffect(() => {
    if (hasAnimatedRef.current) return

    const startTime = Date.now()
    const endValue = end

    const updateCount = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (endValue - start) * easeOutQuart)
      
      countRef.current = currentCount
      setCount(currentCount)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(updateCount)
      } else {
        setCount(endValue)
        hasAnimatedRef.current = true
      }
    }

    // Start animation when component mounts or when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          updateCount()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('statistics-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [end, duration, start])

  return count
}

const StatCard: React.FC<StatItem & { index: number }> = ({ icon, label, value, suffix, prefix, duration = 2000, index }) => {
  const numericValue = parseFloat(value)
  const count = useCountUp(numericValue, duration)

  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-4 text-[hsl(23,100%,56%)]">
        {icon}
      </div>

      {/* Label */}
      <p 
        className="mb-2 font-medium text-black"
        style={{
          fontSize: 'clamp(12px, 1.5vw, 14px)'
        }}
      >
        {label}
      </p>

      {/* Number */}
      <div 
        className="mb-4 font-bold text-black"
        style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 700
        }}
      >
        {prefix}{count}{suffix}
      </div>

      {/* Divider */}
      {index < stats.length - 1 && (
        <div 
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
          style={{ backgroundColor: 'hsl(23, 100%, 56%)' }}
        />
      )}
    </div>
  )
}

interface StatisticsProps {
  customBackground?: boolean
}

export const Statistics: React.FC<StatisticsProps> = ({ customBackground = false }) => {
  const backgroundStyle = customBackground
    ? {
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }
    : { backgroundColor: '#FFFFFF' }

  return (
    <div
      id="statistics-section"
      className="w-full py-12 sm:py-16 md:py-20"
      style={backgroundStyle}
    >
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatCard {...stat} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

