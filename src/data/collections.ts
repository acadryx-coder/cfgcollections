export interface Collection {
  id: string
  slug: string
  name: string
  description: string
  coverImage: string
  productSlugs: string[]
}

export const collections: Collection[] = [
  {
    id: 'c1',
    slug: 'combo-sets',
    name: 'Combo Sets',
    description: 'Curated sets that combine tops, bottoms, and accessories for a complete look.',
    coverImage: '/images/combo-shoe-bag-1.jpg', // from combo-shoe-bag
    productSlugs: [
      'combo-top-down',
      'combo-shoe-bag',
      'one-corner-combo',
      'floral-scarf-combo',
      'girls-polo-leggings-bag-combo',
      'ladies-checkered-combo',
      'ladies-graphic-combo',
      'ladies-highneck-combo',
      'ladies-polo-skirt-combo',
      'ladies-singlet-maxi-combo',
      'ladies-singlet-jean-combo',
      'crop-top-zip-coach-bag-leggings-combo',
    ],
  },
  {
    id: 'c2',
    slug: 'signature-tops',
    name: 'Signature Tops',
    description: 'Our most loved tops – crop tops, polos, tees, and more.',
    coverImage: '/images/girls-polo.jpg', // from girls-polo
    productSlugs: [
      'crop-top-guys',
      'crop-top-zip',
      'handless-polo-black',
      'handless-polo-blue',
      'white-t-shirt',
      'girls-singlet',
      'girls-polo',
      'guys-polo',
      'male-polo',
      'slay-button-crop',
      'female-long-sleeve',
      'male-long-sleeve-black',
      'male-long-sleeve-white',
    ],
  },
  {
    id: 'c3',
    slug: 'bottoms-essentials',
    name: 'Bottoms & Essentials',
    description: 'Shorts, leggings, and outerwear pieces that form the foundation of any wardrobe.',
    coverImage: '/images/bum-short-4.jpg', // from bum-short (choose one)
    productSlugs: [
      'bum-short',
      'leggings',
      'jean-jacket',
    ],
  },
  {
    id: 'c4',
    slug: 'bags-shoes',
    name: 'Bags & Shoes',
    description: 'Accessories that complete your look – from classic bags to stylish sandals.',
    coverImage: '/images/coach-bag-1.jpg', // from coach-bag
    productSlugs: [
      'coach-bag',
      'braided-strap-flat-sandals',
    ],
  },
  {
    id: 'c5',
    slug: 'dresses-knitwear',
    name: 'Dresses & Knitwear',
    description: 'Elegant dresses and cozy knits for every occasion.',
    coverImage: '/images/slay-gown-1.jpg', // from slay-gown
    productSlugs: [
      'slay-gown',
      'boys-sweater',
    ],
  },
]
