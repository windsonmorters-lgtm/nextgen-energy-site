import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Search, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Main categories like e-commerce sites (Amazon/Flipkart style)
const mainCategories = [
  {
    label: 'EV Batteries',
    path: '/products',
    icon: '🔋',
    subcategories: ['E-Scooter', 'E-Rickshaw', 'E-Cycle', 'E-Bike'],
  },
  {
    label: 'Solar Solutions',
    path: '/solutions#solar-energy',
    icon: '☀️',
    subcategories: ['Home Solar', 'Commercial', 'Industrial'],
  },
  {
    label: 'Energy Storage',
    path: '/products',
    icon: '⚡',
    subcategories: ['ESS', 'Telecom', 'Grid Storage'],
  },
  {
    label: 'Custom Solutions',
    path: '/solutions#consumer-electronics',
    icon: '⚙️',
    subcategories: ['Medical', 'Robotics', 'IoT Devices'],
  },
]

// Secondary menu items
const secondaryLinks = [
  { label: 'About', path: '/about' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Media', path: '/blog' },
  { label: 'Careers', path: '/career' },
  { label: 'Support', path: '/customer-support' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Bar - Logo, Search, Contact */}
      <nav className="bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Naxen Exim India" 
                className="w-9 h-9 object-contain rounded-lg bg-white/10"
              />
              <span className="hidden sm:block text-lg font-bold text-white">Naxen Exim</span>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for batteries, solar solutions..."
                  className="w-full px-4 py-2 pl-10 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-green"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="tel:+911204291595" className="hidden lg:flex items-center gap-2 text-gray-300 hover:text-accent-green transition">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0120-4291595</span>
              </a>
              <Link to="/our-presence" className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-accent-green transition">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Our Presence</span>
              </Link>
              <Link
                to="/contact"
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 text-sm font-semibold rounded-lg hover:shadow-lg transition"
              >
                <span className="hidden sm:inline">Get Quote</span>
                <span className="sm:hidden">Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-200 p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Category Navigation Bar - E-commerce Style */}
      <nav className="hidden lg:block bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-12 gap-1">
            {/* All Categories Button */}
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center gap-2 px-4 py-2 bg-accent-green/10 text-accent-green rounded-lg hover:bg-accent-green/20 transition font-medium"
            >
              <Menu className="w-4 h-4" />
              <span>All Categories</span>
            </button>

            <div className="w-px h-6 bg-slate-700 mx-2" />

            {/* Main Categories */}
            {mainCategories.map((category) => (
              <div
                key={category.label}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.label)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to={category.path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition font-medium text-sm ${
                    isActive(category.path) 
                      ? 'bg-accent-green/20 text-accent-green' 
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                  <ChevronDown className={`w-3 h-3 transition ${activeCategory === category.label ? 'rotate-180' : ''}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeCategory === category.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50"
                    >
                      <div className="p-3">
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-2 px-2">Subcategories</p>
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            to={category.path}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-accent-green hover:bg-slate-700/50 rounded-lg transition"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="w-px h-6 bg-slate-700 mx-2" />

            {/* Secondary Links */}
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition text-sm font-medium ${
                  isActive(link.path) 
                    ? 'text-accent-green' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* All Categories Sidebar Overlay */}
      <AnimatePresence>
        {showAllCategories && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllCategories(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:block hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-[104px] bottom-0 w-72 bg-slate-900 border-r border-slate-800 z-50 overflow-y-auto lg:block hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-4">All Categories</h3>
                {mainCategories.map((category) => (
                  <div key={category.label} className="mb-4">
                    <Link
                      to={category.path}
                      onClick={() => setShowAllCategories(false)}
                      className="flex items-center gap-2 text-white font-medium mb-2 hover:text-accent-green transition"
                    >
                      <span className="text-xl">{category.icon}</span>
                      {category.label}
                    </Link>
                    <div className="ml-7 space-y-1">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          to={category.path}
                          onClick={() => setShowAllCategories(false)}
                          className="block text-sm text-gray-400 hover:text-accent-green transition"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t border-slate-800 my-4" />
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">More</h4>
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setShowAllCategories(false)}
                    className="block py-2 text-gray-300 hover:text-accent-green transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800 max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            {/* Mobile Search */}
            <div className="p-4 border-b border-slate-800">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-green"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Mobile Categories */}
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Categories</p>
              {mainCategories.map((category) => (
                <div key={category.label} className="mb-3">
                  <Link
                    to={category.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-white font-medium py-2 hover:text-accent-green transition"
                  >
                    <span className="text-lg">{category.icon}</span>
                    {category.label}
                  </Link>
                  <div className="ml-8 space-y-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        to={category.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-400 py-1 hover:text-accent-green transition"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800" />

            {/* Mobile Secondary Links */}
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Quick Links</p>
              {secondaryLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-300 hover:text-accent-green transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-slate-800">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
