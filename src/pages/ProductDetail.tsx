import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductDetail() {
  const { slug } = useParams()
  const { data: product, loading } = useProduct(slug)

  if (loading) {
    return (
      <div className="container-page py-24">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-1/3 bg-surface/50 rounded" />
          <div className="aspect-[4/5] bg-surface/50 rounded-xl" />
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container-page py-24 text-center">
        <h2 className="text-2xl">Product not found</h2>
        <Link to="/shop" className="text-brand-gold hover:underline mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-24">
      <Link to="/shop" className="flex items-center gap-2 text-brand-gold hover:underline mb-6">
        <ChevronLeft size={20} /> Back to Shop
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface border border-line">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <div key={i} className="w-20 h-24 overflow-hidden rounded-lg bg-surface border border-line">
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details – story-driven */}
        <div>
          <span className="eyebrow">{product.category}</span>
          <h1 className="mt-2 text-4xl font-display">{product.name}</h1>
          <div className="mt-6 prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted leading-relaxed">{product.description}</p>
            <p className="mt-4 text-muted text-sm">
              Each piece is carefully crafted with attention to every detail. From fabric selection to final stitching, we ensure quality at every step.
            </p>
          </div>
          <div className="mt-8 border-t border-line pt-6">
            <p className="text-sm text-muted">
              To order, take a screenshot and send it via DM on Instagram or WhatsApp.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://instagram.com/favourgoldcollection"
                target="_blank"
                rel="noopener"
                className="btn-secondary"
              >
                DM on Instagram
              </a>
              <a
                href="https://wa.me/2349049969174"
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
