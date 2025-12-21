'use client'

import React, { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Building2, ShoppingCart, Code, CircleCheck } from 'lucide-react'

const services = [
  {
    title: 'Corporate Website Development',
    description:
      'Professional business website design Dhaka solutions that establish authority, build credibility, and convert visitors into clients. Perfect for professional services, consultancies, and enterprises across Bangladesh.',
    features: [
      'Professional design that builds instant trust',
      'Strategic user journey that guides visitors to contact you',
      'Mobile responsive design & super-fast loading speeds',
      'SEO-optimized structure for better Google rankings',
    ],
    icon: <Building2 size={32} />,
  },
  {
    title: 'Ecommerce Website Development',
    description:
      'Turn your products into steady profit with powerful online stores. Built on WooCommerce – the most reliable ecommerce platform in Bangladesh. Simple enough to manage yourself, powerful enough to grow with your business.',
    features: [
      'Stunning product galleries that make customers want to buy',
      'Secure Bangladesh payment methods (bKash, Nagad, Rocket, Cards)',
      'Complete inventory tracking & order management dashboard',
      'Perfect mobile shopping experience for smartphone buyers',
    ],
    icon: <ShoppingCart size={32} />,
  },
  {
    title: 'Custom Website Development',
    description:
      'Need something different? We build completely custom web solutions from scratch. No cookie-cutter templates, no feature limitations – just your exact vision brought to life with clean code.',
    features: [
      'Coded from zero specifically for your business needs',
      'Custom features and functionality nobody else has',
      'Seamless integration with your existing business systems',
      'Built to scale as your business grows bigger',
    ],
    icon: <Code size={32} />,
  },
]

interface ServiceProvidedCardProps {
  service: {
    title: string
    description: string
    features: string[]
    icon: React.ReactNode
  }
  index: number
}

const ServiceProvidedCard: React.FC<ServiceProvidedCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollReveal
      direction="up"
      delay={0.1 + index * 0.1}
      duration={0.6}
      distance={30}
    >
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
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="mb-3 sm:mb-4 flex-shrink-0"
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '45px',
            letterSpacing: '-0.72px',
            color: 'inherit',
          }}
        >
          {service.title.includes('Website Development') ? (
            <>
              {service.title.replace(' Website Development', '')}{' '}
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>Website Development</span>
            </>
          ) : (
            service.title
          )}
        </h3>

        {/* Description */}
        <p
          className="mb-4 sm:mb-6 flex-grow"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: '1.6',
            color: isHovered ? '#FFF' : '#898989',
            fontFamily: 'Geist, sans-serif',
          }}
        >
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 flex-shrink-0">
          {service.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-start gap-2"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: '1.6',
                color: 'inherit',
                fontFamily: 'Geist, sans-serif',
              }}
            >
              <CircleCheck
                size={20}
                style={{
                  color: 'hsl(23, 100%, 56%)',
                  marginTop: '2px',
                  flexShrink: 0,
                }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  )
}

export const ServicesProvidedSection: React.FC = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background: '#F8F8F8',
      }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(32px, 8vw, 48px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                color: '#000000',
              }}
            >
              Service We Provide
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceProvidedCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

