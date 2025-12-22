import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidateService } from './hooks/revalidateService'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Services: CollectionConfig<'services'> = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    description: true,
    icon: true,
    featuredImage: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'icon', 'order', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'services',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'services',
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
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description shown on the services listing page',
      },
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Target - Marketing Strategy & Planning',
          value: 'target',
        },
        {
          label: 'Palette - Graphic Design & Branding',
          value: 'palette',
        },
        {
          label: 'Globe - Web Design & Development',
          value: 'globe',
        },
        {
          label: 'FileText - Content Writing',
          value: 'file-text',
        },
        {
          label: 'Calendar - Event Management',
          value: 'calendar',
        },
        {
          label: 'Camera - Videoshoot & Photography',
          value: 'camera',
        },
        {
          label: 'Video - Video Production & Editing',
          value: 'video',
        },
        {
          label: 'Printer - Printing Solutions',
          value: 'printer',
        },
      ],
      admin: {
        description: 'Icon to display for this service',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Order in which services appear (lower numbers first)',
        position: 'sidebar',
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
              admin: {
                description: 'Featured image for the service detail page',
              },
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              admin: {
                description: 'Full content for the service detail page',
              },
            },
            {
              name: 'technologies',
              type: 'array',
              label: 'Technologies We Use',
              admin: {
                description: 'Technologies used for this service',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'servicesProvided',
              type: 'array',
              label: 'Services We Provide',
              admin: {
                description: 'Specific services provided under this category',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Features/List Items',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'icon',
                  type: 'select',
                  options: [
                    { label: 'Building2 - Corporate', value: 'building2' },
                    { label: 'ShoppingCart - Ecommerce', value: 'shopping-cart' },
                    { label: 'Code - Custom Development', value: 'code' },
                  ],
                },
              ],
            },
            {
              name: 'everyWebsiteIncludes',
              type: 'array',
              label: 'Every Website Includes (Standard Features)',
              admin: {
                description: 'Standard features included with every website/service',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'testimonials',
              type: 'array',
              label: 'Customer Testimonials',
              admin: {
                description: 'Customer testimonials for this service',
              },
              fields: [
                {
                  name: 'quote',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'designation',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'portfolioImages',
              type: 'array',
              label: 'Portfolio Images',
              admin: {
                description: 'Portfolio/case study images for this service',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'alt',
                  type: 'text',
                  admin: {
                    description: 'Alt text for the image',
                  },
                },
              ],
              maxRows: 3,
            },
            {
              name: 'whyChoose',
              type: 'array',
              label: 'Why Choose Us Features',
              admin: {
                description: 'Features explaining why to choose this service',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'processSteps',
              type: 'array',
              label: 'Our Process Steps',
              admin: {
                description: 'Step-by-step process for this service',
              },
              fields: [
                {
                  name: 'number',
                  type: 'text',
                  required: true,
                  admin: {
                    description: 'Step number (e.g., "01", "02")',
                  },
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
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
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateService],
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

