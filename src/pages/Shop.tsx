import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import { Flame, Sprout, Globe, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { api } from '../lib/api'
import type { Product, SubscriptionPlan } from '../lib/api'

const Shop = () => {
  const location = useLocation()
  const isArabic = location.pathname.startsWith('/ar')

  const [products, setProducts] = useState<Product[]>([])
  const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productsData, plansData] = await Promise.all([
          api.getProducts(),
          api.getSubscriptionPlans()
        ])
        setProducts(productsData.filter(p => p.isFeatured))
        setSubscriptionPlans(plansData)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch data:', err)
        setError(isArabic ? 'فشل في تحميل المنتجات' : 'Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [isArabic])

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-cream">
        <Loader2 className="w-12 h-12 animate-spin text-forest" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-forest text-white px-6 py-2 rounded-lg"
          >
            {isArabic ? 'حاول مرة أخرى' : 'Try Again'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest via-forest-light to-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              R<span className="text-terracotta">E</span>ACHF<span className="text-terracotta">OO</span>D {isArabic ? 'المتجر' : 'Shop'}
            </h1>
            <p className="text-xl text-cream mb-8 max-w-3xl mx-auto">
              {isArabic ? 'اختبر تقنية التسخين الذاتي الثورية مع وجبات تطهى بنفسها خلال 5 دقائق. تغذية مميزة تلتقي بالراحة أينما كنت.' : 'Experience revolutionary self-heating technology with meals that cook themselves in 5 minutes. Premium nutrition meets convenience wherever you are.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-terracotta hover:bg-terracotta-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'تسوق الآن' : 'Shop Now'}
              </button>
              <button className="border border-cream text-cream hover:bg-cream hover:text-forest px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {isArabic ? 'منتجات مميزة' : 'Featured Products'}
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              {isArabic ? 'اكتشف وجباتنا ذاتية التسخين المصممة لأنماط الحياة العصرية' : 'Discover our premium self-heating meals designed for modern lifestyles'}
            </p>
          </motion.div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-charcoal-light text-lg">
                {isArabic ? 'لا توجد منتجات متاحة حالياً' : 'No products available at the moment'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50
                  }}
                  className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group perspective-1000 min-h-[600px]"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Full Background Image */}
                  <img
                    src={product.imageUrl || '/images/placeholder.jpg'}
                    alt={isArabic ? product.nameAr : product.nameEn}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    style={{
                      filter: 'brightness(0.7) drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                    }}
                  />

                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-500"></div>

                  {/* Product Badge */}
                  {(product.badgeEn || product.badgeAr) && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-terracotta to-terracotta-light text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {isArabic ? product.badgeAr : product.badgeEn}
                      </span>
                    </div>
                  )}

                  {/* 3D Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-2 group-hover:rotate-12 z-10">
                    <div className="w-8 h-8 bg-sage rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2 group-hover:-rotate-6 z-10">
                    <div className="w-6 h-6 bg-terracotta rounded-full animate-bounce shadow-lg"></div>
                  </div>

                  {/* Product Content - Positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    {/* 3D Background Pattern */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-sage-light to-terracotta-light transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 rounded-lg"></div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cream transition-colors duration-300 drop-shadow-lg">
                        {isArabic ? product.nameAr : product.nameEn}
                      </h3>

                      {/* Price and Action */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-gold-light group-hover:text-gold transition-colors duration-300 drop-shadow-lg">
                            ${Number(product.price).toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className="ml-2 text-lg text-gray-400 line-through">
                              ${Number(product.originalPrice).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <Link to={isArabic ? '/ar/booking' : '/booking'} className="bg-gradient-to-r from-terracotta to-terracotta-light hover:from-terracotta-light hover:to-terracotta text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-lg inline-block text-center">
                          {isArabic ? 'اشتر الآن' : 'Buy Now'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* 3D Showcase Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-cream-dark to-cream rounded-2xl p-8 transform hover:scale-105 transition-transform duration-500 border border-sage/20">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {isArabic ? 'اختبر مستقبل الغذاء' : 'Experience the Future of Food'}
              </h3>
              <p className="text-charcoal-light mb-6 max-w-2xl mx-auto">
                {isArabic ? 'تلتقي تقنية التسخين الذاتي الثورية بالنكهات الأصيلة. كل وجبة مزيج مثالي من الراحة والتغذية والطعم.' : 'Revolutionary self-heating technology meets authentic flavors. Each meal is a perfect blend of convenience, nutrition, and taste.'}
              </p>
              <button className="bg-gradient-to-r from-terracotta to-terracotta-light hover:from-terracotta-light hover:to-terracotta text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {isArabic ? 'عرض كل المنتجات' : 'View All Products'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {isArabic ? 'خطط الاشتراك' : 'Subscription Plans'}
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              {isArabic ? 'اختر الخطة التي تناسب نمط حياتك ولا تفوت وجباتنا اللذيذة ذاتية التسخين' : 'Choose the plan that fits your lifestyle and never run out of delicious, self-heating meals'}
            </p>
          </motion.div>

          {subscriptionPlans.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-charcoal-light text-lg">
                {isArabic ? 'لا توجد خطط اشتراك متاحة حالياً' : 'No subscription plans available at the moment'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                    plan.isPopular ? 'ring-2 ring-terracotta' : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-0 right-0 bg-terracotta text-white text-center py-2 text-sm font-semibold">
                      {isArabic ? 'الأكثر شعبية' : 'Most Popular'}
                    </div>
                  )}

                  <div className={`p-8 ${plan.isPopular ? 'pt-12' : ''}`}>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      {isArabic ? plan.nameAr : plan.nameEn}
                    </h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-forest">${Number(plan.monthlyPrice).toFixed(0)}</span>
                      <span className="text-charcoal-light">{isArabic ? '/شهر' : '/month'}</span>
                      {plan.annualPrice && plan.savings && (
                        <div className="text-sm text-sage mt-1">
                          {isArabic
                            ? `أو $${Number(plan.annualPrice).toFixed(0)}/سنة (وفر $${Number(plan.savings).toFixed(0)})`
                            : `or $${Number(plan.annualPrice).toFixed(0)}/year (save $${Number(plan.savings).toFixed(0)})`}
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="text-lg font-semibold text-charcoal mb-2">
                        {isArabic ? `${plan.mealsPerMonth} وجبة/شهر` : `${plan.mealsPerMonth} meals/month`}
                      </div>
                      <ul className="space-y-3">
                        {(isArabic ? plan.featuresAr : plan.featuresEn).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-5 h-5 bg-sage rounded-full flex-shrink-0 mt-0.5 mr-3"></div>
                            <span className="text-charcoal-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={isArabic ? '/ar/booking' : '/booking'} className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 inline-block text-center ${
                      plan.isPopular
                        ? 'bg-terracotta hover:bg-terracotta-light text-white'
                        : 'border border-forest text-forest hover:bg-forest hover:text-white'
                    }`}>
                      {isArabic ? 'اشتر الآن' : 'Buy Now'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {isArabic ? 'لماذا تختار REACHFOOD؟' : (<>Why Choose R<span className="text-terracotta">E</span>ACHF<span className="text-terracotta">OO</span>D?</>)}
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              {isArabic ? 'تقنية ثورية تلتقي بنكهات أصيلة' : 'Revolutionary technology meets authentic flavors'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                color: 'text-charcoal',
                bgColor: 'bg-terracotta/20',
                title: isArabic ? 'تقنية التسخين الذاتي' : 'Self-Heating Technology',
                description: isArabic ? 'تفاعل أكسيد الكالسيوم يسخن وجبتك خلال 5 دقائق بدون أي مصدر حرارة خارجي' : 'Calcium oxide reaction heats your meal in just 5 minutes without any external heat source'
              },
              {
                icon: Sprout,
                color: 'text-charcoal',
                bgColor: 'bg-sage/20',
                title: isArabic ? 'تغليف قابل للزراعة' : 'Plantable Packaging',
                description: isArabic ? 'تغليف صديق للبيئة يتحول إلى زهور برية بعد الاستخدام، يدعم الاستدامة البيئية' : 'Eco-friendly packaging that grows into wildflowers after use, supporting environmental sustainability'
              },
              {
                icon: Globe,
                color: 'text-charcoal',
                bgColor: 'bg-forest/10',
                title: isArabic ? 'نكهات أصيلة من الشرق الأوسط' : 'Authentic MENA Flavors',
                description: isArabic ? 'وصفات تقليدية من الشرق الأوسط وشمال أفريقيا بتوابل ومكونات أصيلة' : 'Traditional Middle Eastern and North African recipes with authentic spices and ingredients'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-cream-dark transition-colors duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest via-forest-light to-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isArabic ? 'هل أنت مستعد لاختبار مستقبل الغذاء؟' : 'Ready to Experience the Future of Food?'}
            </h2>
            <p className="text-xl text-cream mb-8 max-w-2xl mx-auto">
              {isArabic ? 'انضم إلى آلاف العملاء الراضين الذين اكتشفوا راحة ومذاق الوجبات ذاتية التسخين' : 'Join thousands of satisfied customers who have discovered the convenience and taste of self-heating meals'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream text-forest hover:bg-cream-dark px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'تسوق الآن' : 'Shop Now'}
              </button>
              <button className="border border-cream text-cream hover:bg-cream hover:text-forest px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Shop
