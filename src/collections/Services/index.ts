import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { serviceSectionBlocks } from '../../blocks/sections'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidateService } from './hooks/revalidateService'
import { serviceRichTextEditor } from '../../fields/serviceRichText'

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
    sections: true,
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
      type: 'richText',
      editor: serviceRichTextEditor,
      required: true,
      admin: {
        description: 'Short description shown on the services listing page (supports formatting and links)',
      },
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      defaultValue: 'target',
      admin: {
        description:
          'Lucide icon name (e.g. heart, target, file-text). Use the name from the icon URL on lucide.dev — e.g. https://lucide.dev/icons/heart → enter "heart". Hyphenated names like "file-text" and "shopping-cart" are valid.',
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
                description: 'Featured image for the service detail page hero',
              },
            },
            {
              name: 'sections',
              type: 'blocks',
              label: 'Page Sections',
              admin: {
                description:
                  'Add, remove, and reorder sections. Each service can have different sections (e.g. Technologies, Process, Portfolio, Rich Text) in any order.',
              },
              blocks: serviceSectionBlocks,
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
            {
              name: 'customSchema',
              type: 'textarea',
              label: 'Custom Schema (JSON-LD)',
              admin: {
                description:
                  'Optional. Paste valid JSON-LD (e.g. Service, FAQPage, Organization). Output in a <script type="application/ld+json"> tag on this service page. Leave empty to omit.',
              },
              validate: (val) => {
                if (val == null || String(val).trim() === '') return true
                try {
                  JSON.parse(String(val))
                  return true
                } catch {
                  return 'Must be valid JSON.'
                }
              },
            },
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

