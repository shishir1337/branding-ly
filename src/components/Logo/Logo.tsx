import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const priority = priorityFromProps === 'high' || loadingFromProps === 'eager'

  return (
    <Image
      alt="Branding-ly logo"
      width={150}
      height={34}
      priority={priority}
      className={clsx('w-auto h-[34px]', className)}
      src="/brandingly-logo.png"
    />
  )
}
