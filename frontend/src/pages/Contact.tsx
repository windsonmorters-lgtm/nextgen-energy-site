import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Loader2 } from 'lucide-react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyType: 'oem',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus('idle')
    try {
      await axios.post('/api/contacts', formData)
      setFormData({ name: '', email: '', phone: '', company: '', companyType: 'oem', message: '' })
      setSubmitStatus('success')
    } catch {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const offices = [
    {
      city: 'Corporate Office',
      location: 'Haryana',
      address: 'Ellenabad, Sirsa, Haryana 125102, India',
      phone: '+91-76258-88880',
      email: 'narottam@naxenindia.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      city: 'Manufacturing Plant',
      location: 'Haryana',
      address: 'Ellenabad, Sirsa, Haryana 125102, India',
      phone: '+91-76258-88880',
      email: 'narottam@naxenindia.com',
      hours: 'Mon-Fri: 8:00 AM - 8:00 PM'
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact & Partnership</h1>
          <p className="text-xl text-gray-300">Connect with our team for business inquiries and partnerships</p>
        </div>
      </section>

      {/* Split Screen Contact Portal */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Office & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-slate-950 mb-8">Get In Touch</h2>

              {/* Office Locations */}
              <div className="space-y-8 mb-12">
                {offices.map((office, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-accent-green/50 transition"
                  >
                    <h3 className="text-2xl font-bold text-slate-950 mb-4">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-700">{office.location}</p>
                          <p className="text-sm text-gray-600">{office.address}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-700">{office.phone}</p>
                          <button className="text-sm text-accent-green hover:underline flex items-center gap-1 mt-1">
                            <MessageCircle size={14} />
                            WhatsApp
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Mail className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-700">{office.email}</p>
                          <p className="text-sm text-gray-600">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Connect on WhatsApp
                </button>
                <button className="w-full px-6 py-3 bg-slate-950 text-white font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Us
                </button>
              </div>
            </motion.div>

            {/* Right Side - B2B Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white rounded-xl border-2 border-slate-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-950 mb-6">B2B Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">Corporate Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@company.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-76258-88880"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20"
                    required
                  />
                </div>

                {/* Company Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">Company Type</label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20"
                  >
                    <option value="oem">OEM Manufacturer</option>
                    <option value="distributor">Distributor/Reseller</option>
                    <option value="retailer">Retail Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Volume Requirements */}
                <div>
                  <label className="block text-sm font-semibold text-slate-950 mb-2">Volume Requirements & Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, volume needs, and partnership goals..."
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold rounded-lg hover:shadow-lg transition disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-sm text-accent-green text-center font-medium">
                    Thank you! We will contact you within 24 business hours.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-600 text-center">
                    Something went wrong. Please try again or email corporate@Naxen Exim India.in
                  </p>
                )}
                {submitStatus === 'idle' && (
                  <p className="text-xs text-gray-600 text-center">
                    We'll review your inquiry and contact you within 24 business hours
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner With Naxen Exim India */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-950">Why Partner With Naxen Exim India?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Quality Assured', desc: 'ISO 9001:2015 & AIS 156 certified products', icon: '✅' },
              { title: 'Competitive Pricing', desc: 'Volume discounts and flexible payment terms', icon: '💰' },
              { title: 'Technical Support', desc: '24/7 customer & technical support team', icon: '🔧' },
              { title: 'Fast Delivery', desc: 'Nationwide shipping within 48-72 hours', icon: '🚚' }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-green/50 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Locations</h2>
          <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-accent-cyan/30 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-xl font-semibold mb-4">📍 Interactive Map</p>
              <p className="text-gray-400">Ellenabad, Sirsa, Haryana 125102</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
