import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-accent-cyan/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-green to-accent-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-white">NextGen</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
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
        <div className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-800">
          <div className="flex gap-3">
            <Phone size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white">+91 9876 543 210</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail size={20} className="text-accent-cyan flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">contact@nextgen.in</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400">Headquarters</p>
              <p className="text-white">Ghaziabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 NextGen Energy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-accent-green transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-cyan transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-green transition">
              <Facebook size={20} />
            </a>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
