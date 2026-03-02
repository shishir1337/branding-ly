/**
 * Converts a plain string to minimal Lexical editor state (root + paragraph + text).
 * Use when migrating from text/textarea to richText so existing string data loads in the editor.
 */
export function stringToLexical(text: string): {
  root: {
    type: 'root'
    children: Array<{
      type: 'paragraph'
      children: Array<{ type: 'text'; text: string; version: number }>
      version: number
      format: string
      indent: number
      direction: 'ltr' | 'rtl' | null
    }>
    direction: 'ltr' | 'rtl' | null
    format: string
    indent: number
    version: number
  }
} {
  const str = typeof text === 'string' ? text : ''
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: str,
              version: 1,
            },
          ],
          version: 1,
          format: '',
          indent: 0,
          direction: null,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

/**
 * Returns true if value looks like legacy plain text (string) for a rich text field.
 */
export function isLegacyRichTextString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * If value is a string, returns Lexical state; otherwise returns value unchanged.
 */
export function normalizeLexicalField(value: unknown): unknown {
  if (isLegacyRichTextString(value)) {
    return stringToLexical(value)
  }
  return value
}
