'use client'

import React, { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const technologies = [
  {
    title: 'WordPress',
    description:
      'Complete content management freedom. You can add, edit, and update everything yourself without touching code.',
  },
  {
    title: 'WooCommerce',
    description:
      'Built-in payment systems for bKash, Nagad, Rocket, cards, and all popular Bangladesh payment methods.',
  },
  {
    title: 'Quality PHP & MySQL',
    description:
      "When you need something special that standard tools can't do – we code it from scratch exactly how you need it.",
  },
  {
    title: 'Secure Hosting',
    description:
      'Your website needs protection. SSL certificates, daily backups, malware scanning, and firewall included.',
  },
  {
    title: 'React & Modern JavaScript',
    description:
      'Interactive features, smooth animations, and app-like experiences. Modern technology for modern businesses.',
  },
  {
    title: 'HTML5, CSS3, Bootstrap',
    description:
      'Clean code that loads fast, works everywhere, and makes Google happy. Built right from the ground up.',
  },
]

interface TechnologyCardProps {
  tech: {
    title: string
    description: string
  }
  index: number
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollReveal
      direction="up"
      delay={0.1 + index * 0.1}
      duration={0.6}
      distance={30}
    >
      <div
        className="p-6 sm:p-8 h-full cursor-pointer transition-all duration-300"
        style={{
          borderRadius: '14px',
          background: '#FFF',
          boxShadow: isHovered
            ? '0 8px 20px 0 rgba(0, 0, 0, 0.15)'
            : '0 0 5px 0 rgba(0, 0, 0, 0.25)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          border: isHovered ? '1px solid rgba(255, 117, 31, 0.2)' : '1px solid transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3
          className="mb-3 sm:mb-4 transition-colors duration-300"
          style={{
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            color: isHovered ? '#FF751F' : '#FF751F',
            fontFamily: 'Anton, sans-serif',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            display: 'inline-block',
          }}
        >
          {tech.title}
        </h3>
        <p
          style={{
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            color: '#000000',
            fontFamily: 'Helvetica, Arial, sans-serif',
            transition: 'opacity 0.3s ease',
            opacity: isHovered ? 0.9 : 1,
          }}
        >
          {tech.description}
        </p>
      </div>
    </ScrollReveal>
  )
}

export const TechnologySection: React.FC = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background:
          'radial-gradient(139.25% 144.68% at 100% -32.85%, #FFDFAF 21.12%, rgba(255, 238, 223, 0.47) 73.2%, #FFF 89.16%)',
      }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12">
            {/* "Technology We Use" */}
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
              Technology We Use
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
              We believe in using the best<br/>tools for each job.
            </h2>
          </div>
        </ScrollReveal>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

