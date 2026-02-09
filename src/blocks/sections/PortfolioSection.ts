import type { Block } from 'payload'

export const PortfolioSectionBlock: Block = {
  slug: 'portfolio',
  labels: {
    singular: 'Portfolio Section',
    plural: 'Portfolio Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Small heading (e.g. "Our Portfolios")' },
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      admin: { description: 'Main heading (e.g. "Case Studies")' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Portfolio Images',
      required: true,
      minRows: 1,
      maxRows: 12,
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'alt', type: 'text', admin: { description: 'Alt text for the image' } },
      ],
    },
  ],
}
