import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, HelpCircle, FileText, MessageCircle, Headphones } from 'lucide-react'
import { useState } from 'react'

export default function CustomerSupport() {
  const [activeTab, setActiveTab] = useState('all')

  const supportCenters = [
    { state: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Darbhanga', 'Muzaffarpur'] },
    { state: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'] },
    { state: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain'] },
    { state: 'NCT of Delhi', cities: ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad'] },
    { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Prayagraj', 'Ghaziabad', 'Noida'] },
    { state: 'Haryana', cities: ['Chandigarh', 'Faridabad', 'Gurgaon', 'Panipat', 'Ambala'] },
    { state: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'] },
    { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer'] },
    { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'] },
    { state: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'] },
  ]

  const filteredCenters = activeTab === 'all' 
    ? supportCenters 
    : supportCenters.filter(c => c.state.toLowerCase().includes(activeTab.toLowerCase()))

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-green/20 rounded-full flex items-center justify-center">
              <Headphones className="w-10 h-10 text-accent-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Support</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help with your questions, technical issues, and product inquiries 
              for a seamless experience with Naxen Exim India Energy products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'Phone', content: '+91 +91 7625888880', subtext: 'Mon-Sat, 9AM-6PM IST' },
              { icon: Mail, title: 'Email', content: 'info@Naxen Exim Indiaenergy.com', subtext: 'Response within 24 hours' },
              { icon: MessageCircle, title: 'WhatsApp', content: '+91 76', subtext: 'Instant messaging support' },
              { icon: Clock, title: 'Working Hours', content: 'Mon-Sat: 9AM-6PM', subtext: 'Sunday: Closed' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-green/50 transition text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent-green" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-1">{item.title}</h3>
                <p className="text-accent-cyan font-semibold mb-1">{item.content}</p>
                <p className="text-sm text-gray-500">{item.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Centers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Support Centers Across India</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our authorized service centers are spread across multiple states to provide 
              quick and efficient support.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'Bihar', 'Gujarat', 'Madhya Pradesh', 'Delhi', 'Uttar Pradesh'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-accent-green text-slate-950'
                    : 'bg-white text-gray-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Centers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map((center, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent-green" />
                  <h3 className="text-xl font-bold text-slate-950">{center.state}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {center.cities.map((city, cidx) => (
                    <span
                      key={cidx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-accent-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is the warranty period for Naxen Exim India batteries?', a: 'Our lithium batteries come with a standard 3-year warranty, extendable up to 5 years with our premium care plan.' },
              { q: 'How do I claim warranty for my battery?', a: 'You can claim warranty by visiting any of our authorized service centers with your purchase invoice and warranty card. You can also initiate a claim through our customer support helpline.' },
              { q: 'What is the typical lifespan of a lithium battery?', a: 'Our lithium batteries are designed to last 2000+ charge cycles, which typically translates to 5-7 years of usage depending on your usage pattern.' },
              { q: 'Do you provide installation services?', a: 'Yes, we provide free installation at our authorized service centers. For bulk orders, we also offer on-site installation services.' },
              { q: 'How can I track my battery performance?', a: 'Our Smart BMS technology allows you to monitor battery health, charge status, and performance metrics through our mobile app or web dashboard.' },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200"
              >
                <h3 className="font-bold text-slate-950 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-green" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Still Need Help?</h2>
          <p className="text-lg text-slate-900 mb-8">
            Our support team is ready to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+9101204291595"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl transition"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <a
              href="mailto:info@Naxen Exim Indiaenergy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-950 text-slate-950 font-bold rounded-lg hover:bg-slate-950/10 transition"
            >
              <Mail size={20} />
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
