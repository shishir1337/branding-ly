import type { Block } from 'payload'

export const FAQSectionBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: { description: 'Small label above the main heading (e.g. "FAQ")' },
    },
    {
      name: 'heading',
      type: 'text',
      admin: { description: 'Main heading (e.g. "Everything You Need to Know")' },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Optional short intro text below the heading' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Optional image (left column). Leave empty to use default FAQ image or hide.' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'FAQ Items',
      required: true,
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}
