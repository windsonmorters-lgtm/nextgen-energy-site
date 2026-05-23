import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, ShoppingCart, Filter, Phone, Mail, Heart, Battery, Armchair, Car,
  Truck, Shield, RotateCcw, X, Plus, Minus, Trash2, CreditCard, 
  MapPin, User, Star, Package, CheckCircle, ChevronLeft, ArrowRight
} from 'lucide-react'

// Extended Product data with more details
const products = [
  {
    id: 1,
    name: 'Baby Tricycle with Parent Handle',
    sku: 'TRI-001',
    price: 1850,
    mrp: 2450,
    image: '/product-placeholder.png',
    category: 'Tricycles',
    tags: ['Best Seller', 'In Stock'],
    rating: 4.5,
    reviews: 128,
    description: 'Sturdy baby tricycle with adjustable parent handle, safety belt, and storage basket. Perfect for kids aged 2-5 years.',
    features: ['Parent Control Handle', 'Safety Belt', 'Storage Basket', 'Adjustable Seat'],
    stock: 15
  },
  {
    id: 2,
    name: 'Kids Electric Ride-On Jeep',
    sku: 'JEEP-002',
    price: 8500,
    mrp: 12000,
    image: '/product-placeholder.png',
    category: 'Ride-Ons',
    tags: ['Hot Selling', 'Limited Stock'],
    rating: 4.8,
    reviews: 89,
    description: 'Battery operated kids jeep with remote control, LED lights, music, and realistic design. Ages 3-8.',
    features: ['Remote Control', 'LED Lights', 'Music Player', '2 Speed Modes'],
    stock: 8
  },
  {
    id: 3,
    name: 'Baby Walker with Music',
    sku: 'WLK-003',
    price: 1250,
    mrp: 1650,
    image: '/product-placeholder.png',
    category: 'Walkers',
    tags: ['Popular', 'In Stock'],
    rating: 4.3,
    reviews: 256,
    description: 'Adjustable height baby walker with musical toys, anti-fall brakes, and cushioned seat.',
    features: ['Musical Toys', 'Anti-fall Brakes', 'Adjustable Height', 'Cushioned Seat'],
    stock: 25
  },
  {
    id: 4,
    name: 'Kids Garden Swing Set',
    sku: 'SWG-004',
    price: 3250,
    mrp: 4500,
    image: '/product-placeholder.png',
    category: 'Swings',
    tags: ['New Arrival', 'In Stock'],
    rating: 4.6,
    reviews: 67,
    description: 'Outdoor garden swing with safety harness, sturdy frame, and weather-resistant coating.',
    features: ['Safety Harness', 'Sturdy Frame', 'Weather Resistant', 'Easy Assembly'],
    stock: 12
  },
  {
    id: 5,
    name: 'Children Study Table Chair',
    sku: 'TBL-005',
    price: 2450,
    mrp: 3200,
    image: '/product-placeholder.png',
    category: 'Tables',
    tags: ['In Stock'],
    rating: 4.4,
    reviews: 145,
    description: 'Ergonomic study table and chair set with adjustable height, storage drawer, and book holder.',
    features: ['Adjustable Height', 'Storage Drawer', 'Book Holder', 'Ergonomic Design'],
    stock: 20
  },
  {
    id: 6,
    name: 'Baby Stroller Pram',
    sku: 'STR-006',
    price: 4250,
    mrp: 5500,
    image: '/product-placeholder.png',
    category: 'Strollers',
    tags: ['Premium', 'In Stock'],
    rating: 4.7,
    reviews: 312,
    description: 'Lightweight foldable baby stroller with canopy, storage basket, and 360° swivel wheels.',
    features: ['One-Hand Fold', 'Canopy', 'Storage Basket', '360° Wheels'],
    stock: 18
  },
  {
    id: 7,
    name: 'Kids Plastic Almirah',
    sku: 'ALM-007',
    price: 2850,
    mrp: 3800,
    image: '/product-placeholder.png',
    category: 'Storage',
    tags: ['In Stock'],
    rating: 4.2,
    reviews: 98,
    description: 'Colorful kids wardrobe with multiple shelves, lockable doors, and easy assembly.',
    features: ['Multiple Shelves', 'Lockable Doors', 'Easy Assembly', 'Colorful Design'],
    stock: 30
  },
  {
    id: 8,
    name: 'Baby Potty Training Seat',
    sku: 'PTY-008',
    price: 450,
    mrp: 650,
    image: '/product-placeholder.png',
    category: 'Essentials',
    tags: ['Best Value', 'In Stock'],
    rating: 4.5,
    reviews: 423,
    description: 'Comfortable potty seat with backrest, anti-slip base, and easy to clean design.',
    features: ['Backrest', 'Anti-slip Base', 'Easy Clean', 'Portable'],
    stock: 50
  },
  {
    id: 9,
    name: 'Kids Magic Car',
    sku: 'CAR-009',
    price: 1650,
    mrp: 2250,
    image: '/product-placeholder.png',
    category: 'Ride-Ons',
    tags: ['Popular', 'In Stock'],
    rating: 4.4,
    reviews: 189,
    description: 'Twist and swing magic car with LED wheels, music, and 360° rotation.',
    features: ['LED Wheels', 'Music', '360° Rotation', 'No Pedals Needed'],
    stock: 22
  },
  {
    id: 10,
    name: 'Baby Bather Set',
    sku: 'BTH-010',
    price: 750,
    mrp: 950,
    image: '/product-placeholder.png',
    category: 'Essentials',
    tags: ['In Stock'],
    rating: 4.6,
    reviews: 234,
    description: 'Soft cushioned baby bather with anti-slip base and quick-dry mesh fabric.',
    features: ['Soft Cushion', 'Anti-slip Base', 'Quick Dry', 'Foldable'],
    stock: 35
  },
  {
    id: 11,
    name: 'Kids Slide for Garden',
    sku: 'SLD-011',
    price: 3850,
    mrp: 5200,
    image: '/product-placeholder.png',
    category: 'Outdoor',
    tags: ['Hot Selling', 'In Stock'],
    rating: 4.7,
    reviews: 76,
    description: 'Durable plastic slide with ladder, safety rails, and UV-resistant material.',
    features: ['Safety Rails', 'UV Resistant', 'Ladder Included', 'Indoor/Outdoor'],
    stock: 10
  },
  {
    id: 12,
    name: 'Baby Feeding High Chair',
    sku: 'FED-012',
    price: 2250,
    mrp: 2950,
    image: '/product-placeholder.png',
    category: 'Essentials',
    tags: ['Best Seller', 'In Stock'],
    rating: 4.8,
    reviews: 567,
    description: 'Adjustable feeding chair with removable tray, 5-point harness, and foldable design.',
    features: ['Removable Tray', '5-Point Harness', 'Foldable', 'Adjustable Height'],
    stock: 28
  }
]

const categories = [
  { id: 'all', name: 'All Products', count: 12 },
  { id: 'Tricycles', name: 'Tricycles', count: 1 },
  { id: 'Ride-Ons', name: 'Ride-Ons & Cars', count: 2 },
  { id: 'Swings', name: 'Swings & Slides', count: 2 },
  { id: 'Strollers', name: 'Strollers & Prams', count: 1 },
  { id: 'Tables', name: 'Tables & Chairs', count: 1 },
  { id: 'Storage', name: 'Storage', count: 1 },
  { id: 'Essentials', name: 'Baby Essentials', count: 3 },
  { id: 'Outdoor', name: 'Outdoor Play', count: 1 }
]

interface CartItem {
  productId: number
  quantity: number
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (productId: number, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId)
      if (existing) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.productId !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev => prev.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    ))
  }

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const placeOrder = () => {
    setOrderPlaced(true)
    setCart([])
    setTimeout(() => {
      setOrderPlaced(false)
      setShowCheckout(false)
      setIsCartOpen(false)
    }, 3000)
  }

  const [activeSection, setActiveSection] = useState<'home' | 'toys' | 'batteries' | 'appliance' | 'ev-services'>('home')

  return (
    <div className="pt-28 sm:pt-32 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-14 sm:top-28 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <img 
                src="/logoo.png" 
                alt="NAXEN EXIM INDIA" 
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Naxen Exim India</h1>
                <p className="text-sm text-gray-500">Premium Baby & Kids Products</p>
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {activeSection === 'home' ? (
        <>
          {/* Category Selection Cards */}
          <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Product Categories</h2>
              <p className="text-gray-600">Choose a category to explore our products</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {/* Toy Products Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                onClick={() => setActiveSection('toys')}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Toy Products</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Tricycles, Ride-ons, Swings & more</p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Batteries Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setActiveSection('batteries')}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Battery className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Batteries</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">SMF, Tubular, Solar & EV Batteries</p>
                  <div className="flex items-center text-green-600 font-semibold text-sm">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Appliance Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setActiveSection('appliance')}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Armchair className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Appliance</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Home & Kitchen Appliances</p>
                  <div className="flex items-center text-orange-600 font-semibold text-sm">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* EV Services Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setActiveSection('ev-services')}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Car className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">EV Services</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Electric Vehicle Solutions</p>
                  <div className="flex items-center text-cyan-600 font-semibold text-sm">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      ) : activeSection === 'toys' ? (
        <>
          {/* Back Button & Section Title */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-3"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Categories</span>
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Toy Products</h2>
            </div>
          </div>

          {/* Categories Filter */}
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
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                    <span className={`ml-2 text-xs ${selectedCategory === category.id ? 'text-blue-100' : 'text-gray-400'}`}>
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
          {selectedCategory !== 'all' && (
            <button 
              onClick={() => setSelectedCategory('all')}
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="relative z-10 p-4">
                  <div className="bg-gray-300 border-2 border-dashed border-gray-400 rounded-lg w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                    <span className="text-xs text-gray-500 text-center px-2">{product.name.slice(0, 15)}...</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full ${
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

                {/* Discount */}
                {product.mrp > product.price && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-bold z-20">
                    {Math.round((1 - product.price / product.mrp) * 100)}% OFF
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-1 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    title="Add to Wishlist"
                  >
                    <Heart 
                      className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                    />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all sm:hidden"
                    title="Quick View"
                  >
                    <Search className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] sm:text-xs text-gray-400 uppercase">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-[10px] sm:text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight mb-1 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-500 mb-2 line-clamp-2 hidden sm:block">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm sm:text-base font-bold text-gray-900">{formatPrice(product.price)}</span>
                  <span className="text-xs text-gray-400 line-through">{formatPrice(product.mrp)}</span>
                </div>

                {/* Stock Indicator */}
                <div className="flex items-center gap-1 mb-2">
                  <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                  <span className={`text-[10px] sm:text-xs ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
                  </span>
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">({product.reviews})</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      const existingItem = cart.find(item => item.productId === product.id);
                      if (existingItem) {
                        updateQuantity(product.id, existingItem.quantity + 1);
                      } else {
                        addToCart(product.id, 1);
                      }
                    }}
                    disabled={product.stock === 0}
                    className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      product.stock === 0 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : cart.some(item => item.productId === product.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md'
                    }`}
                  >
                    {product.stock === 0 
                      ? 'Out of Stock' 
                      : cart.some(item => item.productId === product.id)
                        ? `Added (${cart.find(item => item.productId === product.id)?.quantity})`
                        : 'Add to Cart'
                    }
                  </button>
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      if (product.stock > 0) {
                        addToCart(product.id, 1);
                        setTimeout(() => setShowCheckout(true), 300);
                      }
                    }}
                    disabled={product.stock === 0}
                    className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      product.stock === 0 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md'
                    }`}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
          </div>
        )}
      </div>

        </>
      ) : activeSection === 'batteries' ? (
        <>
          {/* Batteries Section - Devi Batteries Content */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-3"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Categories</span>
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Batteries</h2>
            </div>
          </div>

          {/* Devi Batteries Content (from EServices) */}
          <div className="pt-4">
            {/* Header */}
            <section className="bg-gradient-to-r from-slate-950 to-slate-900 text-white py-10 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Devi Batteries</h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                  Premium quality batteries for all your power needs
                </p>
              </div>
            </section>

            {/* Single Product Display */}
            <section className="py-8 sm:py-16 bg-slate-50">
              <div className="max-w-4xl mx-auto px-3 sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                >
                  {/* Product Image */}
                  <div className="bg-white p-4 sm:p-8 flex items-center justify-center">
                    <img
                      src="/DEVI BATTERIES.png"
                      alt="Devi Batteries"
                      className="max-h-48 sm:max-h-64 w-auto object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-3 sm:mb-4">Devi Batteries</h2>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                      High-performance lithium-ion batteries designed for reliability and long-lasting power. 
                      Perfect for various applications including electric vehicles, solar systems, and energy storage.
                    </p>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {[
                        'Long battery life',
                        'Fast charging capability',
                        'High energy density',
                        'Low self-discharge',
                        'Maintenance-free',
                        'Environmentally friendly',
                        'Wide temperature range',
                        'Safety certified'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
                      <h3 className="font-semibold text-slate-950 mb-3 sm:mb-4 text-base sm:text-lg">For Inquiries & Orders</h3>
                      <div className="space-y-2">
                        <a href="tel:+91-7625888880" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>+91-7625888880</span>
                        </a>
                        <a href="mailto:contact@naxenexim.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>contact@naxenexim.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </>
      ) : activeSection === 'appliance' ? (
        <>
          {/* Appliance Section - Empty */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-3"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Categories</span>
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Appliances</h2>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Armchair className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-500">Appliances section will be available shortly.</p>
          </div>
        </>
      ) : (
        <>
          {/* EV Services Section - Empty */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-3"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Categories</span>
              </button>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">EV Services</h2>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-500">EV Services section will be available shortly.</p>
          </div>
        </>
      )}

      {/* Trust Badges */}
      <div className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹2000' },
              { icon: Shield, title: 'Genuine Products', desc: '100% authentic items' },
              { icon: RotateCcw, title: 'Easy Returns', desc: '7-day return policy' },
              { icon: Phone, title: 'Support', desc: '+91 7625888880' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{feature.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bulk Order CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white">Need Bulk Orders for Your Store?</h3>
              <p className="text-blue-50 text-sm">Wholesale pricing available for retailers and distributors</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+91-7625888880" className="px-4 sm:px-6 py-2.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all text-sm">
                Call Now
              </a>
              <Link to="/contact" className="px-4 sm:px-6 py-2.5 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all text-sm">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-gray-500">{selectedProduct.category}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="bg-gray-300 border-2 border-dashed border-gray-400 rounded-lg w-32 h-32 flex items-center justify-center">
                      <span className="text-sm text-gray-500 text-center px-2">{selectedProduct.name.slice(0, 20)}...</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-3xl font-bold text-gray-900">{formatPrice(selectedProduct.price)}</span>
                      <span className="text-lg text-gray-400 line-through">{formatPrice(selectedProduct.mrp)}</span>
                      <span className="text-sm text-green-600 font-medium">
                        {Math.round((1 - selectedProduct.price / selectedProduct.mrp) * 100)}% off
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => { addToCart(selectedProduct.id); setSelectedProduct(null); }}
                        className="flex-1 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
                      >
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => toggleWishlist(selectedProduct.id)}
                        className="p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                      >
                        <Heart className={`w-5 h-5 ${wishlist.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-bold">Shopping Cart ({getCartItemCount()})</h2>
                  <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map(item => {
                        const product = products.find(p => p.id === item.productId)
                        if (!product) return null
                        return (
                          <div key={item.productId} className="flex gap-3 bg-gray-50 p-3 rounded-xl">
                            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Package className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm line-clamp-1">{product.name}</h4>
                              <p className="text-gray-500 text-xs">{product.sku}</p>
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                    className="p-1 hover:bg-gray-200 rounded"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                    className="p-1 hover:bg-gray-200 rounded"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                                <span className="font-semibold">{formatPrice(product.price * item.quantity)}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.productId)}
                              className="p-2 hover:bg-red-50 text-red-500 rounded-lg self-start"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t p-4 space-y-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>{formatPrice(getCartTotal())}</span>
                    </div>
                    <button 
                      onClick={handleCheckout}
                      className="w-full py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {orderPlaced ? (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h2>
                  <p className="text-gray-600">Thank you for your order. We will contact you shortly.</p>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Checkout</h2>
                    <button onClick={() => setShowCheckout(false)} className="p-2 hover:bg-gray-100 rounded-full">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="tel" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 7625888880" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} placeholder="Enter your address"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between text-lg font-bold mb-2">
                      <span>Total Amount:</span>
                      <span>{formatPrice(getCartTotal())}</span>
                    </div>
                    <p className="text-sm text-gray-500">Cash on Delivery available</p>
                  </div>

                  <button 
                    onClick={placeOrder}
                    className="w-full py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Place Order
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

