import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Filter, Phone, MessageCircle, Battery, Zap, Star } from 'lucide-react'

// Product data - Devi Batteries variants
const products = [
  {
    id: 1,
    name: 'Devi Battery 12V 7Ah',
    sku: 'DB-12V7AH',
    price: 1250,
    mrp: 1450,
    image: '/DEVI BATTERIES.png',
    category: 'SMF Battery',
    tags: ['Best Seller', 'In Stock'],
    specs: { voltage: '12V', capacity: '7Ah', warranty: '1 Year' },
    description: 'Sealed Maintenance Free battery for UPS, inverters, and emergency lighting systems.'
  },
  {
    id: 2,
    name: 'Devi Battery 12V 12Ah',
    sku: 'DB-12V12AH',
    price: 1850,
    mrp: 2100,
    image: '/DEVI BATTERIES.png',
    category: 'SMF Battery',
    tags: ['Popular', 'In Stock'],
    specs: { voltage: '12V', capacity: '12Ah', warranty: '1 Year' },
    description: 'High-capacity SMF battery perfect for e-bikes, scooters, and solar applications.'
  },
  {
    id: 3,
    name: 'Devi Battery 12V 26Ah',
    sku: 'DB-12V26AH',
    price: 3250,
    mrp: 3800,
    image: '/DEVI BATTERIES.png',
    category: 'Tubular Battery',
    tags: ['New Arrival', 'In Stock'],
    specs: { voltage: '12V', capacity: '26Ah', warranty: '2 Years' },
    description: 'Deep cycle tubular battery for solar power systems and electric vehicles.'
  },
  {
    id: 4,
    name: 'Devi Battery 12V 42Ah',
    sku: 'DB-12V42AH',
    price: 4850,
    mrp: 5600,
    image: '/DEVI BATTERIES.png',
    category: 'Tubular Battery',
    tags: ['Premium', 'In Stock'],
    specs: { voltage: '12V', capacity: '42Ah', warranty: '2 Years' },
    description: 'Heavy-duty battery for industrial applications, forklifts, and large UPS systems.'
  },
  {
    id: 5,
    name: 'Devi E-Rickshaw Battery',
    sku: 'DB-ERICKSHAW-12V',
    price: 8500,
    mrp: 9800,
    image: '/DEVI BATTERIES.png',
    category: 'EV Battery',
    tags: ['Hot Selling', 'Limited Stock'],
    specs: { voltage: '12V', capacity: '100Ah', warranty: '18 Months' },
    description: 'Specially designed for e-rickshaws with high discharge rate and long life.'
  },
  {
    id: 6,
    name: 'Devi Solar Battery 150Ah',
    sku: 'DB-SOLAR-150AH',
    price: 12500,
    mrp: 14500,
    image: '/DEVI BATTERIES.png',
    category: 'Solar Battery',
    tags: ['Best Value', 'In Stock'],
    specs: { voltage: '12V', capacity: '150Ah', warranty: '3 Years' },
    description: 'Deep discharge solar battery with excellent charge acceptance and low self-discharge.'
  }
]

// Categories
const categories = [
  { id: 'all', name: 'All Products', count: 6 },
  { id: 'SMF Battery', name: 'SMF Batteries', count: 2 },
  { id: 'Tubular Battery', name: 'Tubular Batteries', count: 2 },
  { id: 'EV Battery', name: 'EV Batteries', count: 1 },
  { id: 'Solar Battery', name: 'Solar Batteries', count: 1 }
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId])
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Battery className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Devi Batteries</h1>
                <p className="text-sm text-gray-500">Premium Power Solutions</p>
              </div>
            </div>

            {/* Search & Cart */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-0 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                />
              </div>
              <button className="relative p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className={`ml-2 text-xs ${selectedCategory === category.id ? 'text-green-100' : 'text-gray-400'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-50 p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tag === 'Best Seller' ? 'bg-orange-500 text-white' :
                        tag === 'Hot Selling' ? 'bg-red-500 text-white' :
                        tag === 'New Arrival' ? 'bg-blue-500 text-white' :
                        tag === 'Limited Stock' ? 'bg-yellow-500 text-white' :
                        'bg-green-500 text-white'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Discount Badge */}
                {product.mrp > product.price && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    {Math.round((1 - product.price / product.mrp) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</p>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{product.name}</h3>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>

                {/* Specs */}
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">{product.specs.voltage}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">{product.specs.capacity}</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded">{product.specs.warranty}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                  <span className="text-sm text-gray-400 line-through">{formatPrice(product.mrp)}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={cart.includes(product.id)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      cart.includes(product.id)
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:shadow-lg hover:scale-[1.02]'
                    }`}
                  >
                    {cart.includes(product.id) ? 'Added ✓' : 'Add to Cart'}
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-gray-100">
                  <a
                    href="tel:+91-7625888880"
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/91-7625888880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-green-500 to-cyan-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Need Bulk Orders or Custom Specifications?</h3>
              <p className="text-green-50">Contact us for wholesale pricing and customized battery solutions</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+91-7625888880"
                className="px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Call Now
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-all"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Fast Delivery', desc: 'All India shipping' },
              { icon: Star, title: 'Genuine Products', desc: '100% authentic' },
              { icon: Battery, title: 'Long Warranty', desc: 'Up to 3 years' },
              { icon: ShoppingCart, title: 'Bulk Orders', desc: 'Wholesale pricing' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

