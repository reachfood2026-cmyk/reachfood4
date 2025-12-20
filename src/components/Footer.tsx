import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Leaf, Zap, Globe, Shield } from 'lucide-react'
import { tr } from '../i18n'

const Footer = () => {
  const location = useLocation()
  const isArabic = location.pathname.startsWith('/ar')
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/images/logo.jpg" 
                    alt="ReachFood Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-2xl font-serif font-bold">
                  <span className="text-gray-800"><span className="text-teal-600">R</span><span className="text-orange-400">E</span><span className="text-teal-600">A</span><span className="text-teal-600">C</span><span className="text-teal-600">H</span><span className="text-teal-600">F</span><span className="text-orange-400">OO</span><span className="text-teal-600">D</span></span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                {tr('footerTagline', isArabic)}
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.instagram.com/reachfood2025/?igsh=MXd1ZWtodHNjdXBwaw%3D%3D#"
                  className="text-gray-500 hover:text-teal-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/reachfood"
                  className="text-gray-500 hover:text-teal-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/reachfood"
                  className="text-gray-500 hover:text-teal-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-600">{isArabic ? 'تسخين خلال 5 دقائق' : '5-Min Heating'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-600">{isArabic ? 'تغليف قابل للزراعة' : 'Plantable Packaging'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-600">{isArabic ? 'نكهات الشرق الأوسط وشمال أفريقيا' : 'MENA Flavors'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-600">{isArabic ? 'تصميم يسهل الوصول إليه' : 'Accessible Design'}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Products & Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{tr('products', isArabic)}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={isArabic ? '/ar/services' : '/services'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {isArabic ? 'أطقم الوجبات' : 'Meal Kits'}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? '/ar/portfolio' : '/portfolio'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('innovationLab', isArabic)}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? '/ar/about' : '/about'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('ourStory', isArabic)}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? '/ar/shop' : '/shop'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('shop', isArabic)}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? '/ar/booking' : '/booking'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('subscriptions', isArabic)}
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">{tr('categories', isArabic)}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600">{tr('emergencyRelief', isArabic)}</span>
              </li>
              <li>
                <span className="text-gray-600">{tr('adventureMeals', isArabic)}</span>
              </li>
              <li>
                <span className="text-gray-600">{tr('professionalQuick', isArabic)}</span>
              </li>
              <li>
                <span className="text-gray-600">{tr('familyWellness', isArabic)}</span>
              </li>
              <li>
                <span className="text-gray-600">{tr('athletes', isArabic)}</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{tr('contact', isArabic)}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span className="text-gray-600">{tr('globalDistribution', isArabic)}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-500" />
                <span className="text-gray-600">+1-800-REACH-FOOD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-500" />
                <span className="text-gray-600">ameraaloto@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-teal-500" />
                <span className="text-gray-600">{tr('support247', isArabic)}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">{tr('partners', isArabic)}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={isArabic ? '/ar/contact' : '/contact'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('ngoPartnerships', isArabic)}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? '/ar/contact' : '/contact'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('corporateSales', isArabic)}
                </Link>
              </li>
              <li>
                <Link to={isArabic ? '/ar/contact' : '/contact'} className="text-gray-600 hover:text-teal-500 transition-colors">
                  {tr('distributionNetwork', isArabic)}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-500 text-sm">
              {isArabic ? '© 2024 ReachFood. نحدث ثورة في التغذية حول العالم.' : '© 2024 ReachFood. Revolutionizing nourishment worldwide.'}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {isArabic ? 'مطور بواسطة' : 'Developed by'} <a href="https://www.sitedz.store" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 transition-colors">www.sitedz.store</a>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={isArabic ? '/ar/privacy' : '/privacy'} className="text-gray-500 hover:text-teal-500 text-sm">
              {tr('privacyPolicy', isArabic)}
            </Link>
            <Link to={isArabic ? '/ar/terms' : '/terms'} className="text-gray-500 hover:text-teal-500 text-sm">
              {tr('termsOfService', isArabic)}
            </Link>
            <Link to={isArabic ? '/ar/sustainability' : '/sustainability'} className="text-gray-500 hover:text-teal-500 text-sm">
              {tr('sustainability', isArabic)}
            </Link>
            <Link to={isArabic ? '/ar/accessibility' : '/accessibility'} className="text-gray-500 hover:text-teal-500 text-sm">
              {tr('accessibility', isArabic)}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer