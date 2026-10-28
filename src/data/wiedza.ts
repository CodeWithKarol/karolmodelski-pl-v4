export const WIEDZA_CATEGORY_IDS = [
  "od-czego-zaczac",
  "koszty",
  "bezpieczenstwo",
  "wykonawca",
  "pierwsza-wersja",
] as const

export type WiedzaCategory = (typeof WIEDZA_CATEGORY_IDS)[number]

export const WIEDZA_CATEGORIES: {
  id: WiedzaCategory
  label: string
}[] = [
  { id: "od-czego-zaczac", label: "Od czego zacząć" },
  { id: "koszty", label: "Koszty" },
  { id: "bezpieczenstwo", label: "Bezpieczeństwo" },
  { id: "wykonawca", label: "Wykonawca" },
  { id: "pierwsza-wersja", label: "Pierwsza wersja" },
]

export function wiedzaCategoryLabel(category: WiedzaCategory) {
  return (
    WIEDZA_CATEGORIES.find((item) => item.id === category)?.label ?? category
  )
}

export const WIEDZA_BASE_PATH = "/wiedza"

export function wiedzaArticlePath(slug: string) {
  return `${WIEDZA_BASE_PATH}/${slug}/`
}
