export interface Product {
  id: string
  slug: string
  name: string
  description: string
  category: string
  price: number
  images: string[]
  isNew?: boolean
  isFeatured?: boolean
  gender?: 'male' | 'female' | 'unisex'
}
