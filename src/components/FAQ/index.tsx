'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What makes BRANDING-LY different from other marketing agencies in Dhaka?",
    answer: "We're a complete solution. Instead of going to five different vendors for design, web, video, and events, you get everything under one roof. Plus, we actually care about your results, not just completing projects."
  },
  {
    question: "How much do your services cost?",
    answer: "Every business is different, so we create custom packages. Our pricing is transparent and competitive. Book a free consultation, and we'll give you an exact quote based on your needs."
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer: "We work with everyone – startups, SMEs, and established corporations. Your business size doesn't matter; your ambition does."
  },
  {
    question: "How long does it take to see results?",
    answer: "Depends on the service. A logo design takes 5-7 days, a website takes 2-4 weeks, and marketing campaigns start showing results within 30-60 days."
  },
  {
    question: "Can you handle rush projects?",
    answer: "Yes! We have a dedicated team for urgent requirements. Additional charges may apply for super-tight deadlines."
  },
  {
    question: "Do you provide social media management?",
    answer: "Absolutely. We handle everything – content creation, posting, engagement, ad campaigns, and monthly reporting."
  },
  {
    question: "What industries do you serve?",
    answer: "All of them. Restaurants, real estate, e-commerce, healthcare, education, manufacturing, retail – we've worked with businesses across every sector in Bangladesh."
  },
  {
    question: "Will I have a dedicated person managing my project?",
    answer: "Yes. Every client gets a dedicated account manager who's your single point of contact for everything."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment terms for ongoing projects and retainer packages."
  },
  {
    question: "How do I get started?",
    answer: "Simple. Click \"Book a Call\" above, tell us what you need, and we'll take it from there. First consultation is always free."
  }
]

const FAQAccordionItem: React.FC<{ item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }> = ({ 
  item, 
  index, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div 
      className="border-b border-gray-200 last:border-b-0"
      style={{
        paddingTop: index === 0 ? '0' : '20px',
        paddingBottom: '20px'
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
            lineHeight: '1.4'
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
            color: 'hsl(23, 100%, 56%)'
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
            lineHeight: '1.6'
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              {/* FAQ Title */}
              <h2 
                className="mb-4 sm:mb-6 pl-0 sm:pl-4 lg:pl-8"
                style={{
                  color: 'hsl(23, 100%, 56%)',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: 700,
                  fontFamily: 'Geist, sans-serif'
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
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: '#000000' }}>
                Everything You<br />
                Need to{' '}
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
                  lineHeight: '1.6'
                }}
              >
                Find answers to the most common questions about our services, pricing, and how we can help grow your business.
              </p>
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
                    transform: 'translate(10px, 10px)'
                  }}
                />
                <Image
                  src="/faq.png"
                  alt="FAQ"
                  width={350}
                  height={350}
                  className="w-full h-auto relative z-10"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
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
        </div>
      </div>
    </div>
  )
}

