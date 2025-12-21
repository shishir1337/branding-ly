'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

const testimonials = [
  {
    quote:
      'Brandingly transformed our online presence completely. Our new corporate website brings quality leads every week. The team understood our business perfectly and delivered exactly what we needed.',
    name: 'Sarah Ahmed',
    designation: 'CEO at TechSolutions BD',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'Professional team, clear communication, and results that matter. Our website now ranks on Google first page for our main services. Client inquiries increased significantly after the launch.',
    name: 'Mohammad Rahman',
    designation: 'Marketing Director at Digital Ventures',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'Outstanding web development service. The ecommerce platform they built for us handles thousands of orders daily without any issues. Highly recommended!',
    name: 'Fatima Khan',
    designation: 'Founder at FashionHub BD',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'The custom website they developed exceeded our expectations. Clean code, fast loading, and beautiful design. Our conversion rate increased by 40% after launch.',
    name: 'Hasan Ali',
    designation: 'Operations Manager at RetailPro',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote:
      'Best decision we made was choosing Brandingly for our website. Professional, responsive, and they delivered on time. Our online presence has never been stronger.',
    name: 'Ayesha Chowdhury',
    designation: 'Business Owner at GreenLife',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export const ServiceTestimonialsSection: React.FC = () => {
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
          <div className="text-center mb-8 sm:mb-12">
            {/* "Our Testimonials" Title */}
            <p
              className="mb-4 sm:mb-6"
              style={{
                color: 'hsl(23, 100%, 56%)',
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '140%',
                letterSpacing: '-0.32px',
              }}
            >
              Our Testimonials
            </p>

            {/* Main Heading */}
            <h2
              className="mb-4 sm:mb-6"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(32px, 8vw, 64px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'clamp(40px, 10vw, 80px)',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#000000' }}>What our </span>
              <span style={{ color: 'hsl(23, 100%, 56%)' }}>customer</span>
              <span style={{ color: '#000000' }}> says</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Animated Testimonials */}
        <div className="max-w-6xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </div>
  )
}

