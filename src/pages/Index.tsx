import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const brands = ["Samsung", "LG", "Bosch", "Whirlpool", "Electrolux", "Haier"];
  
  const services = [
    {
      icon: "Wind",
      title: "Ремонт кондиционеров",
      description: "Диагностика, заправка фреоном, замена компрессоров",
      price: "от 1500 руб"
    },
    {
      icon: "Refrigerator",
      title: "Ремонт холодильников",
      description: "Замена компрессоров, ремонт системы охлаждения",
      price: "от 2000 руб"
    },
    {
      icon: "Settings",
      title: "Профилактическое обслуживание",
      description: "Чистка, диагностика, настройка оборудования",
      price: "от 800 руб"
    },
    {
      icon: "Clock",
      title: "Экстренный вызов",
      description: "Срочный ремонт в день обращения",
      price: "от 2500 руб"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Snowflake" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DonServis</h1>
                <p className="text-sm text-gray-600">Профессиональный ремонт</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  Работаем по всей ДНР
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Ремонт <span className="text-blue-600">кондиционеров</span> и <span className="text-blue-600">холодильников</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl">
                  Быстрый и качественный ремонт климатической техники. Работаем с ведущими брендами. Гарантия на все виды работ.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 bg-white border-blue-200">
                    {brand}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Icon name="PhoneCall" size={20} className="mr-2" />
                  Заказать ремонт
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Режим работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-gray-600">месяцев гарантии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2500+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
                    <Icon name="Wind" size={48} className="mx-auto mb-4" />
                    <h3 className="font-semibold">Кондиционеры</h3>
                    <p className="text-sm opacity-90">Все виды ремонта</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
                    <Icon name="Refrigerator" size={48} className="mx-auto mb-4" />
                    <h3 className="font-semibold">Холодильники</h3>
                    <p className="text-sm opacity-90">Быстрая диагностика</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
                    <Icon name="Wrench" size={48} className="mx-auto mb-4" />
                    <h3 className="font-semibold">Запчасти</h3>
                    <p className="text-sm opacity-90">Оригинальные детали</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
                    <Icon name="Shield" size={48} className="mx-auto mb-4" />
                    <h3 className="font-semibold">Гарантия</h3>
                    <p className="text-sm opacity-90">До 12 месяцев</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по ремонту и обслуживанию климатической техники
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-100 hover:border-blue-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">О компании</h2>
              <p className="text-lg text-gray-600">
                Мы специализируемся на ремонте климатической техники с 2010 года. Наша команда состоит из опытных мастеров, которые работают с ведущими мировыми брендами.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Сертифицированные мастера</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Оригинальные запчасти</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Гарантия на все работы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="text-gray-700">Выезд в день обращения</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Почему выбирают нас?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Быстрое реагирование</h4>
                    <p className="text-gray-600">Выезд мастера в течение 2 часов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Высокое качество</h4>
                    <p className="text-gray-600">Используем только качественные детали</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Официальная гарантия</h4>
                    <p className="text-gray-600">До 12 месяцев на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-blue-600">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Связаться с нами</h2>
            <p className="text-xl text-blue-100">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-blue-200" size={24} />
                  <div>
                    <div className="text-white font-semibold">+7 (XXX) XXX-XX-XX</div>
                    <div className="text-blue-200">Круглосуточно</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-blue-200" size={24} />
                  <div>
                    <div className="text-white font-semibold">Донецкая Народная Республика</div>
                    <div className="text-blue-200">Выезд по всей территории</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-blue-200" size={24} />
                  <div>
                    <div className="text-white font-semibold">info@donservis.ru</div>
                    <div className="text-blue-200">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Заказать звонок</CardTitle>
                <CardDescription>
                  Оставьте ваши контакты и мы перезвоним
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Проблема</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите неисправность"
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Snowflake" className="text-white" size={16} />
                </div>
                <span className="font-bold">DonServis</span>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт климатической техники в ДНР
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт кондиционеров</li>
                <li>Ремонт холодильников</li>
                <li>Профилактика</li>
                <li>Экстренный вызов</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Бренды</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Samsung</li>
                <li>LG</li>
                <li>Bosch</li>
                <li>Whirlpool</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>info@holodtech-dnr.ru</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DonServis. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;