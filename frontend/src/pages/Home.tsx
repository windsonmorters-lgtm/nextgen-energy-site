import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, BarChart3, Globe, Leaf } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [counts, setCounts] = useState({ facility: 0, capacity: 0, pincodes: 0, partners: 0 })

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        facility: prev.facility < 55 ? prev.facility + 1 : 55,
        capacity: prev.capacity < 12500 ? prev.capacity + 100 : 12500,
        pincodes: prev.pincodes < 1200 ? prev.pincodes + 50 : 1200,
        partners: prev.partners < 26 ? prev.partners + 1 : 26,
      }))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const businessSegments = [
    {
      title: 'Electric Vehicle Solutions',
      description: 'Comprehensive battery packs for E-Scooters, E-Rickshaws, and E-Cycles',
      icon: '🔋',
      products: ['E-Scooter Packs', 'E-Rickshaw Systems', 'E-Cycle Batteries']
    },
    {
      title: 'Energy Storage Systems',
      description: 'Industrial Grid & Telecom ESS solutions for critical infrastructure',
      icon: '⚡',
      products: ['Grid Storage', 'Telecom Backup', 'Solar Integration']
    },
    {
      title: 'Electronics & Custom Solutions',
      description: 'Advanced Graphene packs and bespoke battery configurations',
      icon: '🎯',
      products: ['Graphene Packs', 'Custom Solutions', 'R&D Services']
    }
  ]

  const ecosystemPhases = [
    { phase: 'Sourcing', description: 'Raw material procurement & quality control', color: 'from-blue-500' },
    { phase: 'Manufacturing', description: 'Advanced automated production facility', color: 'from-purple-500' },
    { phase: 'Deployment', description: 'OEM partnerships & market distribution', color: 'from-pink-500' },
    { phase: 'Buyback', description: 'Strategic battery buyback programs', color: 'from-green-500' },
    { phase: 'Second-Life', description: 'Refurbishment for stationary applications', color: 'from-yellow-500' },
    { phase: 'Recycling', description: 'Black mass processing & mineral recovery', color: 'from-red-500' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-green rounded-full filter blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Powering India's Circular
              <br />
              <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-green bg-clip-text text-transparent">
                Lithium Energy Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Advanced battery manufacturing with full-cycle recycling and sustainable mobility solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-accent-green/50 transition flex items-center justify-center gap-2 group"
              >
                Explore EV Battery Packs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition flex items-center justify-center gap-2"
              >
                Partner With Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure & Impact Counters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Our Infrastructure & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Sq. Ft. Facility', value: counts.facility, suffix: 'K', icon: BarChart3 },
              { label: 'Packs/Month Capacity', value: counts.capacity, suffix: '+', icon: Zap },
              { label: 'National Pin-codes Served', value: counts.pincodes, suffix: '+', icon: Globe },
              { label: 'Strategic OEM Partners', value: counts.partners, suffix: '+', icon: Leaf }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-8 bg-white rounded-xl shadow-lg border border-accent-cyan/20 hover:border-accent-green/50 transition text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-accent-green" />
                <div className="text-4xl font-bold text-slate-950 mb-2">
                  {item.value}
                  <span className="text-accent-cyan">{item.suffix}</span>
                </div>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Our Business Segments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessSegments.map((segment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 transition"
              >
                <div className="text-5xl mb-4">{segment.icon}</div>
                <h3 className="text-2xl font-bold text-slate-950 mb-3">{segment.title}</h3>
                <p className="text-gray-600 mb-6">{segment.description}</p>
                <div className="space-y-2">
                  {segment.products.map((product, pidx) => (
                    <div key={pidx} className="flex items-center gap-2 text-accent-green">
                      <span className="text-lg">→</span>
                      <span className="text-sm">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Ecosystem */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Circular Battery Ecosystem</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Full-lifecycle battery management from sourcing to recycling
          </p>
          
          {/* Timeline */}
          <div className="grid md:grid-cols-6 gap-4 mb-12">
            {ecosystemPhases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className={`p-6 rounded-lg bg-gradient-to-br ${item.color} to-transparent border border-white/20 text-center hover:border-accent-green/50 transition`}>
                  <div className="text-3xl font-bold mb-2">{idx + 1}</div>
                  <h4 className="font-bold mb-2">{item.phase}</h4>
                  <p className="text-xs text-gray-200">{item.description}</p>
                </div>
                {idx < ecosystemPhases.length - 1 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-accent-green to-transparent hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-accent-green">Phase 1: Processing & Recovery</h3>
              <p className="text-gray-300 mb-4">
                Crushing and mechanical separation processes extract valuable materials. Our advanced black mass processing technology recovers lithium, cobalt, and manganese with 95%+ efficiency.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Crushing & Mechanical Separation</li>
                <li>✓ Black Mass Processing</li>
                <li>✓ Material Sorting & Classification</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-accent-cyan">Phase 2: Refining & Extraction</h3>
              <p className="text-gray-300 mb-4">
                Advanced chemical refining extracts pure lithium, cobalt, and manganese for reuse in new battery production, creating a true circular economy.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Chemical Refining & Leaching</li>
                <li>✓ Core Mineral Extraction</li>
                <li>✓ Battery-Grade Material Production</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-950 mb-6">Ready to Transform Your Energy?</h2>
          <p className="text-lg text-slate-900 mb-8">
            Partner with NextGen — India's leading lithium battery manufacturer
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl hover:shadow-slate-950/50 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
