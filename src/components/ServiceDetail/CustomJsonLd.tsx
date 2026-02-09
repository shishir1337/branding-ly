/**
 * Renders optional custom JSON-LD from meta.customSchema.
 * Only outputs a script tag if the value is valid JSON (safe against XSS).
 */
export function CustomJsonLd({ schema }: { schema?: string | null }) {
  if (schema == null || String(schema).trim() === '') return null
  let safeJson: string
  try {
    const parsed = JSON.parse(String(schema))
    safeJson = JSON.stringify(parsed)
  } catch {
    return null
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  )
}
