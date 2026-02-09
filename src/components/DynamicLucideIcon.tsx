'use client'

import React, { useEffect, useState } from 'react'
import { Target } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

type IconComponent = React.ComponentType<{ size?: number; className?: string }>

interface DynamicLucideIconProps {
  name: string | null | undefined
  size?: number
  className?: string
}

/**
 * Renders a Lucide icon by name (e.g. "heart", "file-text").
 * Use the icon name from https://lucide.dev/icons/<name>
 * Falls back to Target if the name is invalid or not found.
 */
export function DynamicLucideIcon({ name, size = 24, className }: DynamicLucideIconProps) {
  const [Icon, setIcon] = useState<IconComponent | null>(null)

  const key = (name ?? '').trim().toLowerCase() || 'target'

  useEffect(() => {
    if (!key) {
      setIcon(() => Target)
      return
    }
    const loader = (dynamicIconImports as Record<string, () => Promise<{ default: IconComponent }>>)[key]
    if (loader) {
      loader()
        .then((m) => m.default)
        .then(setIcon)
        .catch(() => setIcon(() => Target))
    } else {
      setIcon(() => Target)
    }
  }, [key])

  const ResolvedIcon = Icon ?? Target
  return <ResolvedIcon size={size} className={className} />
}
