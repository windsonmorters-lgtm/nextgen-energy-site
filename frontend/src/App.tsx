import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Sustainability from './pages/Sustainability'
import InvestorRelations from './pages/InvestorRelations'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Solutions from './pages/Solutions'
import CustomerSupport from './pages/CustomerSupport'
import Gallery from './pages/Gallery'
import Career from './pages/Career'
import OurPresence from './pages/OurPresence'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/our-presence" element={<OurPresence />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating QR Codes - Bottom Right */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2">
          {/* WhatsApp QR - Top */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-green-600 bg-white/90 px-2 py-1 rounded shadow font-medium">WhatsApp</span>
            <img 
              src="/whatsapp.jpeg" 
              alt="WhatsApp QR Code" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-xl border-2 border-white hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
          
          {/* Contact QR - Bottom */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-600 bg-white/90 px-2 py-1 rounded shadow font-medium">Contact</span>
            <img 
              src="/qr contact.jpeg" 
              alt="Contact QR Code" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-xl border-2 border-white hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
