function childElement(node, tagName) {
  if (!node || !Array.isArray(node.children)) return undefined
  return node.children.find(
    (child) => child.type === "element" && child.tagName === tagName
  )
}

/**
 * Adds `data-label` to table cells based on the header row, so that CSS can
 * render tables as stacked cards on small screens without horizontal scroll.
 *
 * Plain Sätteri HAST plugin (no `defineHastPlugin` import needed).
 */
export default {
  name: "table-cell-labels",
  element: {
    filter: ["table"],
    visit(table, ctx) {
      const headRow = childElement(childElement(table, "thead"), "tr")
      if (!headRow) return

      const labels = headRow.children
        .filter((cell) => cell.type === "element" && cell.tagName === "th")
        .map((cell) => ctx.textContent(cell).trim())
      if (labels.length < 2) return

      const body = childElement(table, "tbody")
      if (!body) return

      for (const row of body.children) {
        if (row.type !== "element" || row.tagName !== "tr") continue
        const cells = row.children.filter(
          (cell) => cell.type === "element" && cell.tagName === "td"
        )
        cells.forEach((cell, index) => {
          if (index === 0 || !labels[index]) return
          ctx.setProperty(cell, "data-label", labels[index])
        })
      }
    },
  },
}