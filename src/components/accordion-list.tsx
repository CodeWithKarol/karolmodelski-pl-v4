import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "cn"

export interface AccordionListItem {
  title: string
  content: string
}

export default function AccordionList({
  items,
  startIndex = 1,
  className,
  theme = "dark",
  compact = false,
}: {
  items: AccordionListItem[]
  startIndex?: number
  className?: string
  theme?: "light" | "dark"
  compact?: boolean
}) {
  const dark = theme === "dark"

  return (
    <Accordion keepMounted className={className}>
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={title}
          value={`item-${index + 1}`}
          className={dark ? "border-paper/15" : "border-line"}
        >
          <AccordionTrigger
            className={cn(
              "gap-5 text-left font-heading font-semibold text-balance hover:no-underline",
              compact ? "py-4 text-base" : "py-6 text-lg sm:text-xl",
              dark ? "text-paper" : "text-ink"
            )}
          >
            <span className="flex items-baseline gap-4">
              <span
                className={cn(
                  "font-mono text-xs font-normal",
                  dark ? "text-signal-bright" : "text-signal-ink"
                )}
              >
                {String(index + startIndex).padStart(2, "0")}
              </span>
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "max-w-2xl leading-relaxed text-pretty",
              compact ? "pl-8 text-sm" : "pl-8 text-base",
              dark ? "text-paper/70" : "text-ink-soft"
            )}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
