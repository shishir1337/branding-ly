import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateService: CollectionAfterChangeHook = ({
  doc,
  operation,
}) => {
  if (doc?._status === 'published' || operation === 'update') {
    revalidateTag('services')
    revalidatePath('/services')
    if (doc?.slug) {
      revalidatePath(`/services/${doc.slug}`)
    }
  }

  if (operation === 'create' && doc?._status === 'published') {
    revalidateTag('services')
    revalidatePath('/services')
  }
}

export const revalidateDelete: CollectionAfterDeleteHook = () => {
  revalidateTag('services')
  revalidatePath('/services')
}

