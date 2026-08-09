import { useState, useEffect } from 'react'
import { products } from '../data/products'
import { Product } from '../types/product'

export function useProduct(slug: string | undefined) {
  const [data, setData] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (slug) {
      const found = products.find(p => p.slug === slug)
      setData(found || null)
    }
    setLoading(false)
  }, [slug])

  return { data, loading }
}
