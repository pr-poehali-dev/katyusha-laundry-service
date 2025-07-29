import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-yellow-500" />
              <h1 className="text-2xl font-bold text-slate-900">КАТЮША</h1>
            </div>
            <a href="#contacts" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Промышленная прачечная<br />
              <span className="text-yellow-500">с самыми низкими ценами</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Качественная стирка белья в Самаре. Забираем и доставляем бесплатно при заказе от 5 кг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacts" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Заказать стирку
              </a>
              <a href="#pricing" className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600">Профессиональная стирка любых видов белья</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Home" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Постельное белье</CardTitle>
                <CardDescription>Деликатная стирка постельного белья</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500 mb-2">100₽/кг</div>
                <p className="text-slate-600">Простыни, пододеяльники, наволочки</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Shirt" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Покрывала и пледы</CardTitle>
                <CardDescription>Объемные изделия требуют особого подхода</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500 mb-2">400₽/кг</div>
                <p className="text-slate-600">Одеяла, покрывала, пледы</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Особые изделия</CardTitle>
                <CardDescription>Индивидуальный подход к каждому изделию</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500 mb-2">По запросу</div>
                <p className="text-slate-600">Скатерти, шторы, ковры</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши преимущества</h2>
            <p className="text-xl text-slate-600">Почему выбирают именно нас</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Низкие цены</h3>
              <p className="text-slate-600">Самые доступные цены в городе без потери качества</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Бесплатная доставка</h3>
              <p className="text-slate-600">Забираем и доставляем при заказе от 5 кг</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Быстро</h3>
              <p className="text-slate-600">Готово через 1-2 дня в зависимости от объема</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Качество</h3>
              <p className="text-slate-600">Профессиональное оборудование и средства</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-slate-600">Прозрачное ценообразование</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-yellow-500 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Стоимость услуг</h3>
                <p className="text-yellow-100">Цены указаны за килограмм</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-slate-200">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Постельное белье</h4>
                      <p className="text-slate-600">Простыни, пододеяльники, наволочки</p>
                    </div>
                    <div className="text-2xl font-bold text-yellow-500">100₽/кг</div>
                  </div>
                  
                  <div className="flex justify-between items-center py-4 border-b border-slate-200">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Покрывала и пледы</h4>
                      <p className="text-slate-600">Одеяла, покрывала, пледы</p>
                    </div>
                    <div className="text-2xl font-bold text-yellow-500">400₽/кг</div>
                  </div>
                  
                  <div className="flex justify-between items-center py-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Скатерти, шторы, ковры</h4>
                      <p className="text-slate-600">Индивидуальный расчет</p>
                    </div>
                    <div className="text-2xl font-bold text-yellow-500">По запросу</div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Icon name="Truck" className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Бесплатная доставка при заказе от 5 кг</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white" id="contacts">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-slate-300">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Icon name="MapPin" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Адрес</h3>
                  <p className="text-slate-600">г. Самара, ул. Мальцева 3, цех 2</p>
                  <p className="text-slate-600">Принимаем белье с 8:00 до 20:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Icon name="Clock" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Время работы</h3>
                  <p className="text-slate-600">Ежедневно с 8:00 до 20:00</p>
                  <p className="text-slate-600">Без выходных</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Icon name="Phone" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Телефон</h3>
                  <p className="text-slate-600">+7 (999) 704-98-00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Icon name="Mail" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Электронная почта</h3>
                  <p className="text-slate-600">prachka_katya@mail.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Icon name="Truck" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Доставка</h3>
                  <p className="text-slate-600">Бесплатно при заказе от 5 кг</p>
                  <p className="text-slate-600">Забираем и привозим</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="h-6 w-6 text-yellow-500" />
                <h3 className="text-xl font-bold">КАТЮША</h3>
              </div>
              <p className="text-slate-400">Промышленная прачечная с самыми низкими ценами в Самаре</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-slate-400 mb-2">г. Самара, ул. Мальцева 3, цех 2</p>
              <p className="text-slate-400 mb-2">+7 (999) 704-98-00</p>
              <p className="text-slate-400">prachka_katya@mail.ru</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <p className="text-slate-400">Ежедневно с 8:00 до 20:00</p>
              <p className="text-slate-400">Без выходных</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">© 2025 Прачечная КАТЮША. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}