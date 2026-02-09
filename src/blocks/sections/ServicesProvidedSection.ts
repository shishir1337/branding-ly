import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const ServicesProvidedSectionBlock: Block = {
  slug: 'servicesProvided',
  labels: {
    singular: 'Services Provided Section',
    plural: 'Services Provided Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Section heading (e.g. "Services We Provide")' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Services',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'richText', editor: serviceRichTextEditor, required: true },
        {
          name: 'features',
          type: 'array',
          label: 'Features / List Items',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description:
              'Lucide icon name (e.g. building2, shopping-cart, code, heart). Use the name from lucide.dev — e.g. https://lucide.dev/icons/heart → enter "heart".',
          },
        },
      ],
    },
  ],
}
