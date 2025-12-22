'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Users, Code, Target, MessageCircle } from 'lucide-react'

interface TeamCategory {
  title: string
  description: string
  icon: React.ReactNode
}

const teamCategories: TeamCategory[] = [
  {
    title: 'Creative Team',
    description:
      'Our designers, writers, and video producers bring ideas to life. They combine artistic talent with strategic thinking to create campaigns that look amazing and deliver results. Years of experience working with Bangladesh brands means they understand what works here. What catches attention. What builds trust. What drives action.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Technical Team',
    description:
      "Developers, programmers, and tech specialists who build solid digital foundations. Websites that load fast. Systems that work smoothly. Code that's clean and maintainable. They stay updated on latest technologies while keeping solutions simple and user-friendly. No unnecessary complexity. Just tools that help your business run better.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: 'Strategy Team',
    description:
      'Planners, analysts, and marketing experts who map your path to growth. They research your market, study competitors, understand your customers, and create roadmaps that work. Data-driven decisions combined with creative thinking. Numbers that inform strategy without killing innovation.',
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: 'Support Team',
    description:
      "Account managers, coordinators, and client service specialists who keep everything running smoothly. They're your main contact, your problem solvers, your advocates inside the agency. They translate your vision into actionable briefs for the team. They keep projects on schedule. They ensure you're happy every step of the way.",
    icon: <MessageCircle className="h-6 w-6" />,
  },
]

export const TeamSection: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        {/* Header Section - Centered */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12 text-center">
            {/* "Meet the Team" */}
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
              Meet the Team
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
              Meet the experts who bring ideas to life and turn strategies into results.
            </h2>

            {/* Description */}
            <p
              className="mx-auto max-w-3xl mb-8"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#666666',
              }}
            >
              Great marketing doesn&apos;t come from machines or templates. It comes from talented people
              who care deeply about their craft and your success.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {teamCategories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              direction="up"
              delay={0.1 + index * 0.1}
              duration={0.6}
              distance={30}
              className="h-full"
            >
              <TeamCategoryCard category={category} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

interface TeamCategoryCardProps {
  category: TeamCategory
}

const TeamCategoryCard: React.FC<TeamCategoryCardProps> = ({ category }) => {
  return (
    <div
      className="group relative overflow-hidden h-full rounded-2xl bg-white p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1"
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
      <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground bg-primary/10 text-primary">
        {category.icon}
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="mb-3 font-semibold"
          style={{
            fontSize: 'clamp(20px, 2.5vw, 24px)',
            lineHeight: '1.3',
            color: '#000000',
          }}
        >
          {category.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: '1.6',
            color: '#666666',
          }}
        >
          {category.description}
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

