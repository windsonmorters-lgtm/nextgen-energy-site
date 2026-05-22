import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Users, Award, Factory } from 'lucide-react'

export default function About() {
  const leadership = [
    { name: 'Mr. Narottam Agarwal', title: 'Chairman & Managing Director', bio: '25+ years in energy storage and EV manufacturing' },
    { name: 'Ms. Manya Agarwal', title: 'Chief Financial Officer', bio: 'Former Big-4 finance leader, NSE SME listing specialist' },
    { name: 'Mr. Manmeet Singh', title: 'Chief Technology Officer', bio: 'Battery R&D pioneer with 15+ patents in BMS technology' },
    { name: 'Mr. Pawan Rajpoot', title: 'Head of Operations', bio: 'Scaled production from 2K to 12.5K packs/month' },
  ]

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System', year: '2022' },
    { name: 'AIS 156', desc: 'Automotive Industry Standard for EV batteries', year: '2023' },
    { name: 'BIS Certified', desc: 'Bureau of Indian Standards compliance', year: '2023' },
    { name: 'IEC 62619', desc: 'International safety standard for lithium cells', year: '2024' },
  ]

  const milestones = [
    { year: '2020', event: 'Founded in Churu, Rajasthan' },
    { year: '2022', event: 'Implemented Strategy' },
    { year: '2024', event: 'Multiple Tie-Ups for Delivering State of the Art Solution ' },
    { year: '2025', event: 'Launched Devi Battery, EV-Fit' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Naxen Exim India</h1>
          <p className="text-xl text-gray-300">India's circular lithium energy platform — from manufacturing to recycling</p>
        </motion.div>
      </section>

      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-slate-950 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Naxen Exim India Energy was founded with a vision to make India self-reliant in lithium-ion battery technology. What began as a small R&D lab in Ghaziabad has grown into a 55,000 sq. ft. state-of-the-art manufacturing facility producing over 12,500 battery packs per month.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we serve 26+ OEM partners across e-mobility, telecom, and grid storage — with a unique circular ecosystem that recovers and reuses critical minerals from end-of-life batteries.
              </p>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-accent-green/30">
                <Target className="w-10 h-10 text-accent-green flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-950">Our Mission</p>
                  <p className="text-gray-600 text-sm">Power sustainable mobility through innovative, recyclable battery technology</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-accent-green"
                >
                  <span className="text-2xl font-bold text-accent-cyan flex-shrink-0">{m.year}</span>
                  <p className="text-gray-700">{m.event}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Factory, label: '55K sq. ft.', desc: 'Manufacturing facility' },
              { icon: Users, label: '500+', desc: 'Team members' },
              { icon: Award, label: '4+', desc: 'Industry certifications' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border-2 border-slate-200"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent-green" />
                <div className="text-3xl font-bold text-slate-950 mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="leadership" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-accent-green/50 transition text-center"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent-green to-accent-cyan rounded-full flex items-center justify-center text-3xl"
                >
                  👤
                </motion.div>
                <h3 className="font-bold text-slate-950">{person.name}</h3>
                <p className="text-sm text-accent-green font-semibold mt-1">{person.title}</p>
                <p className="text-sm text-gray-600 mt-3">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="certifications" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-accent-cyan/50 text-center"
              >
                <Award className="w-10 h-10 mx-auto mb-4 text-accent-cyan" />
                <h3 className="font-bold text-slate-950">{cert.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{cert.desc}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-accent-green/10 text-accent-green text-xs font-semibold rounded-full">
                  Since {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-950 mb-6">Partner With India's Battery Leader</h2>
          <p className="text-lg text-slate-900 mb-8">Join 26+ OEM partners building the future of sustainable mobility</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
