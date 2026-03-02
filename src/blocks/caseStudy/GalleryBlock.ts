import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Gallery Section',
    plural: 'Gallery Sections',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      admin: {
        description: 'Small label above the title (e.g. "Project Gallery"). Leave empty for default.',
      },
    },
    {
      name: 'sectionTitle',
      type: 'text',
      admin: {
        description: 'Main section heading (e.g. "Visual Showcase"). Leave empty for default.',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Gallery Images',
      admin: {
        description: 'Add images for the case study gallery',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          admin: { description: 'Alt text for the image' },
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}
