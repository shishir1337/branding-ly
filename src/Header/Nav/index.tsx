'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-8 items-center">
      {navItems.map(({ link }, i) => {
        if (!link) return null
        
        return (
          <CMSLink 
            key={i} 
            {...link}
            appearance="link"
            className="text-white hover:text-primary transition-colors text-base font-medium"
          />
        )
      })}
    </nav>
  )
}
