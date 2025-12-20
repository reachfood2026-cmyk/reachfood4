import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Globe, Users, Building, Lightbulb } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  const isArabic = location.pathname.startsWith('/ar')
  const contactTypes = [
    {
      title: isArabic ? 'استفسارات عامة' : 'General Inquiries',
      icon: Mail,
      email: 'info@reachfood.com',
      description: isArabic ? 'أسئلة حول منتجاتنا أو تقنيتنا أو شركتنا' : 'Questions about our products, technology, or company',
      color: 'text-teal-400'
    },
    {
      title: isArabic ? 'فرص الشراكة' : 'Partnership Opportunities',
      icon: Users,
      email: 'partnerships@reachfood.com',
      description: isArabic ? 'منظمات الإغاثة، عافية الشركات، شراكات التوزيع' : 'Emergency organizations, corporate wellness, distribution partnerships',
      color: 'text-blue-400'
    },
    {
      title: isArabic ? 'التقنية والابتكار' : 'Technology & Innovation',
      icon: Lightbulb,
      email: 'tech@reachfood.com',
      description: isArabic ? 'أسئلة تقنية، تعاون بحث وتطوير، مناقشات ابتكار' : 'Technical questions, R&D collaborations, innovation discussions',
      color: 'text-orange-400'
    },
    {
      title: isArabic ? 'الصحافة والإعلام' : 'Press & Media',
      icon: Globe,
      email: 'media@reachfood.com',
      description: isArabic ? 'استفسارات إعلامية، بيانات صحفية، طلبات مقابلات' : 'Media inquiries, press releases, interview requests',
      color: 'text-purple-400'
    }
  ]

  const offices = [
    {
      location: isArabic ? 'مركز عمليات الشرق الأوسط وشمال أفريقيا' : 'MENA Operations Center',
      address: isArabic ? 'مجمع دبي التكنولوجي، الإمارات' : 'Dubai Technology Park, UAE',
      country: isArabic ? 'الإمارات العربية المتحدة' : 'United Arab Emirates',
      focus: isArabic ? 'المطبخ الثقافي والشراكات الإقليمية' : 'Cultural Cuisine & Regional Partnerships'
    },
    {
      location: isArabic ? 'مكتب الأردن' : 'Jordan Office',
      address: isArabic ? 'عمّان، الأردن' : 'Amman, Jordan',
      country: isArabic ? 'الأردن' : 'Jordan',
      focus: isArabic ? 'مركز البحث والتطوير' : 'Research & Development Hub'
    },
    {
      location: isArabic ? 'مكتب السعودية' : 'KSA Office',
      address: isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      country: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      focus: isArabic ? 'التوزيع الإقليمي والشراكات' : 'Regional Distribution & Partnerships'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-teal-400 mr-3" />
              <span className="text-teal-400 font-semibold text-lg">
                {isArabic ? 'تواصل مع ReachFood' : 'Connect With ReachFood'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{isArabic ? 'تواصل معنا' : 'Get In Touch'}</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              {isArabic ? 'سواء كنت مهتماً بالشراكات، أو لديك أسئلة حول تقنيتنا، أو ترغب في تقديم ReachFood لمؤسستك، يسعدنا سماعك.' : "Whether you're interested in partnerships, have questions about our technology, or want to bring ReachFood to your organization, we'd love to hear from you."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{isArabic ? 'كيف يمكننا المساعدة؟' : 'How Can We Help?'}</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {isArabic ? 'اختر الطريقة الأنسب للتواصل معنا بناءً على احتياجاتك واهتماماتك' : 'Choose the best way to reach us based on your specific needs and interests'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactTypes.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 mb-4"
                  >
                    <IconComponent className={`w-8 h-8 ${contact.color}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{contact.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{contact.description}</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors"
                  >
                    {contact.email}
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-8">{isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-teal-100 mb-2">{isArabic ? 'الاسم الأول' : 'First Name'}</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                      placeholder={isArabic ? 'اسمك الأول' : 'Your first name'}
                    />
                  </div>
                  <div>
                    <label className="block text-teal-100 mb-2">{isArabic ? 'اسم العائلة' : 'Last Name'}</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                      placeholder={isArabic ? 'اسم عائلتك' : 'Your last name'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">{isArabic ? 'البريد الإلكتروني' : 'Email'}</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                    placeholder={isArabic ? 'your.email@example.com' : 'your.email@example.com'}
                  />
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">{isArabic ? 'المنظمة (اختياري)' : 'Organization (Optional)'}</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm"
                    placeholder={isArabic ? 'منظمتك أو شركتك' : 'Your organization or company'}
                  />
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">{isArabic ? 'نوع الاستفسار' : 'Inquiry Type'}</label>
                  <select className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm">
                    <option value="">{isArabic ? 'اختر نوع الاستفسار' : 'Select inquiry type'}</option>
                    <option value="partnership">{isArabic ? 'فرصة شراكة' : 'Partnership Opportunity'}</option>
                    <option value="emergency">{isArabic ? 'برامج الإغاثة الطارئة' : 'Emergency Relief Programs'}</option>
                    <option value="corporate">{isArabic ? 'عافية الشركات' : 'Corporate Wellness'}</option>
                    <option value="technology">{isArabic ? 'أسئلة تقنية' : 'Technology Questions'}</option>
                    <option value="media">{isArabic ? 'استفسار إعلامي/صحفي' : 'Media/Press Inquiry'}</option>
                    <option value="general">{isArabic ? 'سؤال عام' : 'General Question'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-teal-100 mb-2">{isArabic ? 'الرسالة' : 'Message'}</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full p-3 bg-slate-800/50 border border-teal-700/30 rounded-lg text-white focus:border-teal-400 focus:outline-none backdrop-blur-sm resize-none"
                    placeholder={isArabic ? 'أخبرنا عن اهتمامك بـ ReachFood...' : 'Tell us about your interest in ReachFood...'}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isArabic ? 'إرسال الرسالة' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">{isArabic ? 'حضور عالمي' : 'Global Presence'}</h2>
                <p className="text-teal-100 mb-8 leading-relaxed">
                  {isArabic ? 'تعمل ReachFood عالمياً من خلال مواقع استراتيجية تدعم مهمتنا في جعل التغذية متاحة في كل مكان — من تطوير التقنية إلى خبرة المطبخ الثقافي والاستجابة للطوارئ.' : 'ReachFood operates globally with strategic locations that support our mission of making nutrition accessible everywhere. From technology development to cultural cuisine expertise and emergency response.'}
                </p>
              </div>

              {offices.map((office, index) => (
                <motion.div
                  key={office.location}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{office.location}</h3>
                      <p className="text-teal-100 text-sm mb-1">{office.address}</p>
                      <p className="text-teal-300 text-sm mb-2">{office.country}</p>
                      <p className="text-slate-300 text-sm">{office.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-slate-800/50 backdrop-blur-sm border border-teal-700/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{isArabic ? 'أوقات الاستجابة' : 'Response Times'}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-100">{isArabic ? 'استفسارات عامة: 24-48 ساعة' : 'General inquiries: 24-48 hours'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-teal-100">{isArabic ? 'فرص الشراكة: 2-5 أيام عمل' : 'Partnership opportunities: 2-5 business days'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-orange-400" />
                    <span className="text-teal-100">{isArabic ? 'الإغاثة الطارئة: أولوية استجابة' : 'Emergency relief: Priority response'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {isArabic ? 'جاهزون لتحويل الوصول إلى التغذية؟' : 'Ready to Transform Nutrition Access?'}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              {isArabic ? 'انضم إلى منظمات حول العالم تستخدم ReachFood لتقديم تغذية ساخنة وموثوقة في أي بيئة، في أي مكان وزمان.' : 'Join organizations worldwide who are using ReachFood to provide reliable, hot nutrition in any environment, anywhere, anytime.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={isArabic ? '/ar/services' : '/services'}
                className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-lg hover:bg-teal-50 transition-all border-2 border-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isArabic ? 'استكشف منتجاتنا' : 'Explore Our Products'}
              </motion.a>
              <motion.a
                href={isArabic ? '/ar/about' : '/about'}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isArabic ? 'تعرّف على مهمتنا' : 'Learn About Our Mission'}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact