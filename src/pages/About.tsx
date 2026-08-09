import React from 'react'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="About"
        title="CEO FAVOURGOLD COLLECTION"
        description="Quality, care, and connection – from our studio to your wardrobe."
      />

      {/* Brand story */}
      <div className="mt-10 space-y-6 text-muted leading-relaxed">
        <p>
          CEO FAVOURGOLD COLLECTION began as a single rack of hand‑picked pieces, sold one honest fitting at a time.
          What set us apart wasn't the clothes alone — it was that customers could ask a real question and get a
          real answer, before and after they bought.
        </p>
        <p>
          Today, we work with a small group of local tailors and mills, keeping runs deliberately small so
          quality control never slips. Every coat, dress, and shirt on this site has been worn, checked, and
          approved by our own team first.
        </p>
      </div>

      {/* Founder section */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface">
          <img
            src="/founder.jpg"
            alt="Favour – Founder"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-display">Favour</h3>
          <p className="text-muted leading-relaxed">
            Favour is the visionary behind CEO FAVOURGOLD COLLECTION. With a keen eye for timeless design and
            a commitment to quality, she personally selects every piece that makes it into the collection.
          </p>
          <p className="text-muted leading-relaxed">
            Her dedication to craftsmanship and customer care has built a brand that feels both luxurious and
            personal – a space where every customer is treated like family.
          </p>
        </div>
      </div>

      {/* Sustainability section */}
      <div className="mt-16">
        <h3 className="text-2xl font-display text-charcoal dark:text-text mb-6">Sustainability</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line p-6">
            <h4 className="font-display text-lg font-medium">Natural Fibers</h4>
            <p className="mt-2 text-sm text-muted">
              We prioritize wool, cotton, silk, and cashmere – materials that are renewable, biodegradable, and
              gentle on the planet.
            </p>
          </div>
          <div className="rounded-xl border border-line p-6">
            <h4 className="font-display text-lg font-medium">Local Production</h4>
            <p className="mt-2 text-sm text-muted">
              By keeping production close to home, we reduce transportation emissions and support local artisans
              with fair wages.
            </p>
          </div>
          <div className="rounded-xl border border-line p-6">
            <h4 className="font-display text-lg font-medium">Small Batches</h4>
            <p className="mt-2 text-sm text-muted">
              Our limited runs mean less waste and more attention to detail. Each piece is made to last, not to
              be discarded.
            </p>
          </div>
          <div className="rounded-xl border border-line p-6">
            <h4 className="font-display text-lg font-medium">Ethical Partners</h4>
            <p className="mt-2 text-sm text-muted">
              We vet every mill and workshop for ethical practices – from animal welfare to safe working
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
