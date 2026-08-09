import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { testimonials } from '../data/testimonials'
import ProductGrid from '../components/ProductGrid'
import SectionHeading from '../components/SectionHeading'
import { Truck, ShieldCheck, RotateCcw, MessageCircle, Star } from 'lucide-react'

const featured = products.filter(p => p.isFeatured)
const newArrivals = products.filter(p => p.isNew)
const whyUs = [
  { icon: Truck, title: 'Nationwide Delivery', desc: '2–4 days in Lagos, 4–7 days elsewhere in Nigeria.' },
  { icon: ShieldCheck, title: 'Checked By Hand', desc: 'Every piece is inspected before it ships.' },
  { icon: RotateCcw, title: 'Easy Exchanges', desc: 'Free size exchange within 5 days of delivery.' },
  { icon: MessageCircle, title: 'Real Support', desc: 'Message us on WhatsApp — a person replies, not a bot.' },
]

const instagramImages = [
  'photo-1490578474895-699cd4e2cf59',
  'photo-1595777457583-95e059d581b8',
  'photo-1516762689617-e1cffcef479d',
  'photo-1509631179647-0177331693ae',
  'photo-1489987707025-afc232f7ea0f',
  'photo-1553062407-98eeb64c6a62',
]

export default function Home() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero – white overlay, dark gradient text, horizontal buttons with solid backgrounds */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-surface">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=80"
            alt="CEO FAVOURGOLD COLLECTION"
            className="h-full w-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-ivory/70 dark:bg-bg/70" />
        </div>
        <div className="container-page relative h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow text-charcoal dark:text-brand-gold">CEO FAVOURGOLD COLLECTION</span>
            <h1 className="mt-2 text-6xl font-display font-bold bg-gradient-to-r from-brand-gold to-brand-blue bg-clip-text text-transparent sm:text-7xl">
              Modern Luxury.
            </h1>
            <p className="mt-4 text-lg text-charcoal dark:text-muted max-w-lg">
              Curated pieces for everyday elegance — each garment checked by hand before it leaves our studio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/shop" className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">Browse Collection</Link>
              <Link to="/collections" className="bg-brand-gold text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">Explore Collections</Link>
              <Link to="/lookbook" className="bg-brand-gold text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">Lookbook</Link>
              <Link to="/journal" className="bg-brand-gold text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition">Journal</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Handpicked"
          title="Featured Pieces"
          description="Each garment has its own story — discover the craftsmanship behind every piece."
        />
        <div className="mt-8">
          <ProductGrid products={featured} />
        </div>
        <div className="mt-8 text-center">
          <Link to="/shop" className="btn-secondary">View All</Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-surface/50 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Just In"
            title="New Arrivals"
            description="Fresh pieces added to our collection — each with its own unique identity."
          />
          <div className="mt-8">
            <ProductGrid products={newArrivals} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Why Us"
          title="We believe in quality, care, and connection."
          align="center"
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue mx-auto">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-3 font-medium text-charcoal dark:text-text">{title}</h4>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface/50 py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Customers Say"
            title="Real feedback from real people."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-xl border border-line p-6 bg-ivory dark:bg-surface">
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-charcoal dark:text-text">"{t.message}"</p>
                <p className="mt-4 text-sm font-medium text-muted">– {t.customerName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="@favourgoldcollection"
          title="Follow us on Instagram"
          description="Get daily style inspiration and behind-the-scenes."
          align="center"
        />
        <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {instagramImages.map((id) => (
            <div key={id} className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
              <img
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&q=70`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation Links */}
      <section className="container-page py-8 border-t border-line mt-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
          <Link to="/about" className="hover:text-brand-gold">About Us</Link>
          <Link to="/sustainability" className="hover:text-brand-gold">Sustainability</Link>
          <Link to="/faq" className="hover:text-brand-gold">FAQ</Link>
          <Link to="/size-guide" className="hover:text-brand-gold">Size Guide</Link>
          <Link to="/founder" className="hover:text-brand-gold">Founder</Link>
        </div>
      </section>
    </div>
  )
}
