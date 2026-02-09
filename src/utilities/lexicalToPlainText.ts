/**
 * Recursively extract plain text from Lexical editor state JSON
 */
export function lexicalToPlainText(node: unknown): string {
  if (node == null) return ''
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(lexicalToPlainText).join('')
  if (typeof node === 'object' && node !== null) {
    const obj = node as Record<string, unknown>
    if ('text' in obj && typeof obj.text === 'string') return obj.text
    if ('children' in obj && Array.isArray(obj.children)) {
      return obj.children.map(lexicalToPlainText).join('')
    }
  }
  return ''
}
