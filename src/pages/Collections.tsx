import React from 'react'
import { Link } from 'react-router-dom'
import { collections } from '../data/collections'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

export default function Collections() {
  return (
    <div className="container-page py-24">
      <SectionHeading
        eyebrow="Curated Edits"
        title="Collections"
        description="Pieces grouped by story, fabric, and occasion — start here if you're not sure where to begin."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, i) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-surface dark:bg-surface"
          >
            <Link to={`/collections/${collection.slug}`} className="block">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.coverImage}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-text">{collection.name}</h3>
                  <p className="mt-1 text-sm text-muted line-clamp-2">{collection.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
