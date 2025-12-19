import { createLocalReq, getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'
import { contactUsForm } from '@/endpoints/seed/contact-us-form'

export const maxDuration = 30

/**
 * Creates the Contact Us form in Payload CMS if it doesn't exist
 * This endpoint only creates the form - it doesn't delete any existing data
 */
export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  try {
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
      return Response.json({
        success: true,
        message: 'Contact Us form already exists',
        formId: existingForms.docs[0].id,
      })
    }

    // Create a Payload request object
    const payloadReq = await createLocalReq({ user }, payload)

    // Create the form
    const newForm = await payload.create({
      collection: 'forms',
      data: contactUsForm,
      req: payloadReq,
    })

    return Response.json({
      success: true,
      message: 'Contact Us form created successfully',
      formId: newForm.id,
    })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error creating Contact Us form' })
    return Response.json(
      { success: false, error: 'Error creating Contact Us form' },
      { status: 500 },
    )
  }
}

