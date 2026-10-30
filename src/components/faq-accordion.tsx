import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/data/faq"

export default function FaqAccordion() {
  return (
    <Accordion
      keepMounted
      defaultValue={["faq-1"]}
      className="mt-12 border-t border-line"
    >
      {faq.map(({ question, answer }, index) => {
        const number = index + 1
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
  )
}
