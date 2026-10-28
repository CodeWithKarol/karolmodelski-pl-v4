export function countWords(text?: string) {
  if (!text) return 0

  return text
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[#>*_`~-]+\s*/gm, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

/**
 * Reading time in minutes, or null when there is no content yet.
 * Based on ~200 words per minute.
 */
export function getReadingTime(text?: string) {
  const words = countWords(text)
  if (words === 0) return null

  return Math.max(1, Math.round(words / 200))
}
