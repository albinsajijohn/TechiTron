import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const PHONE = '917736962715'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Techitron! I'd like to discuss recruitment needs.%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Company:* ${form.company}%0A*Message:* ${form.message}`
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Reach Out</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Contact Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Ready to find the right talent? Let's start the conversation.</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10">
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md shadow-gray-100/50 border border-gray-100">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-medium text-gray-700">techitroncareers@gmail.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md shadow-gray-100/50 border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Phone className="text-green-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="font-medium text-gray-700">+91 7736962715</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md shadow-gray-100/50 border border-gray-100">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <MapPin className="text-amber-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="font-medium text-gray-700">India</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition" />
                <input type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition" />
              </div>
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition" />
              <textarea rows="4" placeholder="Tell us about your recruitment needs..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition resize-none"></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-green-500/25 transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send via WhatsApp
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
