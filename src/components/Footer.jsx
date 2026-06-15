import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-dark text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Techitron" className="h-20 w-auto" />
              <span className="text-2xl font-bold text-white">Techi<span className="text-accent">Tron</span></span>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your trusted B2B recruitment and workforce solutions partner. Connecting businesses with skilled talent across India and international markets.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#about" className="hover:text-secondary transition">About Us</a>
              <a href="#services" className="hover:text-secondary transition">Services</a>
              <a href="#industries" className="hover:text-secondary transition">Industries</a>
              <a href="#process" className="hover:text-secondary transition">Process</a>
              <a href="#contact" className="hover:text-secondary transition">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>techitroncareers@gmail.com</p>
              <p>+91 7736962715</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Techitron Recruiting Solutions. All rights reserved.</p>
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition"
          >
            <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
