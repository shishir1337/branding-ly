import type { Block } from 'payload'
import { serviceRichTextEditor } from '@/fields/serviceRichText'

export const ChallengeBlock: Block = {
  slug: 'challenge',
  labels: {
    singular: 'Challenge Section',
    plural: 'Challenge Sections',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      admin: {
        description: 'Small label above the title (e.g. "The Challenge"). Leave empty for default.',
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
