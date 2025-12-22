'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import {
  UtensilsCrossed,
  ShoppingBag,
  Building2,
  Heart,
  GraduationCap,
  Factory,
  Code2,
  Briefcase,
  Hotel,
  Wallet,
} from 'lucide-react'

interface Industry {
  title: string
  description: string
  icon: React.ReactNode
}

const industries: Industry[] = [
  {
    title: 'Food & Beverage',
    description: 'Restaurants, cafes, cloud kitchens, food delivery',
    icon: <UtensilsCrossed className="h-6 w-6" />,
  },
  {
    title: 'Retail & E-commerce',
    description: 'Fashion, electronics, groceries, marketplaces',
    icon: <ShoppingBag className="h-6 w-6" />,
  },
  {
    title: 'Real Estate',
    description: 'Developers, brokers, property management',
    icon: <Building2 className="h-6 w-6" />,
  },
  {
    title: 'Healthcare',
    description: 'Hospitals, clinics, diagnostic centers, pharmacies',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: 'Education',
    description: 'Schools, universities, training centers, e-learning',
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: 'Manufacturing',
    description: 'Consumer goods, industrial products, exports',
    icon: <Factory className="h-6 w-6" />,
  },
  {
    title: 'Technology',
    description: 'Software companies, startups, IT services',
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: 'Professional Services',
    description: 'Consulting, legal, accounting, agencies',
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: 'Hospitality',
    description: 'Hotels, resorts, event venues',
    icon: <Hotel className="h-6 w-6" />,
  },
  {
    title: 'Finance',
    description: 'Banks, insurance, fintech, investment firms',
    icon: <Wallet className="h-6 w-6" />,
  },
]

export const IndustriesWeServe: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        {/* Header Section - Centered */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12 text-center">
            {/* "Industries We Serve" */}
            <p
              className="mb-4 sm:mb-6"
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
              Industries We Serve
            </p>

            {/* Subtitle */}
            <h2
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(28px, 5vw, 40px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                color: '#000000',
              }}
            >
              We&apos;ve worked across every major sector in Bangladesh:
            </h2>
          </div>
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {industries.map((industry, index) => (
            <ScrollReveal
              key={industry.title}
              direction="up"
              delay={0.1 + index * 0.05}
              duration={0.6}
              distance={30}
              className="h-full"
            >
              <IndustryCard industry={industry} />
            </ScrollReveal>
          ))}
        </div>

        {/* Closing Message */}
        <ScrollReveal direction="up" delay={0.6} duration={0.6} distance={30}>
          <div className="text-center">
            <p
              className="mx-auto max-w-2xl"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#666666',
              }}
            >
              No matter your industry, we understand your challenges and know how to help you grow.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

interface IndustryCardProps {
  industry: Industry
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div
      className="group relative overflow-hidden h-full rounded-2xl bg-white p-6 transition-all duration-500 hover:-translate-y-1 flex flex-col"
      style={{
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
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

      {/* Icon container */}
      <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground bg-primary/10 text-primary flex-shrink-0">
        {industry.icon}
      </div>

      {/* Content */}
      <div className="relative flex-grow flex flex-col">
        <h3
          className="mb-2 font-semibold"
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: '1.3',
            color: '#000000',
          }}
        >
          {industry.title}
        </h3>
        <p
          className="leading-relaxed flex-grow"
          style={{
            fontSize: 'clamp(13px, 1.6vw, 14px)',
            lineHeight: '1.5',
            color: '#666666',
          }}
        >
          {industry.description}
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

