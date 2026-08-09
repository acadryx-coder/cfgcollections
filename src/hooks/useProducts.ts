import { useState, useEffect } from 'react'
import { products } from '../data/products'
import { Product } from '../types/product'

interface UseProductsOptions {
  category?: string
  search?: string
  gender?: 'male' | 'female' | 'unisex' | 'all'
}

export function useProducts(options: UseProductsOptions = {}) {
  const { category, search = '', gender = 'all' } = options
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let filtered = products

    // Category filter
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category === category)
    }

    // Search filter (name or description)
    if (search.trim()) {
      const q = search.toLowerCase().trim()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }

    // Gender filter
    if (gender !== 'all') {
      filtered = filtered.filter(p => p.gender === gender)
    }

    setData(filtered)
    setLoading(false)
  }, [category, search, gender])

  return { data, loading }
}
