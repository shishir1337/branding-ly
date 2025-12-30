'use client'

import React, { useState, FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const BlogHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div
      className="w-full py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#070515' }}
    >
      <div className="container px-4 sm:px-6 flex flex-col items-center text-center">
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          {/* Title */}
          <h1
            className="mb-4 sm:mb-6"
            style={{
              color: 'hsl(23, 100%, 56%)',
              textAlign: 'center',
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(32px, 8vw, 64px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(40px, 10vw, 80px)',
              letterSpacing: 'clamp(-0.64px, -0.015vw, -1.28px)',
            }}
          >
            Our Blog
          </h1>

          {/* Subtitle */}
          <p
            className="mb-8 sm:mb-10 max-w-2xl mx-auto"
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            Stay updated with the latest insights, tips, and news about digital marketing, web design,
            and business growth.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-2xl mx-auto"
          >
            <div
              className="relative flex items-center bg-white rounded-full overflow-hidden shadow-lg"
              style={{
                borderRadius: '50px',
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 px-6 py-4 sm:py-5 outline-none text-black"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'hsl(23, 100%, 56%)',
                  color: '#FFFFFF',
                }}
              >
                <Search size={20} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  )
}

