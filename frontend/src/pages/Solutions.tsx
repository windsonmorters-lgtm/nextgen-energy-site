import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Sun, Smartphone, Lightbulb, Battery, CheckCircle, Leaf, Globe } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      id: 'electric-vehicle',
      icon: Zap,
      title: 'Electric Vehicle Solutions',
      subtitle: 'Powering the Future of Mobility',
      description: 'Advanced lithium battery packs designed for the evolving electric vehicle market. From E-Scooters to E-Rickshaws and E-Cycles, our solutions deliver unmatched performance, longer range, and faster charging.',
      features: [
        'High energy density for extended range',
        'Fast charging capability (80% in 2 hours)',
        'Smart BMS with IoT connectivity',
        'Lightweight design for better efficiency',
        '5+ years lifespan with 2000+ cycles',
        'IP67 waterproof rating'
      ],
      products: ['E-Scooter Battery 48V-74V range', 'E-Rickshaw Battery 51.2V', 'E-Cycle Battery 36V-48V', 'Custom EV Solutions'],
      image: 'ev-solution',
      color: 'from-accent-green to-emerald-600'
    },
    {
      id: 'solar-energy',
      icon: Sun,
      title: 'Solar Energy Storage',
      subtitle: 'Harnessing Renewable Power',
      description: 'Reliable energy storage solutions for residential, commercial, and industrial solar applications. Our batteries store excess solar energy for use during peak hours or outages, maximizing your renewable energy investment.',
      features: [
        'Deep cycle capability for daily use',
        '99% depth of discharge (DoD)',
        '10+ years design life',
        'Scalable modular architecture',
        'Remote monitoring and control',
        'Maintenance-free operation'
      ],
      products: ['12.8V Solar Battery', '25.6V Solar Battery', '48V Solar Battery', '51.2V Solar Battery', 'Custom ESS Solutions'],
      image: 'solar-solution',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'portable-lighting',
      icon: Lightbulb,
      title: 'Portable Lighting Solutions',
      subtitle: 'Light Where You Need It',
      description: 'Compact, lightweight battery solutions for portable lighting applications. Perfect for emergency lights, solar street lights, camping lights, and industrial portable lighting systems.',
      features: [
        'Ultra-lightweight design',
        'Long standby time (6+ months)',
        'High discharge rate capability',
        'Temperature resistant (-20°C to 60°C)',
        'Compact form factor',
        'Multiple safety protections'
      ],
      products: ['Emergency Light Battery', 'Solar Street Light Battery', 'Camping Light Battery', 'Industrial Light Battery'],
      image: 'lighting-solution',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'consumer-electronics',
      icon: Smartphone,
      title: 'Consumer Electronics',
      subtitle: 'Powering Everyday Devices',
      description: 'High-performance lithium batteries for consumer electronics including medical devices, power banks, drones, robotics, and custom electronic applications requiring reliable portable power.',
      features: [
        'High discharge rate for demanding devices',
        'Compact and lightweight',
        'Consistent voltage output',
        'Multiple safety certifications',
        'Custom form factors available',
        'Low self-discharge rate'
      ],
      products: ['Medical Device Battery', 'Power Bank Cells', 'Drone Battery', 'Robot Battery', 'Custom Electronic Battery'],
      image: 'electronics-solution',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive lithium battery solutions across multiple industries. 
              From electric mobility to renewable energy storage, we power innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Zap className="w-5 h-5 text-accent-green" />
                <span>Electric Vehicles</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Sun className="w-5 h-5 text-yellow-400" />
                <span>Solar Storage</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Lightbulb className="w-5 h-5 text-blue-400" />
                <span>Portable Lighting</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Smartphone className="w-5 h-5 text-purple-400" />
                <span>Electronics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, idx) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${solution.color} text-white rounded-full mb-4`}>
                  <solution.icon className="w-5 h-5" />
                  <span className="font-semibold">{solution.title}</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-950 mb-2">{solution.subtitle}</h2>
                <p className="text-gray-600 text-lg mb-6">{solution.description}</p>
                
                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {solution.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Products */}
                <div className="mb-8">
                  <h4 className="font-bold text-slate-950 mb-3">Available Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.products.map((product, pidx) => (
                      <span
                        key={pidx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm border border-slate-200"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-lg transition"
                >
                  Get a Quote
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative ${idx % 2 === 1 ? 'lg:order-first' : ''}`}
              >
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${solution.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <solution.icon className="w-32 h-32 text-white/80" />
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white/20 rounded-full" />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Battery className="w-8 h-8 text-accent-green" />
                    <div>
                      <p className="text-2xl font-bold text-slate-950">2000+</p>
                      <p className="text-xs text-gray-500">Charge Cycles</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Naxen Exim India Solutions?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry-leading technology combined with unmatched customer support
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Sustainable', desc: 'Eco-friendly manufacturing with full lifecycle recycling programs' },
              { icon: Globe, title: 'Global Standards', desc: 'ISO certified products meeting international safety benchmarks' },
              { icon: Zap, title: 'Innovation', desc: 'Continuous R&D with cutting-edge battery technology' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-800 rounded-xl border border-slate-700 text-center hover:border-accent-green/50 transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-green/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-950 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-900 mb-8">
            Our engineering team can design batteries tailored to your specific requirements.
            From form factor to capacity, we deliver exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl transition"
            >
              Discuss Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-950 text-slate-950 font-bold rounded-lg hover:bg-slate-950/10 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
