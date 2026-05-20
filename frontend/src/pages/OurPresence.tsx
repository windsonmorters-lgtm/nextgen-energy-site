import { motion } from 'framer-motion'
import { MapPin, Building2, Users, Globe, Phone, Mail } from 'lucide-react'

export default function OurPresence() {
  const states = [
    { name: 'Delhi NCR', cities: ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad', 'Greater Noida'], type: 'Headquarters' },
    { name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Prayagraj', 'Bareilly', 'Aligarh', 'Gorakhpur'], type: 'Manufacturing' },
    { name: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Darbhanga', 'Muzaffarpur', 'Purnia'], type: 'Sales Office' },
    { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'], type: 'Regional Office' },
    { name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'], type: 'Sales Office' },
    { name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'], type: 'Regional Office' },
    { name: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali'], type: 'Sales Office' },
    { name: 'Haryana', cities: ['Chandigarh', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Rohtak'], type: 'Manufacturing' },
    { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane'], type: 'Regional Office' },
    { name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Kharagpur'], type: 'Sales Office' },
    { name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'], type: 'Regional Office' },
    { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy'], type: 'Sales Office' },
    { name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'], type: 'Sales Office' },
    { name: 'Kerala', cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'], type: 'Sales Office' },
    { name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur'], type: 'Sales Office' },
  ]

  const stats = [
    { value: '15+', label: 'States Covered' },
    { value: '100+', label: 'Cities Present' },
    { value: '50+', label: 'Service Centers' },
    { value: '500+', label: 'Partner Dealers' },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-green/20 rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-accent-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Presence</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Naxen Exim India Energy has a strong presence across India with manufacturing units, 
              regional offices, and an extensive dealer network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-accent-cyan mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Corporate Headquarters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white rounded-xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Head Office</h3>
                  <p className="text-accent-cyan font-semibold">Delhi NCR</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                  <span>Plot No. 123, Sector 63, Noida, Uttar Pradesh - 201301</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-green" />
                  <span>+91 +91 7625888880</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-green" />
                  <span>info@Naxen Exim Indiaenergy.com</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white rounded-xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Manufacturing Unit</h3>
                  <p className="text-accent-cyan font-semibold">Greater Noida</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span>Plot No. 456, Site C, Surajpur Industrial Area, Greater Noida - 201306</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                  <span>+91 0120-4567890</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                  <span>production@Naxen Exim Indiaenergy.com</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* State-wise Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">State-wise Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our network spans across major states in India with dedicated teams 
              serving each region efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-green/50 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-950">{state.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    state.type === 'Headquarters' ? 'bg-purple-100 text-purple-700' :
                    state.type === 'Manufacturing' ? 'bg-blue-100 text-blue-700' :
                    state.type === 'Regional Office' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {state.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {state.cities.map((city, cidx) => (
                    <span
                      key={cidx}
                      className="px-2 py-1 bg-white text-slate-700 rounded text-sm border border-slate-200"
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

      {/* Dealer Network */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Dealer Network</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Become a part of India's fastest-growing lithium battery network. 
                We offer attractive partnership opportunities for dealers and distributors 
                across all major cities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Comprehensive product training and support',
                  'Marketing and promotional assistance',
                  'Competitive margins and incentives',
                  'Priority access to new products',
                  'Dedicated relationship manager',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-accent-green rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:partnerships@Naxen Exim Indiaenergy.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-slate-950 font-bold rounded-lg hover:bg-accent-green/80 transition"
              >
                Become a Partner
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Users className="w-8 h-8 text-accent-green mx-auto mb-2" />
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-gray-400">Authorized Dealers</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Building2 className="w-8 h-8 text-accent-cyan mx-auto mb-2" />
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-gray-400">Service Centers</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-sm text-gray-400">Cities Covered</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Globe className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm text-gray-400">States Present</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
