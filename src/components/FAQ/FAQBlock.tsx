'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export interface FAQBlockItem {
  question?: string | null
  answer?: string | null
  id?: string | null
}

export interface FAQBlockProps {
  sectionTitle?: string | null
  heading?: string | null
  description?: string | null
  image?: unknown
  items?: FAQBlockItem[] | null
}

const FAQAccordionItem: React.FC<{
  item: FAQBlockItem
  index: number
  isOpen: boolean
  onToggle: () => void
}> = ({ item, index, isOpen, onToggle }) => {
  const question = item.question ?? ''
  const answer = item.answer ?? ''
  if (!question) return null

  return (
    <div
      className="border-b border-gray-200 last:border-b-0"
      style={{
        paddingTop: index === 0 ? '0' : '20px',
        paddingBottom: '20px',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-4 group"
      >
        <h3
          className="flex-1 font-semibold text-black"
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontFamily: 'Geist, sans-serif',
            lineHeight: '1.4',
          }}
        >
          {question}
        </h3>
        <ChevronDown
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{
            width: 'clamp(20px, 2.5vw, 24px)',
            height: 'clamp(20px, 2.5vw, 24px)',
            color: 'hsl(23, 100%, 56%)',
          }}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p
          className="text-[#898989]"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            fontFamily: 'Geist, sans-serif',
            lineHeight: '1.6',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

export const FAQBlock: React.FC<FAQBlockProps> = ({
  sectionTitle = 'FAQ',
  heading = 'Everything You Need to Know',
  description,
  image,
  items = [],
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const list = Array.isArray(items) ? items.filter((i) => i && typeof i === 'object' && i.question) : []
  if (list.length === 0) return null

  const imageUrl =
    image && typeof image === 'object' && image !== null && 'url' in image && typeof (image as { url?: string }).url === 'string'
      ? (image as { url: string }).url
      : '/faq.png'

  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
          {/* Left Column */}
          <ScrollReveal direction="right" delay={0.1} duration={0.7} distance={50}>
            <div className="flex flex-col justify-between">
              <div>
                {sectionTitle && (
                  <h2
                    className="mb-4 sm:mb-6 pl-0 sm:pl-4 lg:pl-8"
                    style={{
                      color: 'hsl(23, 100%, 56%)',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      fontWeight: 700,
                      fontFamily: 'Geist, sans-serif',
                    }}
                  >
                    {sectionTitle}
                  </h2>
                )}

                {heading && (
                  <h3
                    className="mb-6 sm:mb-8 pl-0 sm:pl-4 lg:pl-8"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 'clamp(32px, 6vw, 63.638px)',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'clamp(40px, 8vw, 79.547px)',
                      letterSpacing: 'clamp(-0.8px, -0.04vw, -2.25px)',
                      color: '#000000',
                    }}
                  >
                    {heading}
                  </h3>
                )}

                {description && (
                  <p
                    className="mb-6 sm:mb-8 pl-0 sm:pl-4 lg:pl-8 max-w-md"
                    style={{
                      color: '#898989',
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontFamily: 'Geist, sans-serif',
                      lineHeight: '1.6',
                    }}
                  >
                    {description}
                  </p>
                )}
              </div>

              {/* FAQ Image */}
              <div className="flex justify-end pl-0 sm:pl-4 lg:pl-8 mt-6 sm:mt-8">
                <div className="flex-shrink-0 relative" style={{ maxWidth: 'clamp(250px, 30vw, 350px)' }}>
                  <div
                    className="absolute -z-10"
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'hsl(23, 100%, 56%)',
                      opacity: 0.1,
                      borderRadius: '20px',
                      transform: 'translate(10px, 10px)',
                    }}
                  />
                  <Image
                    src={imageUrl}
                    alt={sectionTitle ?? 'FAQ'}
                    width={350}
                    height={350}
                    className="w-full h-auto relative z-10"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '20px',
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Accordion */}
          <ScrollReveal direction="left" delay={0.2} duration={0.7} distance={50}>
            <div className="flex flex-col">
              <div className="w-full">
                {list.map((item, index) => (
                  <FAQAccordionItem
                    key={item?.id ?? index}
                    item={item}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => toggleItem(index)}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}