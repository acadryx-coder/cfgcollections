import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { journal } from '../data/journal'
import { ChevronLeft } from 'lucide-react'

export default function JournalDetail() {
  const { slug } = useParams()
  const entry = journal.find((e) => e.slug === slug)

  if (!entry) {
    return (
      <div className="container-page py-24 text-center">
        <h2 className="text-2xl">Entry not found</h2>
        <Link to="/journal" className="text-brand-gold hover:underline mt-4 inline-block">Back to Journal</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-24 max-w-3xl">
      <Link to="/journal" className="flex items-center gap-2 text-brand-gold hover:underline mb-6">
        <ChevronLeft size={20} /> Back to Journal
      </Link>

      <p className="text-sm text-muted">{entry.date}</p>
      <h1 className="mt-2 text-4xl font-display">{entry.title}</h1>
      <div className="mt-6 aspect-[16/9] overflow-hidden rounded-xl bg-surface">
        <img src={entry.image} alt={entry.title} className="h-full w-full object-cover" />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-charcoal dark:text-text">{entry.content}</p>
    </div>
  )
}
