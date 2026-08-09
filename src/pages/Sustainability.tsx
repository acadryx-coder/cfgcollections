import React from 'react'
import SectionHeading from '../components/SectionHeading'

export default function Sustainability() {
  return (
    <div className="container-page py-24 max-w-4xl">
      <SectionHeading
        eyebrow="Ethos"
        title="Sustainability"
        description="Our commitment to responsible fashion."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-line p-6">
          <h3 className="text-xl font-display">Natural Fibers</h3>
          <p className="mt-2 text-sm text-muted">
            We prioritize wool, cotton, silk, and cashmere — materials that are renewable, biodegradable, and
            gentle on the planet.
          </p>
        </div>
        <div className="rounded-xl border border-line p-6">
          <h3 className="text-xl font-display">Local Production</h3>
          <p className="mt-2 text-sm text-muted">
            By keeping production close to home, we reduce transportation emissions and support local artisans
            with fair wages.
          </p>
        </div>
        <div className="rounded-xl border border-line p-6">
          <h3 className="text-xl font-display">Small Batches</h3>
          <p className="mt-2 text-sm text-muted">
            Our limited runs mean less waste and more attention to detail. Each piece is made to last, not to
            be discarded.
          </p>
        </div>
        <div className="rounded-xl border border-line p-6">
          <h3 className="text-xl font-display">Ethical Partners</h3>
          <p className="mt-2 text-sm text-muted">
            We vet every mill and workshop for ethical practices — from animal welfare to safe working
            conditions.
          </p>
        </div>
      </div>
    </div>
  )
}
