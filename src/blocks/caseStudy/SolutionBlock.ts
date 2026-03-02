import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const SolutionBlock: Block = {
  slug: 'solution',
  labels: {
    singular: 'Solution Section',
    plural: 'Solution Sections',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      admin: {
        description: 'Small label above the title (e.g. "Our Solution"). Leave empty for default.',
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
  ],
}
