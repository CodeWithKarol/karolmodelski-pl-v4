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
      className="mt-10 max-w-3xl border-t"
    >
      {faq.map(({ question, answer }, index) => (
        <AccordionItem key={question} value={`faq-${index + 1}`}>
          <AccordionTrigger className="py-5 text-base text-balance sm:text-lg">
            {question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
