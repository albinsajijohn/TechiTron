import { motion } from 'framer-motion'
import { Eye, Rocket, Heart, Star, Users, Lightbulb, Handshake } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const values = [
  { title: 'Integrity', desc: 'Honesty, transparency, and professionalism in every interaction.', icon: Heart },
  { title: 'Excellence', desc: 'Exceptional recruitment services and quality talent solutions.', icon: Star },
  { title: 'Reliability', desc: 'Dependable recruitment support and timely hiring solutions.', icon: Users },
  { title: 'Customer Focus', desc: 'Prioritizing client hiring needs with tailored services.', icon: Eye },
  { title: 'Innovation', desc: 'Modern tools and best practices to improve processes.', icon: Lightbulb },
  { title: 'Partnership', desc: 'Long-term relationships for mutual success and growth.', icon: Handshake },
]

export default function MissionVision() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Vision, Mission & Core Values</h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl shadow-blue-500/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Eye className="mb-4" size={28} />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">To become a leading global recruitment and workforce solutions partner, empowering businesses with exceptional talent and creating meaningful career opportunities worldwide.</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl shadow-amber-500/20 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Rocket className="mb-4" size={28} />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <ul className="text-amber-50 space-y-2 text-sm leading-relaxed">
                <li>• Deliver high-quality recruitment solutions across diverse industries.</li>
                <li>• Connect employers with skilled professionals efficiently.</li>
                <li>• Support growth through strategic talent acquisition.</li>
                <li>• Build partnerships based on trust and transparency.</li>
                <li>• Facilitate workforce mobility across India and global markets.</li>
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h3 className="text-xl font-bold text-primary text-center mb-8">Our Core Values</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-md shadow-gray-100/50 group hover:border-secondary/20 transition-all"
              >
                <v.icon className="text-secondary mb-3 group-hover:scale-110 transition-transform" size={22} />
                <h4 className="font-bold text-primary mb-1">{v.title}</h4>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
