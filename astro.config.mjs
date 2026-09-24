// @ts-check

import { execSync } from "node:child_process"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

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
  site: "https://karolmodelski.pl",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
  ],
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        item.lastmod = lastmod
        return item
      },
    }),
  ],
})