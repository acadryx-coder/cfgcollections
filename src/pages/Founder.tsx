import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Founder() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="The Founder"
        title="Meet Favour"
        description="The vision behind Beauty Clothings."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface dark:bg-surface"
        >
          <img
            src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80"
            alt="Favour – Founder of Beauty Clothings"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-display">Favour</h2>
          <p className="text-muted leading-relaxed">
            Beauty Clothings started from a single rack of hand-picked pieces, sold one honest fitting at a time.
            What set us apart wasn't the clothes alone — it was that customers could ask a real question and get a
            real answer, before and after they bought. That's still the standard every piece is held to today.
          </p>
          <p className="text-muted leading-relaxed">
            We now work with a small group of local tailors and mills, keeping runs deliberately small so
            quality control never slips. Every coat, dress, and shirt on this site has been worn, checked, and
            approved by our own team first.
          </p>
          <div className="pt-4">
            <a
              href="https://instagram.com/beautyclothings"
              target="_blank"
              rel="noopener"
              className="btn-secondary"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
