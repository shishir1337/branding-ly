import canUseDOM from './canUseDOM'

export const getServerSideURL = () => {
  // In development, prefer localhost unless explicitly set
  if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  }

  return (
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
  )
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  // In development, use localhost
  if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return 'http://localhost:3000'
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || ''
}
