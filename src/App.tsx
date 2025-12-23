import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import PremiumCursor from './components/PremiumCursor'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Booking from './pages/Booking'
import About from './pages/About'
import Shop from './pages/Shop'
import Investment from './pages/Investment'
import Contact from './pages/Contact'

function AppContent() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    return !hasSeenIntro
  })
  const location = useLocation()

  useEffect(() => {
    // Only show loading intro if user hasn't seen it this session
    if (isLoading) {
      // Simulate loading time for premium experience
      const timer = setTimeout(() => {
        setIsLoading(false)
        // Mark that user has seen the intro in this session
        sessionStorage.setItem('hasSeenIntro', 'true')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Mark that user has seen the intro in this session
    sessionStorage.setItem('hasSeenIntro', 'true')
  }

  // Set document direction and language based on current locale
  useEffect(() => {
    const isArabic = location.pathname.startsWith('/ar')
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.documentElement.lang = isArabic ? 'ar' : 'en'
  }, [location.pathname])

  // Track page views in GA4 on route change
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-HH9GS53J62', {
        page_path: location.pathname + location.search
      })
    }
  }, [location])

  return (
    <div className="min-h-screen bg-cream">
      {/* Premium Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Premium Custom Cursor */}
      <PremiumCursor />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Routes>
              {/* Default locale routes (EN) */}
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/services"
                element={
                  <motion.div
                    key="services"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Services />
                  </motion.div>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Portfolio />
                  </motion.div>
                }
              />
              <Route
                path="/booking"
                element={
                  <motion.div
                    key="booking"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Booking />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/shop"
                element={
                  <motion.div
                    key="shop"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Shop />
                  </motion.div>
                }
              />
              <Route
                path="/investment"
                element={
                  <motion.div
                    key="investment"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Investment />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Contact />
                  </motion.div>
                }
              />

              {/* Arabic locale routes (AR) */}
              <Route
                path="/ar"
                element={
                  <motion.div
                    key="home-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/ar/services"
                element={
                  <motion.div
                    key="services-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Services />
                  </motion.div>
                }
              />
              <Route
                path="/ar/portfolio"
                element={
                  <motion.div
                    key="portfolio-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Portfolio />
                  </motion.div>
                }
              />
              <Route
                path="/ar/booking"
                element={
                  <motion.div
                    key="booking-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Booking />
                  </motion.div>
                }
              />
              <Route
                path="/ar/about"
                element={
                  <motion.div
                    key="about-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/ar/shop"
                element={
                  <motion.div
                    key="shop-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Shop />
                  </motion.div>
                }
              />
              <Route
                path="/ar/investment"
                element={
                  <motion.div
                    key="investment-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Investment />
                  </motion.div>
                }
              />
              <Route
                path="/ar/contact"
                element={
                  <motion.div
                    key="contact-ar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Contact />
                  </motion.div>
                }
              />
            </Routes>
            <Footer />
            
            {/* Floating WhatsApp Button */}
            <motion.a
              href="https://wa.me/962792977610"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-sage hover:bg-sage-light text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.685"/>
              </svg>
              <span className="sr-only">Contact WhatsApp</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
