import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Placements' },
  { value: '50+', label: 'Clients' },
  { value: '10+', label: 'Industries' },
  { value: '5+', label: 'Countries' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-900 to-purple-900" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur border border-white/20 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              🚀 Trusted B2B Recruitment Partner Since 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Connecting Businesses with{' '}
            <span className="gradient-text">Skilled Talent</span>
            <br className="hidden md:block" /> Across India & Beyond
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10"
          >
            Your trusted B2B recruitment and workforce solutions partner specializing in Safety Officers, Engineers, Healthcare Professionals, Skilled Workers, and Industrial Workforce Recruitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a href="#contact" className="bg-secondary hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-secondary/30 transition transform hover:scale-105">
              Hire Talent →
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition transform hover:scale-105">
              Partner With Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-blue-200/70">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
