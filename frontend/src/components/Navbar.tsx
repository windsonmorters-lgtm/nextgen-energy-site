import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Main navigation items - flat structure, no dropdowns
const mainLinks = [
  { label: 'Products', path: '/products', icon: '🔋' },
  { label: 'Appliance', path: '/appliance', icon: '📺' },
  { label: 'Spare Parts', path: '/spare-parts', icon: '🔧' },
  { label: 'EV-Services', path: '/e-services', icon: '💻' },
  { label: 'Solutions', path: '/solutions', icon: '⚡' },
  { label: 'About', path: '/about', icon: '🏢' },
  { label: 'Careers', path: '/career', icon: '💼' },
  { label: 'Support', path: '/customer-support', icon: '🎧' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Bar - Logo, Search, Contact */}
      <nav className="bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto pr-2 sm:pr-4 pl-0">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            {/* Logo - Extreme left edge */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 -ml-6">
              <img 
                src="/logoo.png" 
                alt="NAXEN EXIM INDIA" 
                className="h-14 w-auto object-contain rounded-lg"
              />
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
                <span className="text-sm">+91 7625888880</span>
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

      {/* Navigation Bar - Enhanced Visibility */}
      <nav className="hidden lg:block bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-14 gap-2">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-200 font-semibold text-base tracking-wide ${
                  isActive(link.path) 
                    ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 shadow-lg shadow-accent-green/30 scale-105' 
                    : 'text-gray-200 hover:bg-slate-800 hover:text-white hover:scale-105'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

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

            {/* Mobile Navigation Links */}
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase font-semibold mb-4">Menu</p>
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-lg font-semibold py-3 px-3 rounded-xl transition-all ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950'
                      : 'text-white hover:bg-slate-800 hover:text-accent-green'
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
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
