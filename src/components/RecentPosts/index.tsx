import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const RecentPosts: React.FC = async () => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 2,
    limit: 3,
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
      meta: true,
      publishedAt: true,
      populatedAuthors: true,
      heroImage: true,
    },
  })


  return (
    <div 
      className="w-full py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: '#F9F9F9' }}
    >
      <div className="container px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          {/* "Our Blogs" Title */}
          <p 
            className="mb-4 sm:mb-6"
            style={{
              color: 'hsl(23, 100%, 56%)',
              fontFamily: 'Geist, sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '140%',
              letterSpacing: '-0.32px'
            }}
          >
            Our Blogs
          </p>

          {/* Main Heading */}
          <h2 
            className="mb-4 sm:mb-6"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(32px, 8vw, 64px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(40px, 10vw, 80px)',
              textAlign: 'center'
            }}
          >
            <span style={{ color: '#000000' }}>
              Stay Updated with OurL<br/>Digital Solutions{' '}
            </span>
            <span style={{ color: 'hsl(23, 100%, 56%)' }}>Blog</span>
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {posts.docs.map((post) => {
            const image = post.heroImage && typeof post.heroImage === 'object' 
              ? post.heroImage 
              : post.meta?.image && typeof post.meta.image === 'object'
              ? post.meta.image
              : null

            const author = post.populatedAuthors && post.populatedAuthors.length > 0
              ? formatAuthors(post.populatedAuthors) || 'Anonymous'
              : 'Anonymous'

            return (
              <article
                key={post.id}
                className="bg-white overflow-hidden"
                style={{
                  borderRadius: '15px',
                  boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  {image ? (
                    <Media 
                      resource={image} 
                      fill
                      imgClassName="object-cover"
                      htmlElement="div"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Author and Date */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span 
                      className="text-black font-medium"
                      style={{
                        fontSize: 'clamp(12px, 1.5vw, 14px)',
                        fontFamily: 'Geist, sans-serif'
                      }}
                    >
                      {author}
                    </span>
                    {post.publishedAt && (
                      <span 
                        className="text-[#898989]"
                        style={{
                          fontSize: 'clamp(12px, 1.5vw, 14px)',
                          fontFamily: 'Geist, sans-serif'
                        }}
                      >
                        {formatDateTime(post.publishedAt)}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-4 sm:mb-5 text-black font-semibold"
                    style={{
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontFamily: 'Geist, sans-serif',
                      lineHeight: '1.3'
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Read More Button */}
                  <Button
                    asChild
                    className="w-full sm:w-auto"
                    style={{
                      backgroundColor: 'hsl(23, 100%, 56%)',
                      color: 'white',
                      borderRadius: '8px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontWeight: 500
                    }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>

        {/* See All Blog Posts Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="w-full sm:w-auto flex items-center gap-2"
            style={{
              backgroundColor: 'hsl(23, 100%, 56%)',
              color: 'white',
              borderRadius: '8px',
              paddingTop: 'clamp(12px, 1.8vw, 15px)',
              paddingBottom: 'clamp(12px, 1.8vw, 15px)',
              paddingLeft: 'clamp(24px, 4.5vw, 40px)',
              paddingRight: 'clamp(24px, 4.5vw, 40px)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 500
            }}
          >
            <Link href="/blog" className="flex items-center gap-2">
              See All Blog Posts
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

