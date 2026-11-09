// @ts-check

import { execSync } from "node:child_process"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import { satteri } from "@astrojs/markdown-satteri"
import tableCellLabels from "./src/lib/satteri-table-labels.mjs"

function getLastModified() {
  try {
    const committedAt = execSync("git log -1 --format=%cI", {
      encoding: "utf8",
    }).trim()
    if (committedAt) return new Date(committedAt).toISOString()
  } catch {}
  return new Date().toISOString()
}

const lastmod = getLastModified()

// https://astro.build/config
export default defineConfig({
  site: "https://www.karolmodelski.pl",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: satteri({
      hastPlugins: [tableCellLabels],
    }),
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
  ],
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/rozmowa/potwierdzenie"),
      serialize(item) {
        item.lastmod = lastmod
        return item
      },
    }),
  ],
})
