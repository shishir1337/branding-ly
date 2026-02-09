'use client'

import React, { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { CircleCheck } from 'lucide-react'
import { getServiceIcon } from '@/utilities/getServiceIcon'
import RichText from '@/components/RichText'

type ServiceProvidedItem = {
  title?: string | null
  description?: unknown
  features?: Array<{ text?: string | null }> | null
  icon?: string | null
  id?: string | null
}

interface ServiceProvidedCardProps {
  service: ServiceProvidedItem
  index: number
}

const ServiceProvidedCard: React.FC<ServiceProvidedCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  if (!service || typeof service === 'number') return null

  const features = service.features?.filter((f) => f && typeof f === 'object' && f.text) || []
  const title = service.title || ''
  const description = service.description || ''
  const iconName = service.icon || null

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
            {getServiceIcon(iconName, 32)}
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
          {title.includes('Website Development') ? (
            <>
              {title.replace(' Website Development', '')}{' '}
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>Website Development</span>
            </>
          ) : (
            title
          )}
        </h3>

        {/* Description - supports richText or string */}
        <div
          className="mb-4 sm:mb-6 flex-grow"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: '1.6',
            color: isHovered ? '#FFF' : '#898989',
            fontFamily: 'Geist, sans-serif',
          }}
        >
          {typeof description === 'object' && description !== null ? (
            <RichText data={description as Parameters<typeof RichText>[0]['data']} enableProse={false} enableGutter={false} />
          ) : (
            String(description ?? '')
          )}
        </div>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 flex-shrink-0">
            {features.map((feature, featureIndex) => {
              if (!feature || typeof feature === 'number' || !feature.text) return null
              return (
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
                  <span>{feature.text}</span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </ScrollReveal>
  )
}

interface ServicesProvidedSectionProps {
  /** Legacy: array of items (no section title) */
  servicesProvided?: ServiceProvidedItem[]
  /** Block/section shape: sectionTitle + items */
  section?: {
    sectionTitle?: string | null
    items?: ServiceProvidedItem[] | null
  }
}

export const ServicesProvidedSection: React.FC<ServicesProvidedSectionProps> = ({
  servicesProvided,
  section,
}) => {
  const items = section?.items ?? servicesProvided ?? []
  const sectionTitle = section?.sectionTitle ?? 'Services We Provide'

  if (!items.length) {
    return null
  }

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        background: '#F8F8F8',
      }}
    >
      <div className="container px-4 sm:px-6">
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
              {sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <ServiceProvidedCard key={item?.id ?? index} service={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

