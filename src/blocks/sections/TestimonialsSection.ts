import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const TestimonialsSectionBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Testimonials',
      required: true,
      minRows: 1,
      fields: [
        { name: 'quote', type: 'richText', editor: serviceRichTextEditor, required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'designation', type: 'text', required: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
