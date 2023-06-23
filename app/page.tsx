import Image from 'next/image'
import Navbar from '@/app/Component/Navbar'
import logo from '../public/2.jpg'
import Link from 'next/link'
import Head from "next/head";
import React from "react";

export default function Home() {


  return (
    <main>
        <head>
            <meta
                name="yandex-verification"
                content="f21e4eb3c6dc3921"
            />
        </head>
        <Head>




            <title>
                ЦентрМедПрокат. Средства реаблитации в аренду и продажу
            </title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        </Head>


        <div className="bg-gray-100 py-10">
        <div className="absolute inset-0">
             <Image
                 src={logo}
                 alt='Логотип'
                 className='sm:blur-none blur'
                 fill/>
        </div>
      <div className="relative z-10 ">
          <h1 className="text-blue-900 text-3xl font-semibold text-center">О компании</h1>


            <div className="container font-semibold  mx-auto px-4">
                <p className="text-2xl text-center ">Добро пожаловать в нашу компанию ЦентрМедПрокат!</p>
                <p>Предлагаем широкий выбор медицинского оборудования для аренды и продажи технических средств реаблитации</p>


              </div>


            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8">Наши преимущества</h2>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-500 text-white py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Высокое качество товаров</h3>
                    <p className="text-gray-200 leading-relaxed">Мы предоставляем качественные товары у известных мировых брендов.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-200 text-black py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Команда опытных специалистов</h3>
                    <p className="text-gray-600 leading-relaxed">Наша команда состоит из опытных и высококвалифицированных специалистов, которые готовы помочь вам в любых вопросах.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-500 text-white py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Индивидуальный подход к каждому клиенту</h3>
                    <p className="text-gray-200 leading-relaxed">Мы ищем индивидуальный подход к каждому клиенту, учитывая его индивидуальные потребности и цели.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-200 text-black  py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Гибкая ценовая политика</h3>
                    <p className="text-gray-600 leading-relaxed">Оптимальное соотношение цены и качества на рынке.</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-blue-500 text-white py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Широкий ассортимент товаров</h3>
                    <p className="text-gray-200 leading-relaxed">Мы стараемся удовлетворить любые потребности наших клиентов</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="bg-gray-200 text-black e py-10 px-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Работаем круглосуточно</h3>
                    <p className="text-gray-600  leading-relaxed">Для наших клиентов мы работаем круглые сутки без выходных и обеда</p>
                  </div>
                </div>
              </div>

                <h2 className="text-2xl text-black lg:text-3xl font-semibold mb-8">Работаем в городах</h2>
                <div className='columns-1'>
                    <div className="w-full text-black  px-4 mb-8">
                            <p className="text-xl font-semibold mb-4">Ижевск</p>
                            <p className="text-xl font-semibold mb-4">Краснодар</p>
                            <p className="text-xl font-semibold mb-4">Екатеринбург</p>
                    </div>
                </div>

                <h2 className="text-2xl text-black lg:text-3xl font-semibold mb-8">Наш ассортимент</h2>
                <p className="text-xl font-semibold mb-4">- Костыли, ходунки, трости</p>
                <p className="text-xl font-semibold mb-4">- Пульсоксиметры</p>
                <p className="text-xl font-semibold mb-4">- Кислородные концентраторы с производительностью 3,5,10 литров \ мин.</p>
                <p className="text-xl font-semibold mb-4">- СИПАП аппараты</p>
                <p className="text-xl font-semibold mb-4">- Алмаг</p>
                <p className="text-xl font-semibold mb-4">- Специальные кресла, матрасы</p>
                <p className="text-xl font-semibold mb-4">- Комплектующие</p>
                <p className="text-xl font-semibold mb-4">- Кислородные баллончики</p>
                <p className="text-xl font-semibold mb-4">- и многое другое</p>

                <p className="text-xl font-semibold mb-4">Можете ознакомиться с нашими товарами:</p>

                <Link href='catalog' className="ml-5 mt-5 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">Поиск товара по категории</Link>
                <Link href='dataProducts/5' className="ml-5  mt-5 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">Показать весь ассортимент товара</Link>

            </div>



      </div>
        </div>
    </main>
  )
}
