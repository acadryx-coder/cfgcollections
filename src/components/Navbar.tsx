import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    /*{ name: 'Editorial', path: '/editorial' },*/
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-ivory/80 dark:bg-bg/80 backdrop-blur-sm border-b border-line z-20 transition-colors duration-300">
      <div className="container-page h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.jpeg" alt="CEO FAVOURGOLD COLLECTION" className="w-10 h-10 object-contain rounded-full" />
          <span className="text-xl font-display font-bold bg-gradient-to-r from-brand-gold to-brand-blue bg-clip-text text-transparent">
            CEO FAVOURGOLD COLLECTION
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-sm font-medium',
                location.pathname === link.path
                  ? 'text-brand-gold'
                  : 'text-charcoal dark:text-muted hover:text-brand-gold'
              )}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-surface">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 relative z-50">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="fixed top-16 left-0 right-0 bg-ivory dark:bg-bg border-b border-line overflow-hidden z-40 md:hidden shadow-lg">
              <div className="flex flex-col px-4 py-6 gap-4">
                {links.map(link => (
                  <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-medium text-charcoal dark:text-text hover:text-brand-gold">
                    {link.name}
                  </Link>
                ))}
                <button onClick={() => { toggleTheme(); setIsOpen(false) }} className="text-left text-lg font-medium text-charcoal dark:text-text hover:text-brand-gold">
                  Toggle Theme
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
