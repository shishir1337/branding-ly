import React from 'react'

export default function AdminLogo() {
  return (
    // Using standard img tag to avoid Next.js Image optimization issues on production
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/media/brandingly-logo-light.png"
      alt="Branding-ly"
      width={193}
      height={44}
      style={{
        maxWidth: '193px',
        height: 'auto',
      }}
    />
  )
}

