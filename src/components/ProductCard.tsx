import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../types/product'

export default function ProductCard({ product }: { product: Product }) {
  const primary = product.images[0]
  const secondary = product.images[1]

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-ivory dark:bg-surface rounded-xl overflow-hidden border border-line hover:shadow-2xl transition-all duration-300"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={primary}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {secondary && (
            <img
              src={secondary}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              New
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-charcoal dark:text-text group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-muted line-clamp-2">{product.description}</p>
          <div className="mt-4 flex items-center gap-2 text-brand-gold text-sm font-medium">
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
