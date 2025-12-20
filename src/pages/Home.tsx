import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Leaf, 
  Globe, 
  Heart, 
  Zap,
  Mountain,
  Building,
  UserCheck,
  CheckCircle
} from 'lucide-react'
import ParallaxHero from '../components/ParallaxHero'
import { useIsArabic, tr } from '../i18n'

const Home = () => {
  const isArabic = useIsArabic()
  const targetAudiences = [
    {
      title: isArabic ? 'الإغاثة الطارئة' : 'Emergency Relief',
      iconPath: '/images/icons/7.png',
      description: isArabic ? 'تقديم تغذية حيوية منقذة للحياة للمجتمعات النازحة والعاملين في مناطق الأزمات.' : 'Providing critical, life-sustaining nutrition to displaced communities and aid workers in crisis zones.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      title: isArabic ? 'المغامرون والمسافرون' : 'Adventurers & Travelers',
      iconPath: '/images/icons/adventure.png',
      description: isArabic ? 'وجبات ساخنة خفيفة الوزن وسهلة الحمل للمتنزهين والمخيمين والمستكشفين أثناء التنقل.' : 'Lightweight, easy-to-pack, and reliable hot meals for hikers, campers, and explorers on the go.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      title: isArabic ? 'المهنيون المشغولون' : 'Busy Professionals',
      iconPath: '/images/icons/business.png',
      description: isArabic ? 'حل وجبات صحي ومريح وسريع لأيام العمل المرهقة وأنماط الحياة السريعة.' : 'A healthy, convenient, and quick meal solution for demanding workdays and fast-paced lifestyles.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      title: isArabic ? 'العافية اليومية' : 'Daily Wellness',
      iconPath: '/images/icons/family.png',
      description: isArabic ? 'وجبات غنية بالعناصر الغذائية مناسبة للعائلات والطلاب وكل من يبحث عن خيار صحي وخالٍ من التعقيد.' : 'Nutrient-packed meals perfect for families, students, and anyone seeking a wholesome, hassle-free option.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ]


  const technologyImpacts = [
    {
      icon: Globe,
      title: isArabic ? 'تركيز على منطقة الشرق الأوسط وشمال أفريقيا' : 'MENA Region Focus',
      metric: isArabic ? 'استهداف استراتيجي' : 'Strategic Targeting',
      description: isArabic ? 'انتشار استراتيجي عبر الشرق الأوسط وشمال أفريقيا بفهم ثقافي' : 'Strategic deployment across Middle East and North Africa with cultural understanding',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Leaf,
      title: isArabic ? 'الأثر البيئي' : 'Environmental Impact',
      metric: isArabic ? 'استدامة 100%' : '100% Sustainable',
      description: isArabic ? 'كل عبوة تتحول إلى زهور برية، مما يقلل النفايات تماماً' : 'Every package becomes wildflowers, reducing waste completely',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: Zap,
      title: isArabic ? 'ابتكار تقني' : 'Technology Innovation',
      metric: isArabic ? 'موثوقية 99.9%' : '99.9% Reliability',
      description: isArabic ? 'تسخين لمدة 5 دقائق يعمل في ظروف قاسية من -40° حتى 60° م' : '5-minute heating works in extreme conditions from -40°C to 60°C',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    },
    {
      icon: UserCheck,
      title: isArabic ? 'ميزات إمكانية الوصول' : 'Accessibility Features',
      metric: isArabic ? 'تصميم شامل' : 'Universal Design',
      description: isArabic ? 'وسم برايل، مسح صوتي، وإتاحة تغذية شاملة' : 'Braille labeling, audio scanning, and inclusive nutrition access',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Heart,
      title: isArabic ? 'أصالة ثقافية' : 'Cultural Authenticity',
      metric: isArabic ? 'أكثر من 12 وجبة تعافٍ بحثية، 2/دفعة' : '12+ health recovery food research-based, 2/batch',
      description: isArabic ? 'نكهات تقليدية من الشرق الأوسط وشمال أفريقيا مع اعتماد حلال واحترام ثقافي' : 'Traditional MENA flavors with Halal certification and cultural respect',
      color: 'text-red-500',
      bgColor: 'bg-red-100'
    },
    {
      icon: Shield,
      title: isArabic ? 'جاهزية الطوارئ' : 'Emergency Ready',
      metric: isArabic ? 'عمر تخزيني طويل' : 'Long Shelf Life',
      description: isArabic ? 'لا حاجة للكهرباء، يعمل في أي مكان، مثالي للاستجابة للأزمات' : 'No power required, works anywhere, perfect for crisis response',
      color: 'text-teal-500',
      bgColor: 'bg-teal-100'
    }
  ]

  return (
    <div className="pt-16">
      {/* Premium Parallax Hero Section */}
      <ParallaxHero />

      {/* Target Audiences Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{tr('smartMeals', isArabic)}</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {isArabic ? 'صممت وجباتنا المبتكرة لتناسب أنماط الحياة المتنوعة والظروف الحرجة، لتضمن بقاء التغذية في متناول الجميع دائماً.' : 'Our innovative meals are designed for diverse lifestyles and critical situations, ensuring nutrition is always within reach.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudiences.map((audience, index) => {
              return (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl p-6 shadow-lg hover:shadow-xl group hover:scale-105 transition-all duration-300 border-2 border-teal-400 hover:border-teal-300 bg-teal-700"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg mb-3">{audience.title}</h3>
                    <p className="text-teal-100 text-sm leading-relaxed">{audience.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full Background Image Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/images/h.jpg" 
            alt="SULTION Smart Meals for Real Lives" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Technology Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{tr('technologyMakesDifference', isArabic)}</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {isArabic ? 'قدرات ثورية تُغير طريقة وصول التغذية إلى الناس حول العالم' : 'Revolutionary capabilities that transform how nutrition reaches people worldwide'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyImpacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${impact.bgColor} flex items-center justify-center`}>
                    <impact.icon className={`w-8 h-8 ${impact.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{impact.title}</h3>
                  <div className={`text-3xl font-bold ${impact.color} mb-3`}>
                    {impact.metric}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {impact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-20 relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <img 
          src="/images/bannger.jpg"
          alt="Technology showcase background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-teal-900/70 to-slate-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{isArabic ? 'شاهد التقنية على أرض الواقع' : 'See The Technology In Action'}</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              {isArabic ? 'اختبر كيف تحول تقنيتنا الثورية للتسخين الذاتي وجبة بسيطة إلى طعام ساخن ومغذٍ خلال 5 دقائق بالضبط' : 'Experience how our revolutionary self-heating technology transforms a simple meal into hot, nutritious food in exactly 5 minutes'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{isArabic ? 'عملية التسخين خلال 5 دقائق' : '5-Minute Heating Process'}</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <p className="text-white font-medium">{isArabic ? 'اضغط على نقطة التفعيل' : 'Press the activation spot'}</p>
                    <p className="text-teal-200 text-sm">{isArabic ? 'تبدأ تفاعل أكسيد الكالسيوم فوراً' : 'Calcium oxide reaction begins instantly'}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-auto"
                  >
                    <Zap className="w-6 h-6 text-orange-400" />
                  </motion.div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <p className="text-white font-medium">{isArabic ? 'يسري الحرارة بالتساوي' : 'Heat spreads evenly'}</p>
                    <p className="text-teal-200 text-sm">{isArabic ? 'تسخين آمن ومتحكم به حتى 65° م' : 'Safe, controlled heating to 65°C'}</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-auto"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  </motion.div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <p className="text-white font-medium">{isArabic ? 'جاهزة للأكل!' : 'Ready to eat!'}</p>
                    <p className="text-teal-200 text-sm">{isArabic ? 'درجة حرارة مثالية وتغذية متكاملة' : 'Perfect temperature, perfect nutrition'}</p>
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="ml-auto"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Countdown Timer Demo */}
              <div className="mt-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full text-white text-2xl font-bold mb-4"
                >
                  <motion.span
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    5:00
                  </motion.span>
                </motion.div>
                <p className="text-teal-200 text-sm">{isArabic ? 'متوسط وقت التسخين' : 'Average heating time'}</p>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">{isArabic ? 'لماذا تهم هذه التقنية' : 'Why This Technology Matters'}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">{isArabic ? 'حالات الطوارئ' : 'Emergency Situations'}</h4>
                      <p className="text-teal-200 text-sm">{isArabic ? 'عندما تفشل شبكات الكهرباء ولا يتوفر وقود الطبخ، تقدم ReachFood تغذية ساخنة منقذة للحياة' : 'When power grids fail and cooking fuel is unavailable, ReachFood provides life-sustaining hot nutrition'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mountain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">{isArabic ? 'بيئات قاسية' : 'Extreme Environments'}</h4>
                      <p className="text-teal-200 text-sm">{isArabic ? 'من محطات الأبحاث القطبية إلى قمم الجبال، الوجبات الساخنة ترفع المعنويات وتوفر السعرات الأساسية' : 'From Arctic research stations to mountain peaks, hot meals boost morale and provide essential calories'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">{isArabic ? 'راحة حضرية' : 'Urban Convenience'}</h4>
                      <p className="text-teal-200 text-sm">{isArabic ? 'يحصل المهنيون المشغولون على تغذية بجودة المطاعم دون مطابخ أو ميكروويف أو تأخير الطلبات' : 'Busy professionals get restaurant-quality nutrition without kitchens, microwaves, or takeout delays'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Leaf className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">{isArabic ? 'الأثر البيئي' : 'Environmental Impact'}</h4>
                      <p className="text-teal-200 text-sm">{isArabic ? 'لا حاجة لطاقة للطهي، تغليف قابل للتحلل يتحول إلى زهور برية، وانبعاثات كربونية منخفضة' : 'Zero cooking energy required, biodegradable packaging that becomes wildflowers, minimal carbon footprint'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{isArabic ? 'اقتصاد دائري فعّال' : 'Circular Economy in Action'}</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {isArabic ? 'كل وجبة من ReachFood تمثل التزامنا بحماية البيئة — من صفر طاقة للطهي إلى تغليف يصبح جزءاً من الطبيعة' : 'Every ReachFood meal represents our commitment to environmental stewardship - from zero cooking energy to packaging that becomes part of nature'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Packaging Lifecycle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-8 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <Leaf className="w-full h-full text-green-500" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{isArabic ? 'تغليف قابل للزراعة' : 'Plantable Packaging'}</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{isArabic ? 'مواد قابلة للتحلل تتحلل بأمان' : 'Biodegradable materials break down safely'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{isArabic ? 'بذور زهور برية مدمجة تنبت في التربة' : 'Embedded wildflower seeds activate in soil'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>{isArabic ? 'نباتات محلية تدعم النظم البيئية' : 'Native plants support local ecosystems'}</span>
                </div>
              </div>
            </motion.div>

            {/* Energy Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <Zap className="w-full h-full text-orange-500" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{isArabic ? 'دون طاقة خارجية' : 'Zero External Energy'}</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>{isArabic ? 'لا حاجة للكهرباء أو الغاز' : 'No electricity or gas required'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>{isArabic ? 'تفاعل أكسيد الكالسيوم محايد كربونياً' : 'Calcium oxide reaction is carbon neutral'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>{isArabic ? 'يقلل متطلبات بنية الطهي التحتية' : 'Reduces cooking infrastructure demands'}</span>
                </div>
              </div>
            </motion.div>

            {/* Global Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-8 text-center"
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <Globe className="w-full h-full text-blue-500" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{isArabic ? 'أثر عالمي النطاق' : 'Global Scale Impact'}</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{isArabic ? 'أكثر من مليون وجبة قُدمت في مناطق الأزمات' : '1M+ meals served in crisis zones'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>{isArabic ? '500 ألف زهرة برية زُرعت عبر التغليف' : '500K wildflowers planted through packaging'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{isArabic ? 'انخفاض 75% مقارنة بالتسخين التقليدي' : '75% reduction vs traditional meal heating'}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Environmental Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-teal-900 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">{isArabic ? 'الأثر البيئي لكل وجبة' : 'Environmental Impact Per Meal'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">0 kWh</div>
                <div className="text-teal-200 text-sm">{isArabic ? 'استهلاك الكهرباء' : 'Electricity consumed'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">-75%</div>
                <div className="text-teal-200 text-sm">{isArabic ? 'البصمة الكربونية مقارنة بالطهي' : 'Carbon footprint vs cooking'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">5-15</div>
                <div className="text-teal-200 text-sm">{isArabic ? 'بذور زهور برية مزروعة' : 'Wildflower seeds planted'}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-teal-200 text-sm">{isArabic ? 'مواد قابلة للتحلل' : 'Biodegradable materials'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {tr('joinMovement', isArabic)}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              {isArabic
                ? 'سواء كنت تبحث عن تغذية رحلة حياتك أو الاستثمار في مستقبل مستدام، هناك مكان لك في ReachFood. كن جزءاً من الثورة التي تعيد تصور التغذية.'
                : "Whether you're looking to fuel your life's journey or invest in a sustainable future, there's a place for you at ReachFood. Be part of the revolution that's reimagining nourishment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={isArabic ? '/ar/shop' : '/shop'} className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center space-x-2">
                  <span>{isArabic ? 'تسوق الوجبات' : 'Shop Meals'}</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={isArabic ? '/ar/portfolio' : '/portfolio'} className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center space-x-2">
                  <span>{isArabic ? 'اكتشف الابتكار' : 'See Innovation'}</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={isArabic ? '/ar/contact' : '/contact'} className="bg-teal-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-teal-600 transition-colors inline-flex items-center space-x-2">
                  <span>{isArabic ? 'شاركنا الشراكة' : 'Partner With Us'}</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={isArabic ? '/ar/about' : '/about'} className="bg-orange-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center space-x-2">
                  <span>{isArabic ? 'انضم إلى رحلتنا البحثية' : 'Join Our Research Journey'}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 