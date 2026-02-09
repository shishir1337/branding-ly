import React from 'react'
import { DynamicLucideIcon } from '@/components/DynamicLucideIcon'

/**
 * Returns a React node that renders the given Lucide icon by name.
 * Use any icon name from https://lucide.dev/icons (e.g. heart, file-text, target).
 * Falls back to Target if the name is invalid.
 */
export function getServiceIcon(iconName: string | null | undefined, size = 32): React.ReactNode {
  return <DynamicLucideIcon name={iconName} size={size} />
}
