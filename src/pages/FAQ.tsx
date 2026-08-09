import React from 'react'
import { useState } from 'react'
import { faqs } from '../data/faqs'
import SectionHeading from '../components/SectionHeading'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpen(open === id ? null : id)
  }

  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        description="Can't find what you're looking for? DM us on Instagram or WhatsApp."
      />

      <div className="mt-10 max-w-2xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-line py-4">
            <button
              onClick={() => toggle(faq.id)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium text-charcoal dark:text-text">{faq.question}</span>
              {open === faq.id ? (
                <Minus className="h-4 w-4 text-accent" />
              ) : (
                <Plus className="h-4 w-4 text-accent" />
              )}
            </button>
            {open === faq.id && (
              <p className="mt-3 text-sm text-muted leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
