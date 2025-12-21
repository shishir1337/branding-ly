import React from 'react'
import { Building2, ShoppingCart, Code } from 'lucide-react'

type ServiceProvidedIconName = 'building2' | 'shopping-cart' | 'code'

export const getServiceProvidedIcon = (
  iconName: ServiceProvidedIconName | string | null | undefined,
  size = 32,
): React.ReactNode => {
  const iconMap: Record<ServiceProvidedIconName, React.ReactNode> = {
    building2: <Building2 size={size} />,
    'shopping-cart': <ShoppingCart size={size} />,
    code: <Code size={size} />,
  }

  if (!iconName) return <Building2 size={size} />
  return iconMap[iconName as ServiceProvidedIconName] || <Building2 size={size} />
}

