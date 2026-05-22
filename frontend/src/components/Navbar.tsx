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
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img 
                src="/logoo.png" 
                alt="NAXEN EXIM INDIA" 
                className="h-10 sm:h-12 w-auto object-contain"
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
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden text-gray-200 p-2 hover:bg-slate-800 rounded-lg transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              {/* Desktop Actions */}
              <a href="tel:+91-7625888880" className="hidden lg:flex items-center gap-2 text-gray-300 hover:text-accent-green transition">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7625888880</span>
              </a>
              <Link to="/our-presence" className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-accent-green transition">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Our Presence</span>
              </Link>
              <Link
                to="/contact"
                className="hidden sm:flex px-4 py-2 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 text-sm font-semibold rounded-lg hover:shadow-lg transition"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Bar - Enhanced Visibility */}
      {/* Desktop Navigation Bar */}
      <nav className="hidden lg:block bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-12 gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                  isActive(link.path) 
                    ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 shadow-md' 
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="text-base">{link.icon}</span>
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
            <div className="p-3">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-base font-semibold py-2.5 px-3 rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950'
                      : 'text-white hover:bg-slate-800 hover:text-accent-green'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="p-3 border-t border-slate-800">
              <a href="tel:+91-7625888880" className="flex items-center gap-2 text-gray-300 py-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7625888880</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-2 py-2.5 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg text-center text-sm"
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
