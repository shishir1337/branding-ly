import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const ResultsBlock: Block = {
  slug: 'results',
  labels: {
    singular: 'Results Section',
    plural: 'Results Sections',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      admin: {
        description: 'Small label above the title (e.g. "The Results"). Leave empty for default.',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'Main section heading' },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: serviceRichTextEditor,
      admin: { description: 'Section content (supports formatting and links)' },
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Key Metrics',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
  ],
}
