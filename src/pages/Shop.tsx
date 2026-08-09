import React from 'react'
import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { categories } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import SectionHeading from '../components/SectionHeading'

export default function Shop() {
  const [category, setCategory] = useState('All')
  const { data: products, loading } = useProducts(category)

  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Collection"
        title="All Pieces"
        description="Browse our complete lookbook."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
              category === cat
                ? 'bg-brand-blue text-white border-brand-blue'
                : 'border-line text-charcoal dark:text-muted hover:border-brand-blue'
            }`}
          >
            {cat}
          </button>
        ))}
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
