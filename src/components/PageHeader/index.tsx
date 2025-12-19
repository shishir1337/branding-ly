'use client'

import React from 'react'

interface PageHeaderProps {
  title: string
  subtitle: string | React.ReactNode
  titleColor?: string
  subtitleColor?: string
  backgroundColor?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  titleColor = 'hsl(23, 100%, 56%)',
  subtitleColor = '#FFF',
  backgroundColor = '#070515',
}) => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center"
      style={{ backgroundColor }}
    >
      <div className="container px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Title */}
        <h1
          className="mb-4 sm:mb-6"
          style={{
            color: titleColor,
            textAlign: 'center',
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(32px, 8vw, 64px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'clamp(40px, 10vw, 80px)',
            letterSpacing: 'clamp(-0.64px, -0.015vw, -1.28px)',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: subtitleColor,
            textAlign: 'center',
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(24px, 5vw, 40px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: 'clamp(-0.48px, -0.01vw, -0.8px)',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

