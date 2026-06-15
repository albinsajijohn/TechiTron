import { motion } from 'framer-motion'
import { Users, Globe, Zap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const features = [
  { icon: Users, title: 'Expert Talent Pool', desc: 'Access to thousands of pre-screened professionals across industries.' },
  { icon: Globe, title: 'Global Reach', desc: 'Recruitment solutions for domestic and international markets.' },
  { icon: Zap, title: 'Fast Turnaround', desc: 'Streamlined process to reduce hiring time significantly.' },
]

export default function Welcome() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Welcome</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Techitron Recruiting Solutions</h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
              We help organizations find qualified, reliable, and job-ready professionals across multiple industries. Our extensive candidate network, industry expertise, and streamlined hiring process help companies reduce recruitment time and build stronger teams.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-lg shadow-gray-200/50 group cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition">
                  <f.icon className="text-secondary" size={26} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
