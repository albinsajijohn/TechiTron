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
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/techitron_/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.233 8.418 2.175 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.602.392 3.635 1.36 2.67 2.326 2.407 3.499 2.349 4.777.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.277.32 2.45 1.287 3.418.967.967 2.14 1.229 3.418 1.287C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.058 2.45-.32 3.418-1.287.967-.967 1.229-2.14 1.287-3.418.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.32-2.45-1.287-3.418C19.398.392 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
              <a href="https://www.facebook.com/100082811603079/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/techitron-recruitment-solutions/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
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
