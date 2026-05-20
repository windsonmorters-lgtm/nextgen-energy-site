import { motion } from 'framer-motion'
import { Camera, Users, Award, Building2, Factory, Leaf } from 'lucide-react'
import { useState } from 'react'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All', icon: Camera },
    { id: 'facility', label: 'Manufacturing', icon: Factory },
    { id: 'team', label: 'Our Team', icon: Users },
    { id: 'events', label: 'Events', icon: Award },
    { id: 'products', label: 'Products', icon: Building2 },
  ]

  const galleryItems = [
    { id: 1, category: 'facility', title: 'Automated Production Line', location: 'Manufacturing Unit' },
    { id: 2, category: 'facility', title: 'Quality Testing Lab', location: 'R&D Center' },
    { id: 3, category: 'facility', title: 'Battery Assembly Unit', location: 'Main Facility' },
    { id: 4, category: 'team', title: 'Leadership Team', location: 'Corporate Office' },
    { id: 5, category: 'team', title: 'R&D Department', location: 'Innovation Center' },
    { id: 6, category: 'team', title: 'Production Team', location: 'Manufacturing Unit' },
    { id: 7, category: 'events', title: 'Product Launch Event', location: '2024' },
    { id: 8, category: 'events', title: 'Industry Expo Participation', location: 'EV India 2024' },
    { id: 9, category: 'events', title: 'Award Ceremony', location: 'Excellence in Manufacturing' },
    { id: 10, category: 'products', title: 'E-Scooter Battery Range', location: '48V-74V Series' },
    { id: 11, category: 'products', title: 'Solar Storage Solutions', location: 'ESS Series' },
    { id: 12, category: 'products', title: 'Graphene Battery Pack', location: 'Advanced Series' },
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-green/20 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-accent-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a closer look at our workplace culture, team activities, and key moments 
              that shape how we work and grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition ${
                  activeCategory === cat.id
                    ? 'bg-accent-green text-slate-950'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative aspect-square bg-slate-200 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Placeholder gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  item.category === 'facility' ? 'from-blue-500/20 to-purple-500/20' :
                  item.category === 'team' ? 'from-green-500/20 to-teal-500/20' :
                  item.category === 'events' ? 'from-orange-500/20 to-red-500/20' :
                  'from-cyan-500/20 to-blue-500/20'
                }`} />
                
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.category === 'facility' && <Factory className="w-20 h-20 text-white/40" />}
                  {item.category === 'team' && <Users className="w-20 h-20 text-white/40" />}
                  {item.category === 'events' && <Award className="w-20 h-20 text-white/40" />}
                  {item.category === 'products' && <Building2 className="w-20 h-20 text-white/40" />}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-accent-cyan">{item.location}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-slate-950 rounded-full text-xs font-semibold uppercase">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Inside Our Company Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Inside Our Company</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From everyday operations to special events, these glimpses reflect our commitment, 
              collaboration, and professional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aspect-video bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 rounded-2xl flex items-center justify-center"
            >
              <div className="text-center">
                <Factory className="w-24 h-24 text-accent-green/40 mx-auto mb-4" />
                <p className="text-slate-600 font-semibold">Manufacturing Excellence</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold text-slate-950 mb-4">Our Workplace Culture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Naxen Exim India Energy, we believe in fostering a culture of innovation, collaboration, 
                and continuous learning. Our state-of-the-art facilities and dedicated teams work 
                together to deliver excellence in every battery we produce.
              </p>
              <ul className="space-y-3">
                {[
                  'Modern manufacturing facilities with advanced automation',
                  'Dedicated R&D center for continuous innovation',
                  'Collaborative workspace encouraging teamwork',
                  'Regular training and skill development programs',
                  'Sustainable practices throughout operations',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Leaf className="w-5 h-5 text-accent-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Follow Us CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-gray-400 mb-8">
            Follow our social media pages for the latest updates, behind-the-scenes content, 
            and company news.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'YouTube'].map((social) => (
              <button
                key={social}
                className="px-6 py-3 bg-white/10 rounded-lg font-semibold hover:bg-accent-green hover:text-slate-950 transition"
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
