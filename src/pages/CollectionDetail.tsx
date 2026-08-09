import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { collections } from '../data/collections'
import { products } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import SectionHeading from '../components/SectionHeading'
import { ChevronLeft } from 'lucide-react'

export default function CollectionDetail() {
  const { slug } = useParams()
  const collection = collections.find(c => c.slug === slug)
  const collectionProducts = products.filter(p => collection?.productSlugs.includes(p.slug))

  if (!collection) {
    return (
      <div className="container-page py-24 text-center">
        <h2 className="text-2xl">Collection not found</h2>
        <Link to="/collections" className="text-accent hover:underline mt-4 inline-block">Back to Collections</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-24">
      <Link to="/collections" className="flex items-center gap-2 text-accent hover:underline mb-6">
        <ChevronLeft size={20} /> Back to Collections
      </Link>

      <SectionHeading
        eyebrow={collection.name}
        title={collection.name}
        description={collection.description}
      />

      <div className="mt-8">
        <ProductGrid products={collectionProducts} />
      </div>
    </div>
  )
}
