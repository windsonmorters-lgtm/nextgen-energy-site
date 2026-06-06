import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, BarChart3, Globe, Leaf, Quote, Award, Shield, Users, Microscope, FileText, Newspaper } from 'lucide-react'
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

  // Product showcase data - Electric Scooter Batteries
  const products = [
    { name: 'E-Scooter Battery 51V 30AH', voltage: '51V', capacity: '30AH', weight: '14.5 Kg', image: '/battery-48v.jpg' },
    { name: 'E-Scooter Battery 60V 30AH', voltage: '60V', capacity: '30AH', weight: '15.2 Kg', image: '/Devi-Battery.jpeg' },
    { name: 'E-Scooter Battery 60V 45AH', voltage: '60V', capacity: '45AH', weight: '16.8 Kg', image: '/battery-60v-29.jpg' },
   
  ]

  // Core Strengths data
  const coreStrengths = [
    { icon: Microscope, title: 'Advanced Technology', description: 'Driven by continuous innovation, our lithium solutions deliver higher efficiency, faster charging, and smarter performance for modern energy needs.' },
    { icon: Award, title: 'Unmatched Quality', description: 'Every battery undergoes rigorous multi-stage testing to ensure long-lasting durability, reliable output, and consistent performance in every condition.' },
    { icon: Shield, title: 'Global Standards', description: 'Our products comply with international certifications, meeting stringent safety, and sustainability benchmarks recognized across global markets.' },
    { icon: Users, title: 'Trusted Partnerships', description: 'Collaborating with leading OEMs, distributors, and energy innovators, we build strong, long-term relationships that drive mutual growth.' }
  ]

  // Testimonials data
  const testimonials = [
    { name: 'Rajesh Kumar', role: 'E-Rickshaw Fleet Owner', text: 'As I Provide E-Rickshaws on rent, I was looking for an alternate to costly batteries without compromising on performance. Currently I\'ve been completely satisfied with the results I\'ve got from E Rickshaw batteries by Naxen Exim India Energy.' },
    { name: 'Priya Sharma', role: 'Electric Bicycle User', text: 'These Lithium Batteries are really powerful. I purchased 2 Lithium Batteries one for my Electric Bicycle and other one for my Bike. Working really well. Great Product Team Naxen Exim India.' },
    { name: 'Amit Patel', role: 'EV Enthusiast', text: 'Only had it a couple weeks but so far works as expected. Light weight, small, no voltage drops off down to 60%. Haven\'t been able to discharge it below that in a day\'s usage.' },
    { name: 'Vikram Singh', role: 'E-Bike Owner', text: 'Heard of Naxen Exim India Batteries and took risk to buy lithium batteries for my E-Bike. Turns a great deal for myself. Great Battery backup with Quick charging.' }
  ]

  // Press releases data
  const pressReleases = [
    { title: 'Naxen Exim India Energy Launches IoT-Enabled Smart BMS for Smarter Lithium Battery Solutions', date: 'Jan 15, 2026', category: 'Technology' },
    { title: 'Naxen Exim India\'s New Smart BMS Enhances EV Battery Safety & Real-Time Performance', date: 'Jan 10, 2026', category: 'Innovation' },
    { title: 'Naxen Exim India Energy Accelerates Intelligent EV Mobility with Advanced Smart BMS', date: 'Jan 5, 2026', category: 'Product Launch' },
    { title: 'Naxen Exim India Energy Gains Media Spotlight Among India\'s Top Battery Stocks to Watch in 2026', date: 'Dec 28, 2025', category: 'Recognition' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center px-4 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent-cyan rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-accent-green rounded-full filter blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Powering India's Circular
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-green bg-clip-text text-transparent">
                Lithium Energy Platform
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
              Advanced battery manufacturing with full-cycle recycling and sustainable mobility solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                to="/products"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-accent-green/50 transition flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                Explore EV Battery Packs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent-cyan text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Partner With Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure & Impact Counters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-950 px-4">Our Infrastructure & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                className="p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg border border-accent-cyan/20 hover:border-accent-green/50 transition text-center"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 text-accent-green" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 mb-1 sm:mb-2">
                  {item.value}
                  <span className="text-accent-cyan">{item.suffix}</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">Introducing Next-Gen Electric Scooter Battery Range</h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            High-performance lithium batteries designed for every EV application
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-accent-green/50 transition group"
              >
                <div className="h-64 bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{product.name}</h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-xs sm:text-sm">
                    <div className="text-center p-2 bg-slate-700 rounded">
                      <p className="text-accent-cyan font-bold">{product.voltage}</p>
                      <p className="text-gray-400 text-xs">Voltage</p>
                    </div>
                    <div className="text-center p-2 bg-slate-700 rounded">
                      <p className="text-accent-cyan font-bold">{product.capacity}</p>
                      <p className="text-gray-400 text-xs">Capacity</p>
                    </div>
                    <div className="text-center p-2 bg-slate-700 rounded">
                      <p className="text-accent-cyan font-bold">{product.weight}</p>
                      <p className="text-gray-400 text-xs">Weight</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to="/contact"
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 bg-accent-green text-slate-950 font-bold rounded-lg text-center hover:bg-accent-green/80 transition text-xs sm:text-sm"
                    >
                      Enquire Now
                    </Link>
                    <Link
                      to="/products"
                      className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 border border-accent-cyan text-accent-cyan font-bold rounded-lg text-center hover:bg-accent-cyan/10 transition text-xs sm:text-sm"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Strengths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-950 px-4">Our Core Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {coreStrengths.map((strength, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 transition text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-accent-green to-accent-cyan rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <strength.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2 sm:mb-3">{strength.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-slate-950 px-4">Words Of Our Clients</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            What our customers say about their experience with Naxen Exim India Energy batteries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition"
              >
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent-green/30 mb-3 sm:mb-4" />
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-green to-accent-cyan rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage / Press Releases Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-accent-green" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Media Coverage & Press Releases</h2>
          </div>
          <p className="text-gray-400 mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            Stay updated with our latest innovations, product launches, and company achievements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {pressReleases.map((press, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 sm:p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-accent-green/50 transition group cursor-pointer"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs rounded-full mb-2">
                      {press.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent-green transition line-clamp-2">
                      {press.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">{press.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-accent-cyan text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition text-sm sm:text-base"
            >
              View All Press Releases
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-950 px-4">Our Business Segments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {businessSegments.map((segment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 transition"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{segment.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 sm:mb-3">{segment.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{segment.description}</p>
                <div className="space-y-2">
                  {segment.products.map((product, pidx) => (
                    <div key={pidx} className="flex items-center gap-2 text-accent-green">
                      <span className="text-base sm:text-lg">→</span>
                      <span className="text-sm sm:text-base">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Ecosystem */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">Circular Battery Ecosystem</h2>
          <p className="text-center text-gray-400 mb-10 sm:mb-16 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Full-lifecycle battery management from sourcing to recycling
          </p>
          
          {/* Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-12">
            {ecosystemPhases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className={`p-4 sm:p-6 rounded-lg bg-gradient-to-br ${item.color} to-transparent border border-white/20 text-center hover:border-accent-green/50 transition`}>
                  <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{idx + 1}</div>
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">{item.phase}</h4>
                  <p className="text-xs text-gray-200 hidden sm:block">{item.description}</p>
                </div>
                {idx < ecosystemPhases.length - 1 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-accent-green to-transparent hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-green">Phase 1: Processing & Recovery</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Crushing and mechanical separation processes extract valuable materials. Our advanced black mass processing technology recovers lithium, cobalt, and manganese with 95%+ efficiency.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>✓ Crushing & Mechanical Separation</li>
                <li>✓ Black Mass Processing</li>
                <li>✓ Material Sorting & Classification</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-cyan">Phase 2: Refining & Extraction</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Advanced chemical refining extracts pure lithium, cobalt, and manganese for reuse in new battery production, creating a true circular economy.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>✓ Chemical Refining & Leaching</li>
                <li>✓ Core Mineral Extraction</li>
                <li>✓ Battery-Grade Material Production</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 mb-4 sm:mb-6">Ready to Transform Your Energy?</h2>
          <p className="text-base sm:text-lg text-slate-900 mb-6 sm:mb-8">
            Partner with Naxen Exim India — India's leading lithium battery manufacturer
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl hover:shadow-slate-950/50 transition text-sm sm:text-base"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
