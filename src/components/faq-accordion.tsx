import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/data/faq"

const groups = [
  { label: "Pomysł i bezpieczeństwo", start: 1, items: faq.slice(0, 3) },
  { label: "Produkt i realizacja", start: 4, items: faq.slice(3, 8) },
  { label: "Koszty i współpraca", start: 9, items: faq.slice(8, 11) },
  {
    label: "Testowanie i kolejne kroki",
    start: 12,
    items: faq.slice(11, 14),
  },
]

export default function FaqAccordion() {
  return (
    <div className="mt-12">
      {groups.map((group, groupIndex) => (
        <div key={group.label} className={groupIndex > 0 ? "mt-12" : ""}>
          <p className="font-mono text-xs tracking-[0.18em] text-ink-soft uppercase">
            {group.label}
          </p>
          <Accordion
            keepMounted
            defaultValue={groupIndex === 0 ? ["faq-1"] : undefined}
            className="mt-3 border-t border-line"
          >
            {group.items.map(({ question, answer }, index) => {
              const number = group.start + index
              return (
                <AccordionItem
                  key={question}
                  value={`faq-${number}`}
                  className="border-line"
                >
                  <AccordionTrigger className="gap-5 py-5 text-left font-heading text-base font-semibold text-balance hover:no-underline sm:text-lg">
                    <span className="flex items-baseline gap-4">
                      <span
                        aria-hidden="true"
                        className="font-mono text-xs font-normal text-signal-ink"
                      >
                        {String(number).padStart(2, "0")}
                      </span>
                      {question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pl-8 text-sm leading-relaxed text-pretty text-ink-soft sm:text-base">
                    {answer.split("\n\n").map((paragraph, index) => (
                      <p key={index} className={index > 0 ? "mt-3" : undefined}>
                        {paragraph}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      ))}
    </div>
  )
}
