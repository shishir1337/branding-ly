'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Search, FileText, Palette, Rocket, BarChart3 } from 'lucide-react'

interface ProcessStep {
  number: string
  title: string
  description: string
  details: string[]
  timeline?: string
  icon: React.ReactNode
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Understanding',
    description:
      "We start every relationship by listening. What's your business? Who are your customers? What are your goals? What's working now? What isn't?",
    details: [
      'We research your industry, analyze competitors, study your target audience.',
      'The more we understand, the better we serve you.',
      'This phase usually takes 1-2 weeks depending on project complexity.',
    ],
    icon: <Search className="h-6 w-6" />,
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description:
      'Based on what we learned, we create your custom plan. What services do you need? What timeline makes sense? What budget works best? What results should we target?',
    details: [
      'We present our recommendations clearly. Explain the reasoning behind each decision.',
      'Answer all your questions. Adjust based on your feedback.',
      'You approve the strategy before we move forward. No surprises.',
    ],
    icon: <FileText className="h-6 w-6" />,
  },
  {
    number: '03',
    title: 'Creative Development',
    description:
      'Now our team gets to work. Designers create visual concepts. Writers craft messaging. Developers build functionality. Video teams shoot content.',
    details: [
      'You review work at key milestones. Provide feedback. Request changes.',
      "We refine until it's exactly right.",
      'Timeline varies by project – logos take 5-7 days, websites take 2-4 weeks, complete brand identities take 4-6 weeks.',
    ],
    icon: <Palette className="h-6 w-6" />,
  },
  {
    number: '04',
    title: 'Launch & Execution',
    description:
      "Everything's approved. Time to go live. Website launches. Marketing campaigns activate. Print materials deliver. Events happen. Social media publishes.",
    details: [
      'We coordinate all moving parts so your launch is smooth and successful.',
      "We're available throughout to handle any issues immediately.",
    ],
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    number: '05',
    title: 'Measure & Optimize',
    description:
      'After launch, the real work begins – tracking results and improving performance. We monitor all metrics. What\'s working? What needs adjustment? Where can we do better?',
    details: [
      'Monthly reports show clear results. We meet regularly to discuss performance and plan next steps.',
      "Marketing isn't 'set and forget.' It's continuous improvement.",
      'We keep optimizing until you hit your targets, then we aim higher.',
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
]

export const OurProcess: React.FC = () => {
  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20"
      style={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header Section - Centered */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
          <div className="mb-12 sm:mb-16 text-center">
            {/* "Our Process" */}
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
              Our Process
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
              The Progress Behind the Process
            </h2>

            {/* Description */}
            <p
              className="mx-auto max-w-3xl"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#666666',
              }}
            >
              Good results don't happen by accident. They come from following a proven system that
              balances creativity with strategy, speed with quality.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

          {/* Process Steps */}
          <div className="space-y-8 sm:space-y-12">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                direction="up"
                delay={0.1 + index * 0.15}
                duration={0.6}
                distance={30}
              >
                <ProcessStepCard step={step} index={index} isLast={index === processSteps.length - 1} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProcessStepCardProps {
  step: ProcessStep
  index: number
  isLast: boolean
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index, isLast }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Left side - Number and Icon (desktop) */}
      <div className="hidden md:flex flex-col items-center w-16 flex-shrink-0">
        {/* Number Badge */}
        <div
          className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: 'hsl(23, 100%, 56%)',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(255, 140, 0, 0.3)',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              fontFamily: 'Anton, sans-serif',
              fontWeight: 400,
            }}
          >
            {step.number}
          </span>
        </div>

        {/* Icon below number */}
        <div
          className="mt-4 flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
          style={{
            backgroundColor: 'rgba(255, 140, 0, 0.1)',
            color: 'hsl(23, 100%, 56%)',
          }}
        >
          {step.icon}
        </div>
      </div>

      {/* Right side - Content Card */}
      <div className="flex-1">
        <div
          className="group relative overflow-hidden rounded-2xl bg-white p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1"
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

          {/* Mobile: Number and Icon at top */}
          <div className="md:hidden flex items-center gap-4 mb-4">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                backgroundColor: 'hsl(23, 100%, 56%)',
                color: '#FFFFFF',
              }}
            >
              <span
                style={{
                  fontSize: '16px',
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: 400,
                }}
              >
                {step.number}
              </span>
            </div>
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{
                backgroundColor: 'rgba(255, 140, 0, 0.1)',
                color: 'hsl(23, 100%, 56%)',
              }}
            >
              {step.icon}
            </div>
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
              {step.title}
            </h3>
            <p
              className="mb-4 leading-relaxed"
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: '1.6',
                color: '#666666',
              }}
            >
              {step.description}
            </p>

            {/* Details list */}
            <ul className="space-y-2">
              {step.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2"
                  style={{
                    fontSize: 'clamp(13px, 1.6vw, 15px)',
                    lineHeight: '1.5',
                    color: '#666666',
                  }}
                >
                  <span
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: 'hsl(23, 100%, 56%)',
                    }}
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative corner accent */}
          <div
            className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full transition-transform duration-500 group-hover:scale-150"
            style={{
              backgroundColor: 'rgba(255, 223, 175, 0.1)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

