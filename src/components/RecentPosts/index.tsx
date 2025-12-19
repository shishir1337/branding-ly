import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PostCardWrapper } from './PostCardWrapper'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

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
      authors: true,
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
        <ScrollReveal direction="up" delay={0.1} duration={0.6} distance={30}>
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
            <span style={{ color: 'hsl(23, 100%, 56%)' }}>Blog            </span>
          </h2>
        </div>
        </ScrollReveal>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {posts.docs.map((post, index) => {
            const image = post.heroImage && typeof post.heroImage === 'object' 
              ? post.heroImage 
              : post.meta?.image && typeof post.meta.image === 'object'
              ? post.meta.image
              : null

            const author = post.populatedAuthors && post.populatedAuthors.length > 0
              ? formatAuthors(post.populatedAuthors) || 'Anonymous'
              : 'Anonymous'

            return (
              <PostCardWrapper key={post.id} index={index}>
                <article
                  className="bg-white overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg group"
                  style={{
                    borderRadius: '15px',
                    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.08)'
                  }}
                >
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden flex-shrink-0">
                  {image ? (
                    <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
                      <Media 
                        resource={image} 
                        fill
                        imgClassName="object-cover"
                        htmlElement="div"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {/* Author and Date */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-shrink-0">
                    <span 
                      className="text-black font-medium"
                      style={{
                        fontSize: 'clamp(12px, 1.5vw, 14px)',
                        fontFamily: 'Geist, sans-serif'
                      }}
                    >
                      {author}
                    </span>
                    <span className="text-gray-400">•</span>
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

                  {/* Title - Limited to 3 lines */}
                  <h3 
                    className="mb-4 sm:mb-5 text-black font-semibold flex-grow"
                    style={{
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontFamily: 'Geist, sans-serif',
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: 'calc(1.4em * 3)'
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Read More Button */}
                  <div className="mt-auto flex-shrink-0">
                    <Button
                      asChild
                      className="w-fit flex items-center gap-2 self-start transition-all duration-300 group-hover:bg-opacity-90"
                      style={{
                        backgroundColor: 'hsl(23, 100%, 56%)',
                        color: 'white',
                        borderRadius: '38px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        fontSize: 'clamp(14px, 1.8vw, 16px)',
                        fontWeight: 500
                      }}
                    >
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read More
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
              </PostCardWrapper>
            )
          })}
        </div>

        {/* See All Blog Posts Button */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6} distance={20}>
          <div className="flex justify-center">
          <Button
            asChild
            className="w-full sm:w-auto flex items-center gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'hsl(23, 100%, 56%)',
              color: 'white',
              borderRadius: '38px',
              paddingTop: 'clamp(12px, 1.8vw, 15px)',
              paddingBottom: 'clamp(12px, 1.8vw, 15px)',
              paddingLeft: 'clamp(24px, 4.5vw, 40px)',
              paddingRight: 'clamp(24px, 4.5vw, 40px)',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 500
            }}
          >
            <Link href="/blog" className="flex items-center gap-2">
              See All Blogs 
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

