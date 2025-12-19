import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { contactUsForm } from '@/endpoints/seed/contact-us-form'

/**
 * Creates the Contact Us form in Payload CMS if it doesn't exist
 * This can be called once to set up the form without affecting other data
 */
export async function createContactUsForm(): Promise<number | null> {
  try {
    const payload = await getPayload({ config: configPromise })

    // Check if form already exists
    const existingForms = await payload.find({
      collection: 'forms',
      where: {
        title: {
          equals: 'Contact Us',
        },
      },
      limit: 1,
    })

    if (existingForms.docs.length > 0) {
      console.log('Contact Us form already exists with ID:', existingForms.docs[0].id)
      return existingForms.docs[0].id as number
    }

    // Create the form
    const newForm = await payload.create({
      collection: 'forms',
      data: contactUsForm,
    })

    console.log('Contact Us form created successfully with ID:', newForm.id)
    return newForm.id as number
  } catch (error) {
    console.error('Error creating Contact Us form:', error)
    return null
  }
}

