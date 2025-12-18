'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    setMobileMenuOpen(false) // Close mobile menu on route change
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
      <div className="container py-3 sm:py-4 md:py-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Logo loading="eager" priority="high" className="max-w-[120px] sm:max-w-[150px] md:max-w-none" />
        </Link>

        {/* Desktop: Center Nav Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <HeaderNav data={data} />
        </div>

        {/* Desktop: Right Contact Us Button */}
        <div className="hidden lg:flex flex-shrink-0 z-10">
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

        {/* Mobile/Tablet: Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex-shrink-0 z-10 text-white p-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-10 top-[73px] md:top-[89px]"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu Content */}
          <div className="lg:hidden border-t border-white/10 relative z-20 bg-[#070515]">
            <div className="container py-4 flex flex-col gap-4">
              <nav className="flex flex-col gap-2">
                {data?.navItems?.map(({ link }, i) => {
                  if (!link) return null
                  return (
                    <Link
                      key={i}
                      href={
                        link.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value.slug
                          ? `${link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''}/${link.reference.value.slug}`
                          : link.url || '#'
                      }
                      className="text-white hover:text-primary transition-colors text-base font-medium py-3 px-2 rounded-md hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
              <Button 
                asChild 
                variant="default" 
                size="default"
                style={{ backgroundColor: 'hsl(23, 100%, 56%)', color: 'white' }}
                className="hover:opacity-90 w-full mt-2"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
