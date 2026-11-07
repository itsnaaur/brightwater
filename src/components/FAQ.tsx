import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeIn from './FadeIn'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Is the consultation really free and no-obligation?',
    answer:
      'Yes. The 20-minute call costs nothing and you\'re under no obligation to hire us. It\'s simply a chance to talk through your situation and see if we\'re the right fit.',
  },
  {
    question: 'What happens during the 20-minute call?',
    answer:
      'You\'ll speak with one of our solicitors about what\'s going on. We\'ll ask a few questions, explain your options in plain English, and outline what working together might look like, if you choose to.',
  },
  {
    question: 'How do I know if Brightwater is the right fit for my situation?',
    answer:
      'That\'s exactly what the free consultation is for. Family law is personal, and the relationship with your lawyer matters. We\'d rather you find the right support, even if that isn\'t us.',
  },
  {
    question: 'How much will it cost if I go ahead?',
    answer:
      'We\'ll give you a clear estimate after understanding your situation. No surprise bills. For many matters we offer fixed-fee options so you know what to expect from the start.',
  },
  {
    question: 'Is everything I tell you confidential?',
    answer:
      'Absolutely. What you share in your consultation is protected by solicitor-client privilege. We take confidentiality seriously, always.',
  },
  {
    question: 'How long does the family law process usually take?',
    answer:
      'It depends on your circumstances. Some matters resolve in weeks through mediation, others take longer. We\'ll give you an honest timeline upfront so you can plan ahead.',
  },
]

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = `faq-panel-${item.question.slice(0, 20).replace(/\s/g, '-')}`

  return (
    <div className="border-b border-sand last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-heading text-lg text-charcoal md:text-xl">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-sage transition-transform ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        role="region"
        hidden={!isOpen}
        className="pb-5"
      >
        <p className="font-body text-base leading-relaxed text-charcoal-soft md:text-lg">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn direction="up">
          <div>
            <h2 className="text-3xl text-charcoal md:text-4xl">Questions you might have</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-charcoal-soft md:text-lg">
              It&apos;s normal to hesitate before reaching out. Here are answers to
              what people ask us most.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 rounded-lg border border-sand bg-cream px-6 md:px-8">
          {faqs.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
