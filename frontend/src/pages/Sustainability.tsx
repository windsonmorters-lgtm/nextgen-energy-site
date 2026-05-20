import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, Droplet, Recycle } from 'lucide-react'

export default function Sustainability() {
  const recyclingPhases = [
    {
      phase: 'Phase 1: Crushing & Black Mass Processing',
      icon: <Recycle className="w-12 h-12" />,
      description: 'Advanced mechanical and thermal processes separate battery components',
      details: [
        'Automated crushing and sorting systems',
        'Black mass concentration process',
        'Material classification & separation',
        'Recovery efficiency: 95%+'
      ]
    },
    {
      phase: 'Phase 2: Refining & Mineral Extraction',
      icon: <Droplet className="w-12 h-12" />,
      description: 'Chemical refining extracts pure battery-grade materials',
      details: [
        'Lithium extraction and purification',
        'Cobalt recovery processes',
        'Manganese refinement',
        'Material purity: 99.5%+'
      ]
    }
  ]

  const buybackProgram = [
    { title: 'Battery Evaluation', desc: 'Free assessment of battery condition' },
    { title: 'Fair Market Value', desc: 'Competitive pricing based on capacity' },
    { title: 'Instant Pickup', desc: 'Free collection from your location' },
    { title: 'Responsible Recycling', desc: 'Full traceability through process' }
  ]

  const impacts = [
    { metric: '5,000+', desc: 'Batteries recycled annually' },
    { metric: '1,200 tons', desc: 'Raw materials recovered yearly' },
    { metric: '80%', desc: 'Reduction in landfill waste' },
    { metric: '₹50 Cr', desc: 'Circular economy value created' }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Sustainability & Recycling</h1>
          <p className="text-xl text-gray-300">Full-lifecycle battery management and circular economy solutions</p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-950 mb-6">Our Green Ecosystem</h2>
              <p className="text-gray-600 mb-4">
                NextGen is committed to environmental responsibility through advanced battery recycling and resource recovery programs. We've established a complete circular economy framework that transforms end-of-life batteries into valuable raw materials.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art recycling facility processes batteries with minimal environmental impact, recovering over 95% of valuable materials including lithium, cobalt, manganese, and nickel.
              </p>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <Leaf className="w-6 h-6 text-accent-green flex-shrink-0" />
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p className="font-semibold text-slate-950">Zero Waste Target</p>
                  <p className="text-gray-600">90% of battery mass recycled or repurposed</p>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-80 bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 rounded-xl border-2 border-accent-green/30 flex items-center justify-center text-7xl"
            >
              ♻️
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Environmental Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impacts.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 text-center"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-accent-green mb-2"
                >
                  {item.metric}
                </motion.div>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="recycling" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">How We Recycle</h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
            {recyclingPhases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div initial={{ rotate: -10 }} whileInView={{ rotate: 0 }} className="text-accent-green">
                      {item.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-slate-950">{item.phase}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.details.map((detail, didx) => (
                      <li key={didx} className="flex items-center gap-3 text-gray-700">
                        <span className="text-accent-cyan font-bold">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`h-64 bg-gradient-to-br ${idx === 0 ? 'from-accent-green' : 'from-accent-cyan'} to-transparent rounded-xl flex items-center justify-center text-6xl ${idx % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  {idx === 0 ? '⚙️' : '🔬'}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="buyback" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Battery Buyback Program</h2>
          <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            We offer competitive pricing for used NextGen batteries and compatible systems. Our buyback program makes it easy to upgrade while supporting the circular economy.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {buybackProgram.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-slate-800 rounded-lg border border-accent-green/30 hover:border-accent-green/80 transition text-center"
              >
                <div className="text-4xl mb-4">{['🔍', '💰', '📍', '♻️'][idx]}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-2xl transition"
            >
              Participate in Buyback Program
            </Link>
          </div>
        </div>
      </section>

      <section id="esg" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Our ESG Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Environmental', items: ['Carbon neutral operations', '100% renewable energy', 'Zero waste target'] },
              { title: 'Social', items: ['Fair labor practices', 'Community programs', 'Skills development'] },
              { title: 'Governance', items: ['Transparent reporting', 'Ethical practices', 'Stakeholder engagement'] }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 transition"
              >
                <h3 className="text-2xl font-bold text-slate-950 mb-6">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center gap-3 text-gray-700">
                      <span className="text-accent-green text-lg">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}



