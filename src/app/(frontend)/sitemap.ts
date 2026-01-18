import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'http://localhost:3000'

const getSitemapData = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const dateFallback = new Date()

    // Fetch all published pages
    const pages = await payload.find({
      collection: 'pages',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    // Fetch all published posts
    const posts = await payload.find({
      collection: 'posts',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    // Fetch all published services
    const services = await payload.find({
      collection: 'services',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    // Fetch all published case studies
    const caseStudies = await payload.find({
      collection: 'case-studies',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    return {
      pages: pages.docs || [],
      posts: posts.docs || [],
      services: services.docs || [],
      caseStudies: caseStudies.docs || [],
      dateFallback,
    }
  },
  ['sitemap'],
  {
    tags: ['sitemap'],
    revalidate: 3600, // Revalidate every hour
  },
)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { pages, posts, services, caseStudies, dateFallback } = await getSitemapData()

  const sitemap: MetadataRoute.Sitemap = []

  // Static routes
  sitemap.push({
    url: `${SITE_URL}/`,
    lastModified: dateFallback,
    changeFrequency: 'daily',
    priority: 1,
  })

  sitemap.push({
    url: `${SITE_URL}/search`,
    lastModified: dateFallback,
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  sitemap.push({
    url: `${SITE_URL}/blog`,
    lastModified: dateFallback,
    changeFrequency: 'daily',
    priority: 0.8,
  })

  sitemap.push({
    url: `${SITE_URL}/case-studies`,
    lastModified: dateFallback,
    changeFrequency: 'weekly',
    priority: 0.7,
  })

  sitemap.push({
    url: `${SITE_URL}/services`,
    lastModified: dateFallback,
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  sitemap.push({
    url: `${SITE_URL}/about-us`,
    lastModified: dateFallback,
    changeFrequency: 'monthly',
    priority: 0.6,
  })

  sitemap.push({
    url: `${SITE_URL}/contact`,
    lastModified: dateFallback,
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  // Pages
  pages
    .filter((page) => Boolean(page?.slug) && page.slug !== 'home')
    .forEach((page) => {
      sitemap.push({
        url: `${SITE_URL}/${page.slug}`,
        lastModified: page.updatedAt ? new Date(page.updatedAt) : dateFallback,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })

  // Blog posts
  posts
    .filter((post) => Boolean(post?.slug))
    .forEach((post) => {
      sitemap.push({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : dateFallback,
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    })

  // Services
  services
    .filter((service) => Boolean(service?.slug))
    .forEach((service) => {
      sitemap.push({
        url: `${SITE_URL}/services/${service.slug}`,
        lastModified: service.updatedAt ? new Date(service.updatedAt) : dateFallback,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })

  // Case studies
  caseStudies
    .filter((caseStudy) => Boolean(caseStudy?.slug))
    .forEach((caseStudy) => {
      sitemap.push({
        url: `${SITE_URL}/case-studies/${caseStudy.slug}`,
        lastModified: caseStudy.updatedAt ? new Date(caseStudy.updatedAt) : dateFallback,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })

  return sitemap
}
