'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface PageHeaderProps {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  titleColor?: string
  subtitleColor?: string
  backgroundColor?: string
  ctaButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  titleColor = 'hsl(23, 100%, 56%)',
  subtitleColor = '#FFF',
  backgroundColor = '#070515',
  ctaButton,
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
        {subtitle && (
          <p
            className="mb-6 sm:mb-8"
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
        )}

        {/* CTA Button */}
        {ctaButton && (
          <>
            {ctaButton.href ? (
              <Button
                size="lg"
                className="flex items-center gap-2"
                style={{
                  backgroundColor: 'hsl(23, 100%, 56%)',
                  color: '#FFFFFF',
                  borderRadius: '38px',
                  padding: '12px 24px',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}
                asChild
              >
                <Link href={ctaButton.href}>{ctaButton.text}</Link>
              </Button>
            ) : (
              <Button
                size="lg"
                className="flex items-center gap-2"
                style={{
                  backgroundColor: 'hsl(23, 100%, 56%)',
                  color: '#FFFFFF',
                  borderRadius: '38px',
                  padding: '12px 24px',
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                }}
                onClick={ctaButton.onClick}
              >
                {ctaButton.text}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

