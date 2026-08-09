import React from 'react'
import SectionHeading from '../components/SectionHeading'

const looks = [
  {
    id: 1,
    title: 'City Layers',
    description: 'The wool coat layered over a silk dress – perfect for transitional weather.',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Evening Ease',
    description: 'The slip dress paired with a cashmere blend cardigan for a sophisticated evening look.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Studio Minimal',
    description: 'Tailored trousers and a crisp poplin shirt – the ultimate everyday uniform.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Weekend Comfort',
    description: 'Merino sweater and wide-leg pants for a relaxed yet polished weekend outfit.',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80',
  },
]

const journalEntries = [
  {
    id: 'j1',
    title: 'The Art of Layering',
    excerpt: 'How to build a transitional wardrobe that works from morning to night.',
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-15',
  },
  {
    id: 'j2',
    title: 'Behind the Seams',
    excerpt: 'A look at the artisans and mills that bring our garments to life.',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-10',
  },
  {
    id: 'j3',
    title: 'The Edit: Wool',
    excerpt: 'Why we choose responsibly sourced wool for our outerwear and knitwear.',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80',
    date: '2026-07-05',
  },
]

export default function Editorial() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Editorial"
        title="Lookbook & Stories"
        description="Style inspiration and behind‑the‑scenes insights from the brand."
      />

      {/* Lookbook section */}
      <div className="mt-12">
        <h3 className="text-xl font-display font-semibold text-charcoal dark:text-text mb-6">Latest Lookbook</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {looks.map((look) => (
            <div key={look.id} className="space-y-3">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface">
                <img src={look.image} alt={look.title} className="h-full w-full object-cover" />
              </div>
              <h4 className="font-display text-lg font-medium">{look.title}</h4>
              <p className="text-sm text-muted">{look.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journal section */}
      <div className="mt-16">
        <h3 className="text-xl font-display font-semibold text-charcoal dark:text-text mb-6">Journal</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <div key={entry.id} className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface">
                <img src={entry.image} alt={entry.title} className="h-full w-full object-cover" />
              </div>
              <p className="text-xs text-muted">{entry.date}</p>
              <h4 className="font-display text-lg font-medium">{entry.title}</h4>
              <p className="text-sm text-muted">{entry.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
