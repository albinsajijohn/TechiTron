import { motion } from 'framer-motion'
import { Building2, Fuel, Factory, Truck, Heart, Wrench, UtensilsCrossed, Building, ShoppingBag, Plane } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const industries = [
  { name: 'Construction & Infrastructure', icon: Building2, color: 'from-orange-400 to-red-500' },
  { name: 'Oil & Gas', icon: Fuel, color: 'from-yellow-400 to-amber-600' },
  { name: 'Manufacturing', icon: Factory, color: 'from-gray-400 to-gray-600' },
  { name: 'Logistics & Warehousing', icon: Truck, color: 'from-blue-400 to-indigo-600' },
  { name: 'Healthcare', icon: Heart, color: 'from-pink-400 to-rose-600' },
  { name: 'Engineering', icon: Wrench, color: 'from-cyan-400 to-teal-600' },
  { name: 'Hospitality', icon: UtensilsCrossed, color: 'from-green-400 to-emerald-600' },
  { name: 'Facility Management', icon: Building, color: 'from-violet-400 to-purple-600' },
  { name: 'Retail & E-Commerce', icon: ShoppingBag, color: 'from-fuchsia-400 to-pink-600' },
  { name: 'Aviation & Transportation', icon: Plane, color: 'from-sky-400 to-blue-600' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/3 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Sectors</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Industries We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Delivering specialized recruitment across key sectors</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map(({ name, icon: Icon, color }, i) => (
            <AnimatedSection key={name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-md shadow-gray-100/50 group cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={22} />
                </div>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-primary transition">{name}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
