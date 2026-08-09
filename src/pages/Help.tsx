import React from 'react'
import { useState } from 'react'
import { faqs } from '../data/faqs'
import { clothingSizes } from '../data/sizeGuide'
import SectionHeading from '../components/SectionHeading'
import { Plus, Minus } from 'lucide-react'

export default function Help() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpen(open === id ? null : id)
  }

  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Help Center"
        title="FAQ & Size Guide"
        description="Find answers to common questions and get the perfect fit."
      />

      {/* FAQ section */}
      <div className="mt-10 max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-display font-semibold text-charcoal dark:text-text">Frequently Asked Questions</h3>
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-line py-4">
            <button
              onClick={() => toggle(faq.id)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium text-charcoal dark:text-text">{faq.question}</span>
              {open === faq.id ? (
                <Minus className="h-4 w-4 text-brand-gold" />
              ) : (
                <Plus className="h-4 w-4 text-brand-gold" />
              )}
            </button>
            {open === faq.id && (
              <p className="mt-3 text-sm text-muted leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Size Guide section */}
      <div className="mt-16">
        <h3 className="text-xl font-display font-semibold text-charcoal dark:text-text mb-4">Size Guide</h3>
        <p className="text-sm text-muted mb-6">All measurements in centimeters. When between sizes, we recommend sizing up.</p>
        <div className="overflow-x-auto rounded-xl border border-line bg-surface/50">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Size</th>
                <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Bust (cm)</th>
                <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Waist (cm)</th>
                <th className="px-4 py-3 font-semibold text-charcoal dark:text-text">Hip (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {clothingSizes.map((s) => (
                <tr key={s.size}>
                  <td className="px-4 py-3 font-medium">{s.size}</td>
                  <td className="px-4 py-3 text-muted">{s.bust}</td>
                  <td className="px-4 py-3 text-muted">{s.waist}</td>
                  <td className="px-4 py-3 text-muted">{s.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-2 text-sm text-muted">
          <p><strong className="text-charcoal dark:text-text">How to measure:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Bust:</strong> Measure around the fullest part of your chest.</li>
            <li><strong>Waist:</strong> Measure around your natural waistline.</li>
            <li><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
