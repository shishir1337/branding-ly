'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ArrowRight } from 'lucide-react'
import { getServiceIcon } from '@/utilities/getServiceIcon'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

interface ServicesProps {
  services: Service[]
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
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
            {/* "How Can We Help You" */}
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
              How Can We Help You
            </p>

            {/* Subtitle with primary color for "marketing agency" */}
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
              As the best{' '}
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>marketing agency</span>
              <br />
              in Bangladesh, we offer
              <br />
              complete solutions:
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={0.1 + index * 0.1}
              duration={0.6}
              distance={30}
            >
              <div className="h-full">
                <ServiceCard service={service} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className="h-full p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col"
      style={{
        borderRadius: '10px',
        background: isHovered ? '#252626' : '#FFF',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        color: isHovered ? '#FFF' : '#000',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0"
        style={{
          borderRadius: '9px',
          background: '#FFDFAF',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          style={{
            color: '#000000',
          }}
        >
          {getServiceIcon(service.icon, 32)}
        </div>
      </div>

      {/* Title */}
      <h3
        className="mb-3 sm:mb-4 font-semibold flex-shrink-0"
        style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          lineHeight: '1.3',
          color: 'inherit',
        }}
      >
        {service.title}
      </h3>

      {/* Description - flex-grow to fill available space */}
      <p
        className="mb-4 sm:mb-6 flex-grow"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 16px)',
          lineHeight: '1.6',
          color: 'inherit',
        }}
      >
        {service.description}
      </p>

      {/* Learn More Button */}
      <Link href={`/services/${service.slug}`}>
        <Button
          variant="outline"
          size="sm"
          className="w-fit flex-shrink-0 self-start flex items-center gap-2"
          style={{
            borderColor: isHovered ? 'hsl(23, 100%, 56%)' : '#000',
            color: isHovered ? '#FFF' : '#000',
            backgroundColor: isHovered ? 'hsl(23, 100%, 56%)' : 'transparent',
            borderRadius: '38px',
            padding: '6px 16px',
          }}
        >
          Learn More
          <ArrowRight size={16} />
        </Button>
      </Link>
    </div>
  )
}

