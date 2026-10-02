import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"

export interface OfferItem {
  value: string
  note: string
  title: string
  description: string
  points: string[]
}

export default function OfferStack({ items }: { items: OfferItem[] }) {
  return (
    <Accordion keepMounted className="mt-10 border-t border-line">
      {items.map(({ value, note, title, description, points }, index) => (
        <AccordionItem
          key={title}
          value={`stack-${index + 1}`}
          className="border-line"
        >
          <AccordionTrigger className="gap-5 py-6 text-left hover:no-underline">
            <span className="flex flex-1 flex-col gap-1.5">
              <span className="font-heading text-lg font-semibold text-balance sm:text-xl">
                {title}
              </span>
              <span className="font-mono text-xs tracking-[0.14em] text-ink-soft uppercase">
                {value} · {note}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pl-8 text-base leading-relaxed text-pretty text-ink-soft">
            <p>{description}</p>
            {points.map((point) => (
              <p
                key={point}
                className="mt-3 flex gap-2 text-sm leading-relaxed"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-ink" />
                <span>{point}</span>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
