import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const menuItems = [
  {
    label: 'Products',
    path: '/products',
    submenu: [
      { label: 'EV Battery Packs', path: '/products' },
      { label: 'Energy Storage Systems', path: '/products' },
      { label: 'Smart Chargers', path: '/products' },
      { label: 'Graphene Solutions', path: '/products' },
    ],
  },
  {
    label: 'Solutions',
    path: '/solutions',
    submenu: [
      { label: 'Electric Vehicle', path: '/solutions#electric-vehicle' },
      { label: 'Solar Energy Storage', path: '/solutions#solar-energy' },
      { label: 'Portable Lighting', path: '/solutions#portable-lighting' },
      { label: 'Consumer Electronics', path: '/solutions#consumer-electronics' },
    ],
  },
  {
    label: 'Media',
    path: '/blog',
    submenu: [
      { label: 'News & Press', path: '/blog' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Career', path: '/career' },
    ],
  },
  {
    label: 'Sustainability',
    path: '/sustainability',
    submenu: [
      { label: 'Our Recycling Program', path: '/sustainability#recycling' },
      { label: 'Battery Buyback', path: '/sustainability#buyback' },
      { label: 'ESG Commitment', path: '/sustainability#esg' },
    ],
  },
  {
    label: 'About',
    path: '/about',
    submenu: [
      { label: 'Our Story', path: '/about#story' },
      { label: 'Leadership', path: '/about#leadership' },
      { label: 'Certifications', path: '/about#certifications' },
    ],
  },
  {
    label: 'Investor Relations',
    path: '/investor-relations',
    submenu: [
      { label: 'Financial Reports', path: '/investor-relations#reports' },
      { label: 'Stock Updates', path: '/investor-relations' },
      { label: 'Governance', path: '/investor-relations#governance' },
    ],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-accent-cyan/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center h-16"
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-green to-accent-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Naxen Exim India</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 transition ${
                    isActive(item.path) ? 'text-accent-green' : 'text-gray-200 hover:text-accent-green'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                </Link>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={activeDropdown === item.label ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  className={`absolute top-full left-0 mt-0 bg-slate-900 border border-accent-cyan/20 rounded-lg shadow-xl backdrop-blur-md w-52 ${
                    activeDropdown === item.label ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                >
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      to={subitem.path}
                      className="block px-4 py-2 text-gray-300 hover:text-accent-green hover:bg-slate-800/50 transition first:rounded-t-lg last:rounded-b-lg"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            ))}
            <Link
              to="/blog"
              className={`transition ${isActive('/blog') ? 'text-accent-green' : 'text-gray-200 hover:text-accent-green'}`}
            >
              Media
            </Link>
            <Link
              to="/our-presence"
              className={`transition ${isActive('/our-presence') ? 'text-accent-green' : 'text-gray-200 hover:text-accent-green'}`}
            >
              Our Presence
            </Link>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-green/50 transition"
            >
              Get a Quote
            </Link>
          </motion.div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden pb-4 border-t border-accent-cyan/20"
          >
            {menuItems.map((item) => (
              <motion.div key={item.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2">
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:text-accent-green font-semibold"
                >
                  {item.label}
                </Link>
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.label}
                    to={subitem.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-8 py-1 text-gray-400 hover:text-accent-green text-sm"
                  >
                    {subitem.label}
                  </Link>
                ))}
              </motion.div>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-200 hover:text-accent-green font-semibold"
            >
              News
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-4 py-2 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-semibold rounded-lg text-center"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
