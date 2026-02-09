import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const WhyChooseSectionBlock: Block = {
  slug: 'whyChoose',
  labels: {
    singular: 'Why Choose Us Section',
    plural: 'Why Choose Us Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Section heading (e.g. "Why Choose Brandingly")' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Features',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'richText', editor: serviceRichTextEditor, required: true },
      ],
    },
  ],
}
