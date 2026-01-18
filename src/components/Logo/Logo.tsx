import clsx from 'clsx'
import React from 'react'
import NextImage from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const priority = priorityFromProps === 'high' || loadingFromProps === 'eager'

  return (
    <div className={clsx('relative max-w-[9.375rem] w-full h-[34px]', className)}>
      <NextImage
        alt="Branding-ly logo"
        fill
        priority={priority}
        className="object-contain"
        src="/brandingly-logo.png"
      />
    </div>
  )
}
