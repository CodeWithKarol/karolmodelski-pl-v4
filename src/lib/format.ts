const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

export function formatDate(date: Date) {
  return dateFormatter.format(date)
}

export function plural(count: number, one: string, few: string, many: string) {
  if (count === 1) return one
  if (count >= 2 && count <= 4) return few
  return many
}
