import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { WIEDZA_CATEGORY_IDS } from "./data/wiedza"

const wiedza = defineCollection({
  loader: glob({ base: "./src/content/wiedza", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().max(70).optional(),
    description: z.string().max(160),
    cardDescription: z.string().optional(),
    lead: z.string().optional(),
    category: z.enum(WIEDZA_CATEGORY_IDS),
    readingTime: z.number().int().positive().optional(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(99),
    related: z.array(z.string()).default([]),
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
