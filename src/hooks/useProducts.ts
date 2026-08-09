import { useState, useEffect } from 'react'
import { products } from '../data/products'
import { Product } from '../types/product'

export function useProducts(category?: string) {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const filtered = category && category !== 'All'
      ? products.filter(p => p.category === category)
      : products
    setData(filtered)
    setLoading(false)
  }, [category])

  return { data, loading }
}
