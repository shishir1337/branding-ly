import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateService: CollectionAfterChangeHook = ({
  doc,
  operation,
}) => {
  if (doc?._status === 'published' || operation === 'update') {
    revalidateTag('sitemap')
    revalidatePath('/services')
    if (doc?.slug) {
      revalidatePath(`/services/${doc.slug}`)
    }
  }

  if (operation === 'create' && doc?._status === 'published') {
    revalidateTag('sitemap')
    revalidatePath('/services')
  }
}

export const revalidateDelete: CollectionAfterDeleteHook = () => {
  revalidateTag('services')
  revalidatePath('/services')
}

