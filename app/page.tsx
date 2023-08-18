import Image from 'next/image'
import Navbar from '@/app/Component/Navbar'
import pict24 from '../public/pngwing.com.png'
import freeTalking from '../public/FreeTalking.png'
import lowCost from '../public/LowCost.png'
import moneyTime from '../public/money_clock.svg'

import izhevskCity from '../public/Izhevsk.png'
import KrasnodarCity from '../public/Krasnodar.png'
import EkaterCity from '../public/Ekaterenburg.png'

import CategoryBtn from '../public/CategoryButton.png'
import ListBtn from '../public/ListButton.png'



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
                 h-full
                 fill/>
        </div>
      <div className="relative z-10 ">
          <h1 className="text-blue-900 text-black  text-3xl font-semibold text-center">О компании</h1>


            <div className="container text-black  font-semibold  mx-auto px-4">
                <p className="text-2xl text-black text-center  ">Добро пожаловать в нашу компанию ЦентрМедПрокат!</p>
                <p>Предлагаем широкий выбор медицинского оборудования для аренды и продажи:</p>

                <div className="text-black font-semibold mb-4">
                    <p> ✔Технических средств реаблитации: Костыли, ходунки, трости</p>
                    <p> ✔Приборов: Пульсоксиметры, Кислородные концентраторы(3,5,10 литров\мин.), СИПАП аппараты, Алмаг</p>
                    <p> ✔Специальные кресла, противопролежневые матрасы</p>
                    <p> ✔Различные комплектующие к средствам реабилитации</p>
                    <p> ✔Кислородные баллончики</p>
                    <p> ✔и многое другое</p>
                </div>

            </div>
            <div className="container mx-auto px-4 mb-4">


                <h2 className="text-2xl text-black lg:text-3xl font-semibold mb-8 ">Нажмите на свой город:</h2>
                <div className='columns-1 mb-2'>
                    <div className="w-full text-black px-4 mb-8 sm:columns-3 columns-1 ">
                            <Link href="dataProducts/Izhevsk" className="text-xl font-semibold mb-4 mx-1  ">
                                <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={izhevskCity} width="200" height="200" alt="izh"></Image>
                                <p className="text-2xl">Ижевск</p>
                            </Link><br></br>
                            <Link href="dataProducts/Krasnodar" className="text-xl font-semibold mb-4 mx-1">
                                <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={KrasnodarCity} width="200" height="200" alt="Krasnodar"></Image>
                                <p className="text-2xl">Краснодар</p>
                            </Link><br></br>
                            <Link href="dataProducts/Ekaterinburg" className="text-xl font-semibold mb-4 mx-1">
                                <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={EkaterCity} width="200" height="200"  alt="ekatenburg"></Image>
                                <p className="text-2xl">Екатеринбург</p>
                            </Link><br></br>
                    </div>
                </div>

                <h2 className="text-2xl text-black lg:text-3xl font-semibold mb-8 ">Нажмите на предпочитаемый способ поиска товара:</h2>
                <Link href='catalog' className="ml-5 mt-5 inline-block font-bold py-2 px-4 rounded transition-all duration-200 hover:scale-125 ">
                    <Image className="rounded-lg" src={CategoryBtn} width="150" height="150" alt="category"></Image>
                    <p>Поиск товара по категории</p>
                </Link>

                <Link href='dataProducts/99' className="ml-5  mt-5 inline-block  font-bold py-2 px-4 rounded transition-all duration-200 hover:scale-125 ">
                    <Image className="rounded-lg" src={ListBtn} width="150" height="150" alt="assortiment"></Image>
                    <p>Показать весь ассортимент товара</p>
                </Link>

                <h2 className="text-2xl text-black lg:text-3xl font-semibold">Преимущества компании:</h2>
                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/4 mb-8">
                        <div className="bg-gray-200 text-center  text-black  py-1 px-1 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Бесплатная консультация</h3>

                            <Image src={freeTalking} className="mx-auto" width="120" height="120" alt="Бесплатная консультация"></Image>
                        </div>
                    </div>


                    <div className="w-full md:w-1/4 px-4 mb-8">
                        <div className="bg-gray-200 text-black py-1 px-1  rounded-lg shadow-lg">
                            <h3 className="text-xl text-center  font-semibold mb-4">Работаем круглосуточно</h3>
                            <Image src={pict24} className="mx-auto" width="150" height="150" alt="Работаем круглосуточно"></Image>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-4 mb-8">
                        <div className="bg-gray-200 text-black py-1 px-1  rounded-lg shadow-lg">
                            <h3 className="text-xl text-center  font-semibold mb-4">Можно взять товар в аренду</h3>
                            <Image src={lowCost} className="mx-auto" width="150" height="150" alt="Можно взять товар в аренду"></Image>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-4 mb-8">
                        <div className="bg-gray-200  items-center py-1 px-1  text-black rounded-lg shadow-lg">
                            <h3 className="text-xl text-center font-semibold mb-4">Возможно взять товар в рассрочку</h3>
                            <Image src={moneyTime} className="mx-auto" width="150" height="150" alt="Возможно взять товар в рассрочку"></Image>
                        </div>
                    </div>


                </div>

            </div>



      </div>
        </div>
    </main>
  )
}
