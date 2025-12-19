'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface PostCardWrapperProps {
  children: React.ReactNode
  index: number
}

export const PostCardWrapper: React.FC<PostCardWrapperProps> = ({ children, index }) => {
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

