export const REALIZACJE_BASE_PATH = "/realizacje"

export function realizacjaPath(slug: string) {
  return `${REALIZACJE_BASE_PATH}/${slug}/`
}
