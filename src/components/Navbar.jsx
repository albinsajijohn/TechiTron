import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Techitron" className="h-20 w-auto" />
          <span className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>Techi<span className="text-accent">Tron</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a
              key={l.name}
              href={l.href}
              className={`text-sm font-medium transition hover:text-secondary ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {l.name}
            </a>
          ))}
          <a href="#contact" className="bg-secondary hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-lg shadow-secondary/25">
            Get Started
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} className={scrolled ? 'text-primary' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium py-2 hover:text-secondary transition">{l.name}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="bg-secondary text-white text-center font-semibold px-5 py-3 rounded-full mt-2">Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
