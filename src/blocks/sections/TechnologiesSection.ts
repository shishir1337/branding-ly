import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const TechnologiesSectionBlock: Block = {
  slug: 'technologies',
  labels: {
    singular: 'Technologies Section',
    plural: 'Technologies Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Small heading above the main title (e.g. "Technology We Use")' },
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      admin: { description: 'Main heading (e.g. "We believe in using the best tools for each job.")' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Technologies',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'richText', editor: serviceRichTextEditor, required: true },
      ],
    },
  ],
}
