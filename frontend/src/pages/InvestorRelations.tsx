import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, TrendingUp, Users, Award, Download } from 'lucide-react'

export default function InvestorRelations() {
  const documents = [
    { title: 'Half-Yearly Financial Results Q2 FY25', date: 'Oct 2024', type: 'PDF', size: '2.4 MB' },
    { title: 'Earnings Call Transcript Q2 FY25', date: 'Oct 2024', type: 'PDF', size: '1.8 MB' },
    { title: 'Shareholding Pattern Report', date: 'Sep 2024', type: 'PDF', size: '0.9 MB' },
    { title: 'Corporate Governance Guidelines', date: 'Aug 2024', type: 'PDF', size: '1.2 MB' },
    { title: 'Annual Report FY24', date: 'Jul 2024', type: 'PDF', size: '5.6 MB' },
    { title: 'Board of Directors Profile', date: 'Jul 2024', type: 'PDF', size: '2.1 MB' },
  ]

  const stockInfo = {
    symbol: 'Naxen Exim India',
    exchange: 'NSE SME',
    currentPrice: '₹425.50',
    change: '+8.5%',
    marketCap: '₹2,140 Cr',
    yearHigh: '₹485.00',
    yearLow: '₹195.50',
    pe: '24.8x'
  }

  const highlights = [
    { title: 'Revenue Growth', value: '156%', period: 'YoY' },
    { title: 'EBITDA Margin', value: '32%', period: 'Q2 FY25' },
    { title: 'Production Capacity', value: '12.5K', period: 'Packs/Month' },
    { title: 'OEM Partners', value: '26+', period: 'Active' }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16">
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Investor Relations</h1>
          <p className="text-xl text-gray-300">Transparent financial reporting and shareholder communication (NSE SME)</p>
        </motion.div>
      </section>

      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-8 gap-6 text-center">
            <div>
              <p className="text-gray-600 text-sm">Symbol</p>
              <p className="text-2xl font-bold text-slate-950">{stockInfo.symbol}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Exchange</p>
              <p className="text-2xl font-bold text-slate-950">{stockInfo.exchange}</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <p className="text-gray-600 text-sm">Price</p>
              <p className="text-2xl font-bold text-slate-950">{stockInfo.currentPrice}</p>
            </motion.div>
            <div>
              <p className="text-gray-600 text-sm">Change</p>
              <p className="text-2xl font-bold text-accent-green">{stockInfo.change}</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <p className="text-gray-600 text-sm">Market Cap</p>
              <p className="text-2xl font-bold text-slate-950">{stockInfo.marketCap}</p>
            </motion.div>
            <div>
              <p className="text-gray-600 text-sm">Year High</p>
              <p className="text-lg font-bold text-slate-950">{stockInfo.yearHigh}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Year Low</p>
              <p className="text-lg font-bold text-slate-950">{stockInfo.yearLow}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">P/E Ratio</p>
              <p className="text-lg font-bold text-slate-950">{stockInfo.pe}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reports" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Q2 FY25 Highlights</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 text-center"
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent-green" />
                <div className="text-4xl font-bold text-slate-950 mb-2">{item.value}</div>
                <p className="text-gray-600">{item.title}</p>
                <p className="text-sm text-gray-500 mt-2">({item.period})</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Financial Documents & Reports</h2>
          <div className="space-y-4">
            {documents.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-accent-green/50 hover:shadow-lg transition flex items-center justify-between group"
              >
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4">
                  <FileText className="w-10 h-10 text-accent-green flex-shrink-0" />
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <h4 className="font-semibold text-slate-950">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.date} • {doc.size}</p>
                  </motion.div>
                </motion.div>
                <button className="px-6 py-2 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition flex items-center gap-2">
                  <Download size={18} />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="governance" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Board of Directors</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Mr. Rajesh Kumar', title: 'Chairman & MD', icon: '👨‍💼' },
              { name: 'Ms. Priya Singh', title: 'CFO & Director', icon: '👩‍💼' },
              { name: 'Mr. Amit Patel', title: 'CTO & Director', icon: '👨‍💼' },
              { name: 'Mr. Vikram Sharma', title: 'Independent Director', icon: '👨‍💼' }
            ].map((director, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 text-center"
              >
                <div className="text-6xl mb-4">{director.icon}</div>
                <h4 className="font-bold text-slate-950">{director.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{director.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Corporate Governance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Audit Committee', items: ['Financial oversight', 'Risk management', 'Compliance monitoring'] },
              { title: 'Remuneration Committee', items: ['Compensation policy', 'Performance incentives', 'Board evaluation'] },
              { title: 'Stakeholder Committee', items: ['Shareholder grievances', 'ESG initiatives', 'Community engagement'] }
            ].map((committee, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-accent-green/50"
              >
                <Award className="w-12 h-12 text-accent-green mb-4" />
                <h3 className="text-2xl font-bold text-slate-950 mb-6">{committee.title}</h3>
                <ul className="space-y-3">
                  {committee.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center gap-3 text-gray-700">
                      <span className="text-accent-cyan">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-slate-950" />
          <h2 className="text-4xl font-bold text-slate-950 mb-4">Investor Relations Team</h2>
          <p className="text-lg text-slate-900 mb-8">Have questions for our IR team?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:ir@Naxen Exim India.in" className="px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-lg transition">
              ir@Naxen Exim India.in
            </a>
            <Link to="/contact" className="px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-lg transition">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
