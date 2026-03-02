import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { caseStudySectionBlocks } from '../../blocks/caseStudy'
import { serviceRichTextEditor } from '../../fields/serviceRichText'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { normalizeLexicalField } from '../../utilities/lexicalFromString'
import { revalidateDelete, revalidateCaseStudy } from './hooks/revalidateCaseStudy'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const CaseStudies: CollectionConfig<'case-studies'> = {
  slug: 'case-studies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    client: true,
    category: true,
    featuredImage: true,
    sections: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'category', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'case-studies',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'case-studies',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'client',
      type: 'richText',
      required: true,
      editor: serviceRichTextEditor,
      admin: {
        description: 'Client name for this case study (supports formatting and links)',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        description: 'Category for this case study',
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short excerpt shown on the case studies listing page',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Featured image for the case study listing and detail page',
              },
            },
            {
              name: 'sections',
              type: 'blocks',
              label: 'Page Sections',
              admin: {
                description:
                  'Add, remove, and reorder sections. Each case study can have different sections (e.g. Challenge, Solution, Results, Rich Text, Gallery, Testimonial) in any order.',
              },
              blocks: caseStudySectionBlocks,
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    slugField({
      fieldToUse: 'title',
    }),
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        // Early slug generation before validation (safety net)
        if (!data) return data
        if (data.title && typeof data.title === 'string' && (!data.slug || String(data.slug).trim() === '')) {
          const slug = data.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
            .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
          
          if (slug) {
            data.slug = slug
          }
        }
        return data
      },
    ],
    beforeChange: [
      async ({ data, operation, req, originalDoc }) => {
        // Ensure slug is generated from title if empty (especially when publishing)
        if (!data) return data
        if (data.title && typeof data.title === 'string' && (!data.slug || String(data.slug).trim() === '')) {
          // Generate slug from title
          let slug = data.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
            .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
          
          // Ensure uniqueness by checking existing slugs
          if (slug && req?.payload) {
            let uniqueSlug = slug
            let counter = 1
            
            while (true) {
              const existing = await req.payload.find({
                collection: 'case-studies',
                where: {
                  slug: { equals: uniqueSlug },
                  ...(operation === 'update' && originalDoc?.id
                    ? { id: { not_equals: originalDoc.id } }
                    : {}),
                },
                limit: 1,
                depth: 0,
                overrideAccess: true,
              })
              
              if (existing.totalDocs === 0) {
                break
              }
              
              uniqueSlug = `${slug}-${counter}`
              counter++
            }
            
            slug = uniqueSlug
          }
          
          if (slug) {
            data.slug = slug
          }
        }
        return data
      },
    ],
    afterRead: [
      ({ doc }) => {
        if (!doc) return
        if (typeof doc.client === 'string') {
          doc.client = normalizeLexicalField(doc.client) as typeof doc.client
        }
        const sections = doc.sections
        if (Array.isArray(sections)) {
          for (const block of sections) {
            if (block && typeof block === 'object' && 'description' in block && typeof block.description === 'string') {
              (block as { description: unknown }).description = normalizeLexicalField(block.description)
            }
          }
        }
      },
    ],
    afterChange: [revalidateCaseStudy],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

