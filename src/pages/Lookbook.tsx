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

export default function Lookbook() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Editorial"
        title="Lookbook"
        description="Get inspired by how we style our pieces."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {looks.map((look) => (
          <div key={look.id} className="space-y-3">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface dark:bg-surface">
              <img src={look.image} alt={look.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="font-display text-xl">{look.title}</h3>
            <p className="text-muted text-sm">{look.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
