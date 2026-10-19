import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/data/faq"

const groups = [
  { label: "Czas i technologia", start: 1, items: faq.slice(0, 3) },
  { label: "Płatności i koszty", start: 4, items: faq.slice(3, 5) },
  { label: "Walidacja i materiały", start: 6, items: faq.slice(5, 7) },
  { label: "Bezpieczeństwo i ryzyko", start: 8, items: faq.slice(7, 9) },
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
                    {answer}
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
