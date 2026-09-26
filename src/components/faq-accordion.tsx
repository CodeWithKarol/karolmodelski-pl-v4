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
      {faq.map(({ question, answer }, index) => (
        <AccordionItem
          key={question}
          value={`faq-${index + 1}`}
          className="border-line"
        >
          <AccordionTrigger className="gap-5 py-6 text-left font-heading text-lg font-semibold text-balance hover:no-underline sm:text-xl">
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-xs font-normal text-signal-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              {question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pl-8 text-base leading-relaxed text-pretty text-ink-soft">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
