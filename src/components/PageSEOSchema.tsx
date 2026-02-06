import type { PageSEOKey } from '@/utilities/getPageSEOMetadata'
import { getPageSEOSchema } from '@/utilities/getPageSEOMetadata'

type Props = {
  pageKey: PageSEOKey
}

/**
 * Renders the custom JSON-LD schema script for a fixed page when set in Globals → Page SEO.
 * Place once per page (e.g. at the top of the page content).
 */
export async function PageSEOSchema({ pageKey }: Props) {
  const schemaJson = await getPageSEOSchema(pageKey)
  if (!schemaJson) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJson }}
    />
  )
}
