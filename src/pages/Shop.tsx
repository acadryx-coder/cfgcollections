import React from 'react'
import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { categories } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import SectionHeading from '../components/SectionHeading'
import { Search } from 'lucide-react'

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState<'all' | 'male' | 'female' | 'unisex'>('all')

  const { data: products, loading } = useProducts({ category, search, gender })

  const genderOptions = [
    { value: 'all', label: 'All' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unisex', label: 'Unisex' },
  ]

  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Collection"
        title="All Pieces"
        description="Browse our complete lookbook."
      />

      {/* Filters bar – compact */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4">
        {/* Category dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-full border border-line bg-ivory dark:bg-bg text-sm outline-none focus:border-brand-gold"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Search – gold border */}
        <div className="relative flex-1 min-w-[160px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full border border-brand-gold bg-ivory dark:bg-bg text-sm outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>

        {/* Gender pills – inline */}
        <div className="flex gap-1 flex-wrap">
          {genderOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setGender(opt.value as any)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                gender === opt.value
                  ? 'bg-brand-gold text-white border-brand-gold'
                  : 'border-line text-charcoal dark:text-muted hover:border-brand-gold'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-xl bg-surface/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  )
}
