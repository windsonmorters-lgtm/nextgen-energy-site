import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Zap } from 'lucide-react'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ev')

  const categories = [
    { id: 'ev', label: 'EV Packs', icon: '🔋' },
    { id: 'ess', label: 'ESS Cabinets', icon: '⚡' },
    { id: 'chargers', label: 'Smart Chargers', icon: '🔌' },
    { id: 'graphene', label: 'Graphene Solutions', icon: '💎' }
  ]

  const products = {
    ev: [
      {
        name: 'E-Scooter Battery Pack',
        voltage: '74V / 62.9V',
        capacity: '26Ah',
        bms: 'Smart BMS with app control',
        charging: 'Fast charging in 2.5hrs',
        specs: ['IP67 Waterproof', 'Temperature monitoring', '3000+ Cycle Life']
      },
      {
        name: 'E-Rickshaw Battery System',
        voltage: '48V / 60V',
        capacity: '150Ah',
        bms: 'Commercial-grade BMS',
        charging: 'Fast charging in 4hrs',
        specs: ['Heavy-duty construction', 'Hot-swappable design', '5000+ Cycle Life']
      },
      {
        name: 'E-Cycle Battery Module',
        voltage: '36V / 48V',
        capacity: '10Ah / 15Ah',
        bms: 'Ultra-lightweight BMS',
        charging: 'Fast charging in 1.5hrs',
        specs: ['Compact design', 'Lightweight', '2000+ Cycle Life']
      }
    ],
    ess: [
      {
        name: 'Industrial Grid ESS 50kWh',
        voltage: '400V nominal',
        capacity: '50kWh / 100kWh',
        bms: 'Enterprise-grade management',
        charging: 'Configurable charging profiles',
        specs: ['Grid-tied compatible', 'Remote monitoring', 'Redundant systems']
      },
      {
        name: 'Telecom Tower Backup System',
        voltage: '48V DC',
        capacity: '100kWh modular',
        bms: 'Telecom-certified BMS',
        charging: 'Solar + Grid charging',
        specs: ['Outdoor-rated enclosure', 'Scalable design', 'Year-round reliability']
      },
      {
        name: 'Solar Integration Cabinet',
        voltage: '400V AC / 48V DC',
        capacity: 'Modular 10-100kWh',
        bms: 'Hybrid energy management',
        charging: 'Multi-source charging',
        specs: ['AC/DC output', 'MPPT optimization', 'Islanding capable']
      }
    ],
    chargers: [
      {
        name: 'Ultra-Fast DC Charger',
        voltage: 'Multi-voltage compatible',
        capacity: 'Up to 50kW',
        bms: 'Integrated charging controller',
        charging: '0-80% in 15 minutes',
        specs: ['CCS / CHAdeMO compatible', 'IP55 rated', 'Remote diagnostics']
      },
      {
        name: 'Smart Home Charger',
        voltage: '220V single phase',
        capacity: '7kW / 11kW',
        bms: 'IoT-enabled management',
        charging: '0-100% in 4-6 hours',
        specs: ['Mobile app control', 'Load balancing', 'Energy monitoring']
      },
      {
        name: 'Commercial Depot Charger',
        voltage: '415V three-phase',
        capacity: '30kW multi-output',
        bms: 'Fleet management system',
        charging: 'Simultaneous multi-vehicle',
        specs: ['Vehicle identification', 'Usage analytics', 'Maintenance alerts']
      }
    ],
    graphene: [
      {
        name: 'Graphene-Enhanced EV Pack',
        voltage: '74V / 62.9V',
        capacity: '26Ah premium',
        bms: 'AI-powered BMS',
        charging: 'Ultra-fast in 1.5hrs',
        specs: ['50% faster charging', '40% more cycles', 'Better thermal management']
      },
      {
        name: 'Custom Power Module',
        voltage: 'As per requirement',
        capacity: 'Configurable',
        bms: 'Tailored BMS solution',
        charging: 'Optimized for application',
        specs: ['R&D supported', 'Prototype to production', 'IP partnership']
      },
      {
        name: 'Graphene Hybrid Pack',
        voltage: 'Dual voltage capable',
        capacity: 'Premium rated Ah',
        bms: 'Dual-mode management',
        charging: 'Multi-protocol charging',
        specs: ['Extended lifespan', 'Performance upgrade', 'Backward compatible']
      }
    ]
  }

  const currentProducts = products[activeCategory as keyof typeof products]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Product Portfolio</h1>
          <p className="text-xl text-gray-300">Complete battery solutions for every application</p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 shadow-lg'
                    : 'bg-gray-100 text-slate-950 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {currentProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-slate-200 hover:border-accent-green/50"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 flex items-center justify-center text-6xl">
                  {['⚡', '🔋', '🔌', '💎'][idx % 4]}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950 mb-4">{product.name}</h3>

                  {/* Technical Specs Table */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-gray-600">Voltage</span>
                      <span className="font-semibold text-slate-950">{product.voltage}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-gray-600">Capacity</span>
                      <span className="font-semibold text-slate-950">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-gray-600">BMS</span>
                      <span className="font-semibold text-slate-950">{product.bms}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-gray-600">Charging</span>
                      <span className="font-semibold text-accent-green">{product.charging}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {product.specs.map((spec, sidx) => (
                      <div key={sidx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-accent-cyan">✓</span>
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* Download Datasheet CTA */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Download Technical Datasheet
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-slate-950" />
          <h2 className="text-4xl font-bold text-slate-950 mb-4">Need Custom Solutions?</h2>
          <p className="text-lg text-slate-900 mb-8">
            Our R&D team can develop tailored battery systems for your specific requirements
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl transition"
          >
            Request Custom Configuration
          </Link>
        </div>
      </section>
    </div>
  )
}
