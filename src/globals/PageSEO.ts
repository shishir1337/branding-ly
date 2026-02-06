import type { GlobalConfig } from 'payload'
import { revalidatePageSEO } from './hooks/revalidatePageSEO'

const metaFields = [
  {
    name: 'metaTitle',
    type: 'text' as const,
    required: false,
    label: 'Meta Title',
    admin: {
      description: 'Shown in browser tab and search results. Leave empty to use default.',
    },
  },
  {
    name: 'metaDescription',
    type: 'textarea' as const,
    required: false,
    label: 'Meta Description',
    admin: {
      description: 'Short summary for search results. Leave empty to use default.',
    },
  },
  {
    name: 'customSchema',
    type: 'textarea' as const,
    required: false,
    label: 'Custom Schema (JSON-LD)',
    admin: {
      description:
        'Optional JSON-LD schema for this page (e.g. Organization, WebPage, FAQPage). Paste valid JSON. For multiple schemas use a JSON array. Leave empty to use no custom schema.',
    },
  },
]

export const PageSEO: GlobalConfig = {
  slug: 'page-seo',
  label: 'Page SEO',
  access: {
    read: () => true,
  },
  admin: {
    description:
      'Set meta title and meta description for main site pages (Home, Services, About Us, Blog, Case Studies, Contact). These appear in browser tabs and search results.',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Home (/)',
          fields: [
            {
              name: 'home',
              type: 'group',
              fields: metaFields,
            },
          ],
        },
        {
          label: 'Services (/services)',
          fields: [
            {
              name: 'services',
              type: 'group',
              fields: metaFields,
            },
          ],
        },
        {
          label: 'About Us (/about-us)',
          fields: [
            {
              name: 'aboutUs',
              type: 'group',
              fields: metaFields,
            },
          ],
        },
        {
          label: 'Blog (/blog)',
          fields: [
            {
              name: 'blog',
              type: 'group',
              fields: metaFields,
            },
          ],
        },
        {
          label: 'Case Studies (/case-studies)',
          fields: [
            {
              name: 'caseStudies',
              type: 'group',
              fields: metaFields,
            },
          ],
        },
        {
          label: 'Contact (/contact)',
          fields: [
            {
              name: 'contact',
              type: 'group',
              fields: metaFields,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePageSEO],
  },
}
