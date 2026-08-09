import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory dark:bg-bg py-12 mt-12 transition-colors duration-300">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="CEO FAVOURGOLD COLLECTION" className="w-10 h-10 object-contain rounded-full" />
          <span className="text-xl font-display font-bold bg-gradient-to-r from-brand-gold to-brand-blue bg-clip-text text-transparent">
            CEO FAVOURGOLD COLLECTION
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-charcoal dark:text-muted">
          <Link to="/shop" className="hover:text-brand-gold">Shop</Link>
          <Link to="/collections" className="hover:text-brand-gold">Collections</Link>
          <Link to="/editorial" className="hover:text-brand-gold">Editorial</Link>
          <Link to="/about" className="hover:text-brand-gold">About</Link>
          <Link to="/help" className="hover:text-brand-gold">Help</Link>
        </div>
        <div className="flex gap-6 text-sm text-charcoal/80 dark:text-muted/80">
          <a href="mailto:hello@favourgold.com" className="hover:text-brand-gold">Email</a>
          <a href="https://instagram.com/favourgoldcollection" target="_blank" rel="noopener" className="hover:text-brand-gold">Instagram</a>
          <a href="https://wa.me/2349049969174" target="_blank" rel="noopener" className="hover:text-brand-gold">WhatsApp</a>
        </div>
        <p className="text-sm text-charcoal/60 dark:text-muted/60">© {new Date().getFullYear()} CEO FAVOURGOLD COLLECTION. All rights reserved.</p>
        <p className="text-xs text-charcoal/40 dark:text-muted/40">DM to order – screenshots welcome.</p>
      </div>
    </footer>
  )
}
