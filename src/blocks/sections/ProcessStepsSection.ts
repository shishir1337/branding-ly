import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const ProcessStepsSectionBlock: Block = {
  slug: 'processSteps',
  labels: {
    singular: 'Process Steps Section',
    plural: 'Process Steps Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Section heading (e.g. "Our Process")' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Process Steps',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: { description: 'Step number (e.g. "01", "02")' },
        },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'richText', editor: serviceRichTextEditor, required: true },
      ],
    },
  ],
}
