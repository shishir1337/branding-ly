'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface CaseStudyCardWrapperProps {
  children: React.ReactNode
  index: number
}

export const CaseStudyCardWrapper: React.FC<CaseStudyCardWrapperProps> = ({ children, index }) => {
  return (
    <ScrollReveal
      direction="up"
      delay={index * 0.1}
      duration={0.6}
      distance={30}
    >
      {children}
    </ScrollReveal>
  )
}
