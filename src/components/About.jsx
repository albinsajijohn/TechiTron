import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { Target, TrendingUp, Shield, Handshake } from 'lucide-react'

const highlights = [
  { icon: Target, text: 'End-to-end recruitment services' },
  { icon: TrendingUp, text: 'Growing network of industry experts' },
  { icon: Shield, text: 'Transparent & reliable process' },
  { icon: Handshake, text: 'Long-term workforce partnerships' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">About Us</h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>Techitron Recruiting Solutions is a professional B2B recruitment agency (2026) dedicated to helping organizations find exceptional talent across India and international markets.</p>
              <p>We understand that the success of every business depends on the quality of its workforce. Our mission is to bridge the gap between employers and qualified professionals through efficient, transparent, and reliable recruitment solutions.</p>
              <p>Our recruitment approach combines market knowledge, talent assessment, and personalized service to ensure the right candidate is matched with the right opportunity.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.text}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md shadow-gray-100/50"
                >
                  <h.icon className="text-secondary mb-3" size={24} />
                  <p className="text-sm font-medium text-gray-700">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
