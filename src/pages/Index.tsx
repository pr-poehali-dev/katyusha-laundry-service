import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      laundry_type: formData.get('laundry_type'),
      weight: formData.get('weight'),
      address: formData.get('address')
    };

    const subject = 'Заказ стирки с сайта';
    const body = `Новый заказ стирки:

Имя: ${data.name}
Телефон: ${data.phone}
Тип белья: ${data.laundry_type}
Вес: ${data.weight} кг
Адрес: ${data.address}`;
    
    const mailtoLink = `mailto:prachka_katya@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      window.location.href = mailtoLink;
      setSubmitMessage('Заказ отправлен! Проверьте свой почтовый клиент.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitMessage('Произошла ошибка. Попробуйте еще раз или позвоните нам.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="h-8 w-8 text-yellow-500" />
              <h1 className="text-2xl font-bold text-slate-900">КАТЮША</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Прайс</a>
              <a href="#contacts" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </nav>
            <Button onClick={openModal} className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Промышленная прачечная
                <span className="text-yellow-500"> КАТЮША</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Самые низкие цены на рынке Самары. Безопасные моющие средства, 
                экспресс-стирка 24 часа, бесплатная доставка от 5 кг
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={openModal} size="lg" className="bg-yellow-500 hover:bg-yellow-600">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Заказать стирку
                </Button>
                <Button onClick={scrollToOrder} size="lg" variant="outline">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/7983e6f8-de3a-4243-8c2c-8e36aab667c1.jpg" 
                alt="Промышленная прачечная КАТЮША" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Профессиональная стирка с использованием современного оборудования
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Bed" className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Постельное белье</CardTitle>
                <CardDescription>Деликатная стирка постельного белья</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500 mb-2">100 ₽/кг</div>
                <p className="text-slate-600">Самая низкая цена на рынке</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Sofa" className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Покрывала и пледы</CardTitle>
                <CardDescription>Бережная стирка объемных изделий</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500 mb-2">400 ₽/кг</div>
                <p className="text-slate-600">Качественная обработка</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shirt" className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle>Скатерти, шторы, ковры</CardTitle>
                <CardDescription>Индивидуальный подход к каждому изделию</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500 mb-2">По запросу</div>
                <p className="text-slate-600">Цена рассчитывается индивидуально</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Наши преимущества
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Бесплатная доставка</h3>
              <p className="text-slate-600">При заказе от 5 килограмм</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Быстрая обработка</h3>
              <p className="text-slate-600">Стирка и сушка в течение 24 часов</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Безопасные средства</h3>
              <p className="text-slate-600">Безвредные для здоровья</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Без выходных</h3>
              <p className="text-slate-600">Работаем ежедневно 8:00-20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Прайс-лист
            </h2>
            <p className="text-xl text-slate-600">Честные цены без скрытых платежей</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border-2 border-yellow-200 rounded-lg">
                <Icon name="Bed" className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Постельное белье</h3>
                <div className="text-3xl font-bold text-yellow-500 mb-2">100 ₽</div>
                <p className="text-slate-600">за килограмм</p>
                <p className="text-sm text-slate-500 mt-2">Самая низкая цена на рынке</p>
              </div>

              <div className="text-center p-6 border-2 border-yellow-200 rounded-lg">
                <Icon name="Sofa" className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Покрывала и пледы</h3>
                <div className="text-3xl font-bold text-yellow-500 mb-2">400 ₽</div>
                <p className="text-slate-600">за килограмм</p>
                <p className="text-sm text-slate-500 mt-2">Бережная стирка объемных изделий</p>
              </div>

              <div className="text-center p-6 border-2 border-yellow-200 rounded-lg">
                <Icon name="Shirt" className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Скатерти, шторы, ковры</h3>
                <div className="text-3xl font-bold text-yellow-500 mb-2">По запросу</div>
                <p className="text-slate-600">индивидуально</p>
                <p className="text-sm text-slate-500 mt-2">Цена рассчитывается индивидуально</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-slate-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 rounded-full p-3">
                    <Icon name="MapPin" className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Адрес</h3>
                    <p className="text-slate-600">г. Самара, ул. Мальцева 3, корпус 1</p>
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

            <div id="order" className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Заказать стирку</h3>
              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Тип белья</label>
                  <select 
                    name="laundry_type" 
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Выберите тип белья</option>
                    <option value="Постельное белье - 100₽/кг">Постельное белье - 100₽/кг</option>
                    <option value="Покрывала и пледы - 400₽/кг">Покрывала и пледы - 400₽/кг</option>
                    <option value="Скатерти, шторы, ковры - по запросу">Скатерти, шторы, ковры - по запросу</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Примерный вес (кг)</label>
                  <input 
                    type="number" 
                    name="weight" 
                    min="1" 
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Адрес для забора/доставки</label>
                  <textarea 
                    name="address" 
                    rows={3}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                    placeholder="Укажите адрес для забора и доставки белья"
                  ></textarea>
                </div>
                {submitMessage && (
                  <div className={`p-4 rounded-md text-sm ${
                    submitMessage.includes('отправлен') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправка...' : 'Заказать стирку'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-slate-400 mb-2">г. Самара, ул. Мальцева 3, корпус 1</p>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Заказать стирку</h3>
              <p className="text-slate-600 mb-6">Свяжитесь с нами любым удобным способом</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <Icon name="Phone" className="h-5 w-5 text-green-600" />
                  <span className="text-lg font-semibold text-green-700">+7 (999) 704-98-00</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                  <span className="text-lg font-semibold text-blue-700">prachka_katya@mail.ru</span>
                </div>
              </div>
              
              <button 
                onClick={closeModal}
                className="mt-6 bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}