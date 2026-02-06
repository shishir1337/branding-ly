import type { GlobalAfterChangeHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidatePageSEO: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger?.info?.('Revalidating Page SEO')
    revalidateTag('global_page-seo')
    const paths = ['/', '/about-us', '/services', '/blog', '/case-studies', '/contact']
    paths.forEach((path) => revalidatePath(path))
  }
  return doc
}
