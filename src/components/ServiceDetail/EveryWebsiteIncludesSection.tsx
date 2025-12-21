'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Lightning-Fast Loading Speed',
    description:
      'Your website loads in under 2 seconds – guaranteed. Slow websites lose customers fast. In Bangladesh, where many users browse on mobile data, speed makes the difference between a sale and a bounce. Fast sites rank higher on Google, keep visitors engaged longer, and convert more browsers into buyers.',
  },
  {
    title: 'Mobile-First Web Design',
    description:
      'Over 70% of Bangladesh internet users browse on smartphones. Your website works flawlessly on every screen size – phones, tablets, laptops, desktops. No awkward zooming, no broken layouts, no frustrating navigation. We design for mobile first, then adapt for larger screens, ensuring perfect experiences everywhere.',
  },
  {
    title: 'SEO-Optimized from Day One',
    description:
      "What good is a beautiful website if nobody finds it? We build search engine optimization into every page from the start. Clean code structure, proper heading hierarchy, optimized images, fast loading, mobile-friendly design – all the technical SEO factors Google looks for. Your site is ready to rank from launch day.",
  },
  {
    title: 'Security & Protection Standard',
    description:
      'Your website gets enterprise-level security without enterprise costs. Every site includes SSL certificate for encrypted browsing, automatic daily backups, regular security updates, malware scanning, and firewall protection. Your business data stays safe, your customers browse securely, and Google rewards you with better rankings.',
  },
  {
    title: 'Real Human Support Always',
    description:
      'No robot chatbots. No ticket systems where you wait days. Real people who answer quickly when you need help. Got a question? Want to update something? Facing a technical issue? Call, email, or message us – we respond fast and solve problems quickly. Your success matters to us.',
  },
  {
    title: 'Honest, Transparent Pricing',
    description:
      "See exactly what you're paying for upfront. No hidden costs. No surprise bills later. No mandatory monthly fees for basic updates. We explain every cost clearly before starting. You own your website completely – we never hold it hostage. Fair pricing, honest business, simple as that.",
  },
]

interface FeatureCardProps {
  feature: Feature
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, delay = 0 }) => {
  return (
    <div
      className="group relative overflow-hidden h-full rounded-2xl bg-white p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1"
      style={{
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(139.25% 144.68% at 100% -32.85%, rgba(255, 223, 175, 0.2) 21.12%, rgba(255, 238, 223, 0.1) 73.2%, rgba(255, 255, 255, 0.05) 89.16%)',
        }}
      />

      {/* Content */}
      <div className="relative">
        <h3
          className="mb-2"
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            color: '#FF751F',
          }}
        >
          {feature.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: '1.6',
            color: '#666666',
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div
        className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full transition-transform duration-500 group-hover:scale-150"
        style={{
          backgroundColor: 'rgba(255, 223, 175, 0.1)',
        }}
      />
    </div>
  )
}

export const EveryWebsiteIncludesSection: React.FC = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background: 'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12">
            {/* "Every Website Includes" */}
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
              Every Website Includes
            </p>

            {/* Subtitle */}
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
              What Every Website Includes – Standard Features
            </h2>
          </div>
        </ScrollReveal>

        {/* Features Grid - 3 columns for 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="up"
              delay={0.1 + index * 0.1}
              duration={0.6}
              distance={30}
              className="h-full"
            >
              <FeatureCard feature={feature} delay={100 + index * 100} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

