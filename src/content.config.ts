import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { WIEDZA_CATEGORY_IDS } from "./data/wiedza"

const wiedza = defineCollection({
  loader: glob({ base: "./src/content/wiedza", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    h1: z.string().optional(),
    metaTitle: z.string().max(70).optional(),
    description: z.string().max(160),
    teaser: z.string().max(180).optional(),
    cardDescription: z.string().optional(),
    lead: z.string().optional(),
    category: z.enum(WIEDZA_CATEGORY_IDS),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(99),
    related: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).max(5).default([]),
    tocLabels: z.record(z.string(), z.string()).default({}),
    sourcesIntro: z.string().optional(),
    sourcesNote: z.string().optional(),
    sources: z
      .array(
        z.object({
          group: z.string(),
          items: z.array(
            z.object({
              title: z.string(),
              url: z.url(),
              description: z.string().optional(),
            })
          ),
        })
      )
      .default([]),
    download: z
      .object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
        label: z.string().default("Pobierz materiał"),
        meta: z.string().optional(),
        note: z.string().optional(),
      })
      .optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
})

export const collections = { wiedza }
