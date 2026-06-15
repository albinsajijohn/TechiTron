import { motion } from 'framer-motion'
import { ClipboardList, Search, UserCheck, FileText, Calendar, Rocket } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const steps = [
  { icon: ClipboardList, title: 'Requirement Analysis', desc: 'Understanding your hiring needs and job specifications.', color: 'from-blue-500 to-indigo-500' },
  { icon: Search, title: 'Talent Sourcing', desc: 'Leveraging our network to find matching candidates.', color: 'from-purple-500 to-violet-500' },
  { icon: UserCheck, title: 'Screening & Assessment', desc: 'Thorough verification of skills and credentials.', color: 'from-green-500 to-emerald-500' },
  { icon: FileText, title: 'Client Presentation', desc: 'Sharing shortlisted profiles for your review.', color: 'from-amber-500 to-orange-500' },
  { icon: Calendar, title: 'Interview Coordination', desc: 'Scheduling and managing the interview process.', color: 'from-pink-500 to-rose-500' },
  { icon: Rocket, title: 'Onboarding Support', desc: 'Assisting with documentation and joining formalities.', color: 'from-teal-500 to-cyan-500' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Our Recruitment Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A streamlined 6-step process designed for speed and quality</p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 group cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <s.icon className="text-white" size={20} />
                  </div>
                  <span className="text-3xl font-bold text-gray-100 group-hover:text-gray-200 transition">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-primary mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
