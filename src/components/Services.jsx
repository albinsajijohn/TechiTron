import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ShieldCheck, Package, Cpu, Heart, UtensilsCrossed, Wrench, Briefcase, Truck, Globe } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const specializations = [
  { name: 'Safety Officers & HSE Professionals', icon: ShieldCheck, color: 'from-red-500 to-orange-500' },
  { name: 'Warehouse Supervisors & Associates', icon: Package, color: 'from-amber-500 to-yellow-500' },
  { name: 'Engineers & Technical Staff', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
  { name: 'Nurses & Healthcare Professionals', icon: Heart, color: 'from-pink-500 to-rose-500' },
  { name: 'Hospitality Staff', icon: UtensilsCrossed, color: 'from-green-500 to-emerald-500' },
  { name: 'Skilled & Semi-Skilled Workers', icon: Wrench, color: 'from-violet-500 to-purple-500' },
  { name: 'Administrative Professionals', icon: Briefcase, color: 'from-indigo-500 to-blue-500' },
  { name: 'Operations & Logistics Personnel', icon: Truck, color: 'from-teal-500 to-cyan-500' },
  { name: 'International Workforce Recruitment', icon: Globe, color: 'from-purple-500 to-pink-500' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Our Recruitment Specializations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">End-to-end recruitment services covering diverse roles and industries</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {specializations.map((s) => (
              <SwiperSlide key={s.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 group cursor-pointer h-48 flex flex-col items-center justify-center text-center relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <s.icon className="text-white" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-primary transition">{s.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </div>
    </section>
  )
}
