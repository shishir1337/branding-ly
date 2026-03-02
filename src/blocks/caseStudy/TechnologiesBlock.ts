import type { Block } from 'payload'

export const TechnologiesBlock: Block = {
  slug: 'technologies',
  labels: {
    singular: 'Technologies Section',
    plural: 'Technologies Sections',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      admin: {
        description: 'Small label above the title (e.g. "Technologies Used"). Leave empty for default.',
      },
    },
    {
      name: 'sectionTitle',
      type: 'text',
      admin: {
        description: 'Main section heading (e.g. "Tech Stack"). Leave empty for default.',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Technologies Used',
      admin: {
        description: 'Technologies used in this project',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
