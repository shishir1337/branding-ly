import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Client Testimonial',
    plural: 'Client Testimonials',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      admin: {
        description: 'Optional heading above the testimonial (e.g. "What Our Client Says"). Leave empty to hide.',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
