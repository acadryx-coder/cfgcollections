import React from 'react'
import { Link } from 'react-router-dom'
import { journal } from '../data/journal'
import SectionHeading from '../components/SectionHeading'

export default function Journal() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Editorial"
        title="The Journal"
        description="Stories, craftsmanship, and the philosophy behind our pieces."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {journal.map((entry) => (
          <Link key={entry.id} to={`/journal/${entry.slug}`} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface">
              <img
                src={entry.image}
                alt={entry.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted">{entry.date}</p>
              <h3 className="mt-1 text-xl font-display text-charcoal dark:text-text">{entry.title}</h3>
              <p className="mt-2 text-sm text-muted">{entry.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
