'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      "Let's talk about your business. What do you do? Who are your customers? What makes you different from competitors? What's working now, what's not? We ask lots of questions because understanding your business deeply is how we build websites that actually work for you.",
  },
  {
    number: '02',
    title: 'Research & Planning',
    description:
      'We study your industry and check what competitors are doing online. Look at successful websites in your field. Figure out what Bangladesh customers in your market respond to. Then map out exactly what your site needs – pages, features, content structure, everything planned before touching design.',
  },
  {
    number: '03',
    title: 'Design Phase',
    description:
      "Our designers create mockups showing exactly how your website will look. You see the design before any coding happens. We share layouts for homepage, service pages, everything important. You give feedback, we refine, until you're completely happy with how it looks.",
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Time to build. Our developers turn approved designs into a real, working website. Writing clean code, adding features, making everything fast and secure. Testing as we go to catch issues early. Building the foundation that powers your online presence.',
  },
  {
    number: '05',
    title: 'Content Integration',
    description:
      'We add your content – service descriptions, team bios, company information, images, everything. Organized logically so visitors find what they need easily. Optimized for search engines so Google understands what each page offers. Content that informs and converts.',
  },
  {
    number: '06',
    title: 'Testing',
    description:
      "Before launch, we test everything thoroughly. Every link clicked. Every form submitted. Every page checked on phones, tablets, and computers. Different browsers tested. Loading speed verified. Nothing goes live until we're certain everything works flawlessly.",
  },
  {
    number: '07',
    title: 'Training',
    description:
      "Your website, your control. We show you exactly how to manage it. How to update content, add new pages, upload images, post news – whatever you need to do yourself. Simple training session, written guides, video tutorials. You'll feel confident managing your site.",
  },
  {
    number: '08',
    title: 'Launch & Support',
    description:
      "Your website goes live! We handle all technical details – domain setup, hosting configuration, SSL installation, everything. You just celebrate. And after launch, we don't disappear. Questions? Updates needed? We're here providing ongoing support whenever you need us.",
  },
]

interface ProcessStepCardProps {
  step: {
    number: string
    title: string
    description: string
  }
  index: number
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index }) => {
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

      {/* Number Badge */}
      <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground bg-primary/10 text-primary">
        <span
          style={{
            fontSize: '20px',
            fontFamily: 'Anton, sans-serif',
            fontWeight: 400,
            color: 'inherit',
          }}
        >
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className="mb-2 font-semibold"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 20px)',
            lineHeight: '1.3',
            color: 'hsl(23, 100%, 56%)',
          }}
        >
          {step.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            lineHeight: '1.6',
            color: '#666666',
          }}
        >
          {step.description}
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

export const ProcessSection: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-8 sm:mb-12">
            {/* "Our Process" */}
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
              Our Process
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
              }}
            >
              <span style={{ color: '#000000' }}>We follow a </span>
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>process</span>
              <span style={{ color: '#000000' }}> to ensure<br />your website exceeds expectations</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {processSteps.map((step, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.1 + index * 0.1}
              duration={0.6}
              distance={30}
              className="h-full"
            >
              <ProcessStepCard step={step} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

