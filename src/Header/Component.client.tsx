'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header 
      className="relative z-20 w-full" 
      style={{ backgroundColor: '#070515' }}
    >
      <div className="container py-6 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Logo loading="eager" priority="high" />
        </Link>

        {/* Center: Nav Menu */}
        <div className="flex-1 flex justify-center items-center">
          <HeaderNav data={data} />
        </div>

        {/* Right: Contact Us Button */}
        <div className="flex-shrink-0 z-10">
          <Button 
            asChild 
            variant="default" 
            size="default"
            style={{ backgroundColor: 'hsl(23, 100%, 56%)', color: 'white' }}
            className="hover:opacity-90"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
