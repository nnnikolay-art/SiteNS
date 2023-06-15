import Image from 'next/image'
import Navbar from '@/app/Component/Navbar'
import logo from '../public/2.jpg'

export default function Home() {
  return (
    <main>
        <div className="bg-gray-100 py-10">
        <div className="absolute inset-0">
             <Image
                 src={logo}
                 alt='Картинка'
                 className='sm:blur-none blur'
                 fill/>
        </div>
      <div className="relative z-10 ">
          <h1 className="text-blue-900 text-3xl font-semibold text-center">О компании</h1>


            <div className="container font-semibold  mx-auto px-4">
                <p className="text-2xl text-center ">Добро пожаловать в нашу компанию ЦентрМедПрокат!</p>
                <p>- Мы предлагаем широкий выбор медицинского оборудования для аренды и продажи, включая специальные матрасы, Кресла для людей с дополнительными потребностями, пульсоксиметры, СИПАП аппараты и кислородные концентраторы и многое другое.</p>

                <p>- Наша команда действует внимательно и заботливо, обеспечивая максимально комфортные условия работы с нашими клиентами.</p>
                <p>Спасибо, что рассмотрели нашу компанию медицинского проката.</p>
                <p>Мы надеемся на возможность сотрудничества и готовы ответить на все ваши вопросы, связанные с нашими услугами.</p>


              </div>


            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8">Наши преимущества</h2>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-400 text-white py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Высокое качество товаров</h3>
                    <p className="text-gray-200 leading-relaxed">Мы предоставляем качественные товары у известных мировых брендов.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-200 py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Команда опытных специалистов</h3>
                    <p className="text-gray-600 leading-relaxed">Наша команда состоит из опытных и высококвалифицированных специалистов, которые готовы помочь вам в любых вопросах.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-400 text-white py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Индивидуальный подход к каждому клиенту</h3>
                    <p className="text-gray-200 leading-relaxed">Мы ищем индивидуальный подход к каждому клиенту, учитывая его индивидуальные потребности и цели.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-200  py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Гибкая ценовая политика</h3>
                    <p className="text-gray-600 leading-relaxed">Оптимальное соотношение цены и качества на рынке.</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-400 text-white py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Широкий ассортимент товаров</h3>
                    <p className="text-gray-200 leading-relaxed">Мы стараемся удовлетворить любые потребности наших клиентов</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-200 e py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Работаем круглосуточно</h3>
                    <p className="text-gray-600  leading-relaxed">Для наших клиентов мы работаем круглые сутки без выходных и обеда</p>
                  </div>
                </div>
              </div>

                <h2 className="text-2xl lg:text-3xl font-semibold mb-8">Работаем в городах</h2>
                <div className='lg:columns-3 sm:columns-1'>
                    <div className="w-full  px-4 mb-8">
                        <div className="bg-blue-700 text-white py-10 px-8 rounded-lg shadow-lg">
                            <h3 className="text-xl text-center font-semibold mb-4">Ижевск</h3>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-8">
                        <div className="bg-blue-700 e text-white py-10 px-8 rounded-lg shadow-lg">
                            <h3 className="text-xl text-center font-semibold mb-4">Екатеринбург</h3>
                        </div>
                    </div>
                    <div className="w-full px-4 mb-8">
                        <div className="bg-blue-700 e text-white py-10 px-8 rounded-lg shadow-lg">
                            <h3 className="text-xl text-center font-semibold mb-4">Краснодар</h3>
                        </div>
                    </div>
                </div>


            </div>



      </div>
        </div>
    </main>
  )
}
