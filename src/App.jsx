import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Search, ShoppingCart, User, Smartphone, Laptop, Tablet, 
  Check, Star, TrendingUp, Shield, Truck, CreditCard,
  ChevronRight, Heart, Menu, X
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('midnight')
  const [selectedStorage, setSelectedStorage] = useState('256GB')
  const [compareItems, setCompareItems] = useState([])

  const featuresRef = useRef(null)
  const productsRef = useRef(null)
  const configuratorRef = useRef(null)
  
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const isProductsInView = useInView(productsRef, { once: true, amount: 0.1 })
  const isConfiguratorInView = useInView(configuratorRef, { once: true, amount: 0.2 })

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      tagline: 'Титан. Такой прочный. Такой легкий.',
      price: 'от 89 990 ₽',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
      category: 'iPhone',
      new: true
    },
    {
      id: 2,
      name: 'MacBook Pro 14"',
      tagline: 'Сногсшибательная производительность.',
      price: 'от 169 990 ₽',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      category: 'Mac',
      new: true
    },
    {
      id: 3,
      name: 'iPad Pro',
      tagline: 'Невероятно тонкий. Невероятно мощный.',
      price: 'от 79 990 ₽',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
      category: 'iPad',
      new: false
    }
  ]

  const colors = [
    { id: 'midnight', name: 'Тёмная ночь', hex: '#1a1b2e' },
    { id: 'starlight', name: 'Сияющая звезда', hex: '#f5f5f0' },
    { id: 'blue', name: 'Синий', hex: '#3b82f6' },
    { id: 'pink', name: 'Розовый', hex: '#ec4899' }
  ]

  const storageOptions = ['128GB', '256GB', '512GB', '1TB']

  const toggleCompare = (productId) => {
    setCompareItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-2xl font-semibold text-gray-900">
                
              </a>
              <div className="hidden md:flex space-x-8 text-sm">
                <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">Магазин</a>
                <a href="#configurator" className="text-gray-700 hover:text-gray-900 transition-colors">Mac</a>
                <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">iPad</a>
                <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">iPhone</a>
                <a href="#support" className="text-gray-700 hover:text-gray-900 transition-colors">Поддержка</a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
                {compareItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {compareItems.length}
                  </span>
                )}
              </div>
              <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-700 hover:text-gray-900">Магазин</a>
              <a href="#configurator" className="text-gray-700 hover:text-gray-900">Mac</a>
              <a href="#products" className="text-gray-700 hover:text-gray-900">iPad</a>
              <a href="#products" className="text-gray-700 hover:text-gray-900">iPhone</a>
              <a href="#support" className="text-gray-700 hover:text-gray-900">Поддержка</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center py-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-4 tracking-tight"
          >
            iPhone 15 Pro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8 font-normal"
          >
            Титан. Такой прочный. Такой легкий.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium transition-all">
              Купить
            </button>
            <button className="text-blue-600 hover:underline px-8 py-3 rounded-full text-base font-medium">
              Подробнее
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&q=80" 
              alt="iPhone 15 Pro" 
              className="w-full max-w-4xl mx-auto rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section ref={featuresRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isFeaturesInView ? 1 : 0, y: isFeaturesInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-16 tracking-tight"
          >
            Почему выбирают нас
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: 'Быстрая доставка', desc: 'Бесплатная доставка по всей России в течение 2-3 дней' },
              { icon: Shield, title: 'Гарантия качества', desc: 'Официальная гарантия Apple на все устройства 1 год' },
              { icon: CreditCard, title: 'Удобная оплата', desc: 'Рассрочка 0% на 12 месяцев без первого взноса' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isFeaturesInView ? 1 : 0, y: isFeaturesInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" ref={productsRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isProductsInView ? 1 : 0, y: isProductsInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Новинки
            </h2>
            <p className="text-xl text-gray-600">Последние модели с передовыми технологиями</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isProductsInView ? 1 : 0, y: isProductsInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.new && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      НОВИНКА
                    </span>
                  )}
                  <button
                    onClick={() => toggleCompare(product.id)}
                    className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                  >
                    <Heart 
                      className={`w-5 h-5 ${compareItems.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                    />
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    {product.category === 'iPhone' && <Smartphone className="w-5 h-5 text-gray-500" />}
                    {product.category === 'Mac' && <Laptop className="w-5 h-5 text-gray-500" />}
                    {product.category === 'iPad' && <Tablet className="w-5 h-5 text-gray-500" />}
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.tagline}</p>
                  <p className="text-xl font-semibold text-gray-900 mb-6">{product.price}</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-sm font-medium transition-all">
                      Купить
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-full text-sm font-medium transition-all">
                      Подробнее
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATOR SECTION */}
      <section id="configurator" ref={configuratorRef} className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isConfiguratorInView ? 1 : 0, y: isConfiguratorInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Соберите свой MacBook Pro
            </h2>
            <p className="text-xl text-gray-600">Выберите цвет и объём памяти</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isConfiguratorInView ? 1 : 0, y: isConfiguratorInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"
                  alt="MacBook Pro"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Выберите цвет</h3>
                  <div className="flex gap-3">
                    {colors.map(color => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor === color.id ? 'border-blue-600 scale-110' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {colors.find(c => c.id === selectedColor)?.name}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Объём памяти</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {storageOptions.map(storage => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorage(storage)}
                        className={`py-4 px-6 rounded-xl border-2 transition-all ${
                          selectedStorage === storage
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="text-base font-semibold text-gray-900">{storage}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">MacBook Pro 14"</span>
                    <span className="text-xl font-semibold text-gray-900">169 990 ₽</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>В наличии</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2">
                  Добавить в корзину
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section id="support" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Поддержка и гарантия
            </h2>
            <p className="text-xl text-gray-600">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Официальная гарантия</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Все устройства имеют официальную гарантию производителя 1 год с возможностью продления
                  </p>
                  <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                    Узнать больше <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Программа Trade-In</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Обменяйте старое устройство на новое с выгодой до 50 000 ₽
                  </p>
                  <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                    Оценить устройство <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Готовы к покупке?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Получите бесплатную консультацию и персональные рекомендации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-base font-semibold transition-all">
              Связаться с нами
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-900 px-10 py-4 rounded-full text-base font-semibold transition-all">
              Найти магазин
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Магазин</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Mac</a></li>
                <li><a href="#" className="hover:text-gray-900">iPad</a></li>
                <li><a href="#" className="hover:text-gray-900">iPhone</a></li>
                <li><a href="#" className="hover:text-gray-900">Watch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Гарантия</a></li>
                <li><a href="#" className="hover:text-gray-900">Доставка</a></li>
                <li><a href="#" className="hover:text-gray-900">Возврат</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">О нас</a></li>
                <li><a href="#" className="hover:text-gray-900">Контакты</a></li>
                <li><a href="#" className="hover:text-gray-900">Вакансии</a></li>
                <li><a href="#" className="hover:text-gray-900">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Личный кабинет</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Мои заказы</a></li>
                <li><a href="#" className="hover:text-gray-900">Сравнение</a></li>
                <li><a href="#" className="hover:text-gray-900">Избранное</a></li>
                <li><a href="#" className="hover:text-gray-900">Настройки</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2024 Apple Store Russia. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-900">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App