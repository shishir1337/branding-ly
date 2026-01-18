'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Logo } from '@/components/Logo/Logo'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="mt-auto text-white" style={{ background: '#070515' }}>
      {/* Top Section */}
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Side - Heading */}
          <div>
            <h2
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(32px, 8vw, 70px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '110%',
                letterSpacing: 'clamp(-1.2px, -0.04vw, -2.8px)',
                textTransform: 'uppercase'
              }}
            >
              Find <span style={{ color: 'hsl(23, 100%, 56%)' }}>solutions</span>
              <br />
              that fit your needs
            </h2>
          </div>

          {/* Right Side - Description and Newsletter */}
          <div className="flex flex-col justify-start">
            <p
              className="mb-4 sm:mb-6"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontFamily: 'Geist, sans-serif',
                lineHeight: '1.6',
                color: '#FFFFFF',
                opacity: 0.9
              }}
            >
              From SEO and paid ads to social media, branding, and web design — we offer everything you need to grow and succeed online.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 pr-14 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(23,100%,56%)] focus:ring-offset-0"
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  fontFamily: 'Geist, sans-serif',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF'
                }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors"
                style={{
                  backgroundColor: 'hsl(23, 100%, 56%)',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(23, 100%, 50%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(23, 100%, 56%)'
                }}
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Four Column Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 pt-8 sm:pt-12">
          {/* Column 1: Logo and Get in Touch */}
          <div>
            <Link href="/" className="block mb-4 sm:mb-6">
              <Logo />
            </Link>
            <h3
              className="mb-3 sm:mb-4"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontWeight: 600,
                fontFamily: 'Geist, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              GET IN TOUCH:
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:info@brandingly.agency"
                className="block hover:opacity-80 transition-opacity"
                style={{
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  fontFamily: 'Geist, sans-serif',
                  color: '#FFFFFF',
                  opacity: 0.9
                }}
              >
                info@brandingly.agency
              </a>
              <p
                style={{
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  fontFamily: 'Geist, sans-serif',
                  color: '#FFFFFF',
                  opacity: 0.9
                }}
              >
                Dhaka, Bangladesh
              </p>
              <a
                href="tel:+8801969602224"
                className="block hover:opacity-80 transition-opacity"
                style={{
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  fontFamily: 'Geist, sans-serif',
                  color: '#FFFFFF',
                  opacity: 0.9
                }}
              >
                +880-1969-602-224
              </a>
            </div>
          </div>

          {/* Column 2: Main Pages */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontWeight: 600,
                fontFamily: 'Geist, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              MAIN PAGES
            </h3>
            <nav className="space-y-2">
              {['Home', 'Services', 'About us', 'Blog', 'Case Studies', 'Contact'].map((page) => (
                <Link
                  key={page}
                  href={`/${page.toLowerCase().replace(' ', '-')}`}
                  className="block hover:opacity-80 transition-opacity"
                  style={{
                    fontSize: 'clamp(13px, 1.6vw, 15px)',
                    fontFamily: 'Geist, sans-serif',
                    color: '#FFFFFF',
                    opacity: 0.9
                  }}
                >
                  {page}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Other Pages */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontWeight: 600,
                fontFamily: 'Geist, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              OTHER PAGES
            </h3>
            <nav className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
              ].map((page) => (
                <Link
                  key={page.label}
                  href={page.href}
                  className="block hover:opacity-80 transition-opacity"
                  style={{
                    fontSize: 'clamp(13px, 1.6vw, 15px)',
                    fontFamily: 'Geist, sans-serif',
                    color: '#FFFFFF',
                    opacity: 0.9
                  }}
                >
                  {page.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontWeight: 600,
                fontFamily: 'Geist, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              SOCIAL
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#FFFFFF' }}
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t border-white/20 py-6"
        style={{ background: '#070515' }}
      >
        <div className="container px-4 sm:px-6">
          <p
            className="text-center"
            style={{
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontFamily: 'Geist, sans-serif',
              color: '#FFFFFF',
              opacity: 0.7
            }}
          >
            © {new Date().getFullYear()} Brandingly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
