import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-accent-cyan/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Naxen Exim India" 
                className="h-16 w-auto object-contain rounded-lg"
              />
            </div>
            {/* Hindi Tagline */}
            <p className="text-lg sm:text-xl text-accent-green font-medium mb-2 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              एक शर्तिया इलाज
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              India's premier lithium-ion battery manufacturing platform powering sustainable mobility.
            </p>
            {/* Compliance Badges */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-slate-800 rounded border border-accent-green/30 text-xs">
                ISO 9001:2015
              </div>
              <div className="inline-block px-3 py-1 bg-slate-800 rounded border border-accent-cyan/30 text-xs ml-2">
                AIS 156
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-accent-green transition">EV Battery Packs</Link></li>
              <li><Link to="/products" className="hover:text-accent-green transition">Energy Storage Systems</Link></li>
              <li><Link to="/products" className="hover:text-accent-green transition">Smart Chargers</Link></li>
              <li><Link to="/products" className="hover:text-accent-green transition">Graphene Solutions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sustainability" className="hover:text-accent-cyan transition">Sustainability</Link></li>
              <li><Link to="/investor-relations" className="hover:text-accent-cyan transition">Investor Relations</Link></li>
              <li><Link to="/blog" className="hover:text-accent-cyan transition">News & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent-cyan transition">Partnerships</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent-green transition">About Us</Link></li>
              <li><Link to="/about#leadership" className="hover:text-accent-green transition">Leadership</Link></li>
              <li><Link to="/about#certifications" className="hover:text-accent-green transition">Certifications</Link></li>
              <li><Link to="/contact" className="hover:text-accent-green transition">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe for updates on battery innovations.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-3 py-2 bg-slate-900 border border-accent-cyan/30 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan"
              />
              <button className="px-3 py-2 bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 text-sm font-semibold rounded hover:shadow-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-slate-800">
          <div className="flex gap-3 items-start">
            <Phone size={18} className="text-accent-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white text-sm sm:text-base">+91 9876 543 210</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Mail size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white text-sm sm:text-base">contact@nextgen.in</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <MapPin size={18} className="text-accent-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400">Headquarters</p>
              <p className="text-white text-sm sm:text-base">Ghaziabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-500 order-3 sm:order-1">&copy; 2026 Naxen Exim India. All rights reserved.</p>
          <div className="flex gap-4 order-1 sm:order-2">
            <a href="#" className="text-gray-400 hover:text-accent-green transition p-1">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-cyan transition p-1">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-green transition p-1">
              <Facebook size={18} />
            </a>
          </div>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm order-2 sm:order-3">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-gray-500 hover:text-gray-300 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
