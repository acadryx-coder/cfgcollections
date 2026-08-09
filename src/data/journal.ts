export interface JournalEntry {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`

export const journal: JournalEntry[] = [
  {
    id: 'j1',
    slug: 'the-art-of-layering',
    title: 'The Art of Layering',
    excerpt: 'How to build a transitional wardrobe that works from morning to night.',
    content: 'Layering isn’t just about warmth — it’s about texture, color, and silhouette. In this guide, we break down our favorite combinations, from cashmere over silk to wool over cotton.',
    image: img('photo-1490578474895-699cd4e2cf59'),
    date: '2026-07-15',
  },
  {
    id: 'j2',
    slug: 'behind-the-seams',
    title: 'Behind the Seams',
    excerpt: 'A look at the artisans and mills that bring our garments to life.',
    content: 'Every piece we produce is the result of a partnership with a small group of local tailors and mills. We visit each workshop personally to ensure quality and fair working conditions.',
    image: img('photo-1516257984-b1b4d707412e'),
    date: '2026-07-10',
  },
  {
    id: 'j3',
    slug: 'the-edit-wool',
    title: 'The Edit: Wool',
    excerpt: 'Why we choose responsibly sourced wool for our outerwear and knitwear.',
    content: 'Wool is one of nature’s most versatile fibers — breathable, durable, and biodegradable. We source from farms that adhere to strict animal welfare and environmental standards.',
    image: img('photo-1516762689617-e1cffcef479d'),
    date: '2026-07-05',
  },
]
