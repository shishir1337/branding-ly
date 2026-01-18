import Image from 'next/image'
import React from 'react'

export default function AdminLogo() {
  return (
    <Image
      src="/media/brandingly-logo-light.png"
      alt="Branding-ly"
      width={193}
      height={43.5}
      style={{
        maxWidth: '193px',
        height: 'auto',
      }}
    />
  )
}

