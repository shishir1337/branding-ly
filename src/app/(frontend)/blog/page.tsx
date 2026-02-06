import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageSEOSchema } from '@/components/PageSEOSchema'
import { getPageSEOMetadata } from '@/utilities/getPageSEOMetadata'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { BlogHero } from '@/components/BlogHero'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 12,
    overrideAccess: false,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
      authors: true,
      populatedAuthors: true,
      heroImage: true,
    },
  })

  return (
    <div>
      <PageSEOSchema pageKey="blog" />
      <BlogHero />
      <div className="pt-12 pb-24">
        <PageClient />

        <div className="container mb-8">
          <PageRange
            collection="posts"
            currentPage={posts.page}
            limit={12}
            totalDocs={posts.totalDocs}
          />
        </div>

        <CollectionArchive posts={posts.docs} />

        <div className="container">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return getPageSEOMetadata('blog', {
    path: '/blog',
    defaultTitle: 'Blog | Brandingly',
    defaultDescription: 'Ideas, insights and updates from the Brandingly team.',
  })
}
