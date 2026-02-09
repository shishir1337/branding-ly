import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const EveryWebsiteIncludesSectionBlock: Block = {
  slug: 'everyWebsiteIncludes',
  labels: {
    singular: 'Standard Features Section',
    plural: 'Standard Features Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Small heading (e.g. "Every Website Includes")' },
    },
    {
      name: 'sectionSubtitle',
      type: 'text',
      admin: { description: 'Main heading (e.g. "What Every Website Includes – Standard Features")' },
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
