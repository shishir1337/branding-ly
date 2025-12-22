'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'How long has Brandingly been in business?',
    answer:
      "We established Brandingly in 2022. However, our team brings over 21 years of combined experience in marketing, design, development, and business strategy from previous roles and agencies.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Three things: We're a complete solution (no need for multiple vendors), we focus on results over pretty pictures (ROI matters most), and we're truly local (we understand Bangladesh market deeply). Plus, our transparent pricing and dedicated support make working with us easy and stress-free.",
  },
  {
    question: 'Do you work with businesses outside Dhaka?',
    answer:
      'Absolutely. While our office is in Dhaka, we serve clients across Bangladesh – Chittagong, Sylhet, Rajshahi, Khulna, and everywhere in between. Many projects happen remotely, and we travel for essential meetings or events.',
  },
  {
    question: "What's your typical project timeline?",
    answer:
      'Depends on the service. Logo design takes 5-7 days. Website development takes 2-4 weeks. Complete brand identity takes 4-6 weeks. Marketing campaigns show initial results in 30-60 days. We provide specific timelines during our proposal.',
  },
  {
    question: 'Can you work within our budget?',
    answer:
      "We create custom packages for different budgets. During our first conversation, share your budget range honestly. We'll tell you what's possible and recommend the best allocation of resources to achieve your goals.",
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer:
      'Yes. We offer retainer packages for ongoing marketing, monthly maintenance for websites, and support contracts for continuous optimization. Many clients work with us long-term because they see consistent results.',
  },
  {
    question: "What if we're not happy with the work?",
    answer:
      "We work in phases with approval checkpoints. You review and approve work before we proceed. If something isn't right, we revise until you're satisfied. Our 100% satisfaction rating comes from this collaborative approach.",
  },
  {
    question: 'How involved do we need to be in the process?',
    answer:
      'As much or as little as you prefer. Some clients want daily updates and input on every decision. Others trust us completely and check in weekly. We adapt to your working style and involvement preference.',
  },
]

const FAQAccordionItem: React.FC<{
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}> = ({ item, index, isOpen, onToggle }) => {
  return (
    <div
      className="border-b border-gray-200 last:border-b-0"
      style={{
        paddingTop: index === 0 ? '0' : '20px',
        paddingBottom: '20px',
      }}
    >
      <button
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
          {item.question}
        </h3>
        <ChevronDown
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
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
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export const AboutUsFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-white pt-12 sm:pt-16 md:pt-20 pb-0">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
          {/* Left Column */}
          <ScrollReveal direction="right" delay={0.1} duration={0.7} distance={50}>
            <div className="flex flex-col justify-between">
              <div>
                {/* FAQ Title */}
                <h2
                  className="mb-4 sm:mb-6 pl-0 sm:pl-4 lg:pl-8"
                  style={{
                    color: 'hsl(23, 100%, 56%)',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 700,
                    fontFamily: 'Geist, sans-serif',
                  }}
                >
                  FAQ
                </h2>

                {/* Main Heading */}
                <h3
                  className="mb-6 sm:mb-8 pl-0 sm:pl-4 lg:pl-8"
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 'clamp(32px, 6vw, 63.638px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'clamp(40px, 8vw, 79.547px)',
                    letterSpacing: 'clamp(-0.8px, -0.04vw, -2.25px)',
                  }}
                >
                  <span style={{ color: '#000000' }}>
                    Everything You<br />
                    Want to{' '}
                  </span>
                  <span style={{ color: 'hsl(23, 100%, 56%)' }}>Know</span>
                </h3>

                {/* Description Text */}
                <p
                  className="mb-6 sm:mb-8 pl-0 sm:pl-4 lg:pl-8 max-w-md"
                  style={{
                    color: '#898989',
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    fontFamily: 'Geist, sans-serif',
                    lineHeight: '1.6',
                  }}
                >
                  Find answers to the most common questions about working with Brandingly, our
                  process, and how we can help grow your business.
                </p>
              </div>

              {/* FAQ Image */}
              <div className="flex justify-end pl-0 sm:pl-4 lg:pl-8 mt-6 sm:mt-8">
                <div
                  className="flex-shrink-0 relative"
                  style={{ maxWidth: 'clamp(180px, 22vw, 250px)' }}
                >
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
                    src="/faq.png"
                    alt="FAQ"
                    width={250}
                    height={250}
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
                {faqData.map((item, index) => (
                  <FAQAccordionItem
                    key={index}
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

