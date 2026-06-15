import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const reasons = [
  'Industry-Specific Recruitment Expertise',
  'Large Talent Database',
  'Fast Hiring Turnaround',
  'Domestic & International Recruitment',
  'Candidate Screening & Verification',
  'Dedicated Client Support',
  'Cost-Effective Recruitment Solutions',
  'Long-Term Business Partnership Approach',
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Why Choose Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">What sets Techitron apart as your recruitment partner</p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <AnimatedSection key={r} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-md shadow-gray-100/50 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition">
                  <CheckCircle2 className="text-green-500" size={20} />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-primary transition">{r}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
