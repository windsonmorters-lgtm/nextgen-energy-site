import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Zap, CheckCircle, Phone, Mail } from 'lucide-react'

export default function Products() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Devi Batteries</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium quality batteries for all your power needs
          </p>
        </div>
      </section>

      {/* Single Product Display */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200"
          >
            {/* Product Image */}
            <div className="bg-white p-8 flex items-center justify-center">
              <img
                src="/DEVI BATTERIES.png"
                alt="Devi Batteries"
                className="max-h-64 w-auto object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-950 mb-4">Devi Batteries</h2>
              <p className="text-gray-600 mb-6 text-lg">
                High-performance lithium-ion batteries designed for reliability and long-lasting power. 
                Perfect for various applications including electric vehicles, solar systems, and energy storage.
              </p>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Long battery life',
                  'Fast charging capability',
                  'High energy density',
                  'Low self-discharge',
                  'Maintenance-free',
                  'Environmentally friendly',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent-green" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-950 mb-4">Interested in Devi Batteries?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us for pricing, availability, and custom requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+911204291595"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg hover:shadow-lg transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call: 0120-4291595
                  </a>
                  <a
                    href="mailto:info@nextgen.in"
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan/10 transition"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Download Datasheet */}
              <button className="w-full px-6 py-4 bg-slate-950 text-accent-green font-semibold rounded-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Download Product Datasheet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-slate-950" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Need Custom Battery Solutions?</h2>
          <p className="text-lg text-slate-900 mb-8 max-w-2xl mx-auto">
            We can customize Devi Batteries for your specific voltage and capacity requirements
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl transition"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
