"use client"

import Image from 'next/image'
import Navbar from '@/app/Component/Navbar'
import pict24 from '../public/pngwing.com.png'
import freeTalking from '../public/FreeTalking.png'
import lowCost from '../public/LowCost.png'
import moneyTime from '../public/money_clock.svg'

import izhevskCity from '../public/Izhevsk.png'
import KrasnodarCity from '../public/Krasnodar.png'
import EkaterCity from '../public/Ekaterenburg.png'

import ListOxy from '@/app/Component/ListOxy'
import ReabStuff from '@/app/Component/ReabStuff'
import SearchBar from '@/app/Component/SearchBar'

import srIcon from '../public/ProductImg/SR_icon_w_trans.png'

import CategoryBtn from '../public/CategoryButton.png'
import ListBtn from '../public/ListButton.png'

import kk7f3l from '../public/ProductImg/7F_3L_w_trans.png'
import kk7f5l from '../public/ProductImg/7F_5L_w_trans.png'
import kk8f5 from '../public/ProductImg/8F_5_w_trans.png'
import kkjay5f from '../public/ProductImg/JAY_5A_w_trans.png'
import kkjay10 from '../public/ProductImg/JAY_10_w_trans.png'

import kups from '../public/ProductImg/Kostil_UPS.jpg'
import k2 from '../public/ProductImg/Kostil2_w_trans.png'
import k3 from '../public/ProductImg/Kostil3.jpg'
import hmain from '../public/ProductImg/HodunkiMain.jpg'

import logo from '../public/2.jpg'
import Link from 'next/link'
import Head from "next/head";
import React from "react";

import { useState } from 'react';



export default function Home() {


        const [isExpanded, setIsExpanded] = useState(false);

        const [isExpandedReab, setIsExpandedRReab] = useState(false);

        const handleToggle = () => {
            setIsExpanded(!isExpanded);
            if (isExpanded == true)
            {
                setIsExpandedRReab(false)
            }

        };

        const handleToggleReab = () => {
            setIsExpandedRReab(!isExpandedReab);

            if (isExpandedReab == true)
            {
                setIsExpanded(false)
            }
        };

    const handleReturn = () => {
        setIsExpandedRReab(false);
        setIsExpanded(false);

    };
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
                ЦентрМедПрокат. Медицинские товары в аренду и продажу
            </title>
            <meta name="description" content="Предлагаем аренду и продажу медицинского оборудования высокого качества в Ижевске. Свяжитесь с нами уже сегодня!" />
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
          <Link href="tel:+7 951 191-11-11" className="my-5 text-blue-950 text-2xl mx-1 text-center underline">
              <div>Телефон: +7 951 191-11-11 </div>
          </Link>
          <SearchBar/>


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
            <div className="container mx-auto px-4 mb-4 ">
                <button onClick={handleReturn} className={(isExpanded || isExpandedReab ? "visible " : " invisible h-1" )} >
                    <div className="text-2xl border-blue-700 ext-black hover:scale-105 text-black" >⟲ Назад к выбору категории</div>
                </button>
                <div className={"text-lg font-bold text-black"+ (isExpanded || isExpandedReab ? " invisible h-1 " : " visible" )} >Наиболее востребованные категории товаров:</div>
                <div className={"columns-2 flex  shadow-lg " + (isExpanded || isExpandedReab ? " invisible h-1 " : " visible" )} >
                    <div className="border gap-3 ml-2 t">
                        <button onClick={handleToggle}>
                            <Image src={kk8f5} width="260" height="260" alt="Кислородные концентраторы" ></Image>
                            <div className="text-sm mt-2 bottom-auto my-auto text-black"> Кислородные концентраторы</div>
                            <div className="border border-blue-700 rounded-lg text-sm font-bold bg-blue-200 my-1">Открыть</div>
                        </button>
                    </div>

                    <div className="border gap-3 ml-2 ">
                        <button onClick={handleToggleReab} >
                            <Image src={srIcon} width="260" height="260" alt="Средства реабилитации" ></Image>
                            <div className="text-sm mt-2  my-auto text-black"> Средства реабилитации</div>
                            <div className="border border-blue-700 rounded-lg text-sm font-bold bg-blue-200 my-1">Открыть</div>
                        </button>
                    </div>



                </div>

                <div
                    style={{
                        height: isExpandedReab ? 'auto' : '0',
                        opacity: isExpandedReab ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'height 0.7s ease, opacity 0.7s ease',
                    }}
                >
                    {/* Содержимое разворачивающегося элемента */}
                    <ReabStuff/>
                </div>

                <div
                    style={{
                        height: isExpanded ? 'auto' : '0',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'height 0.7s ease, opacity 0.7s ease',
                    }}
                >
                    {/* Содержимое разворачивающегося элемента */}
                    <ListOxy/>
                </div>

                <Link href="/dataProducts/Izhevsk">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl">
                    ➦ Показать все товары
                </button>
                </Link>
                {/*
                <h2 className="text-2xl text-black lg:text-3xl font-semibold mb-8 ">Множество других товаров можно найти по городам:</h2>
                <div className='columns-1 mb-2'>
                    <div className="w-full text-black sm:columns-3 columns-3  ">
                        <Link href="dataProducts/Izhevsk" className="text-xl font-semibold   ">
                            <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={izhevskCity} width="75" height="75" alt="izh"></Image>
                            <p className="text-2xl">Ижевск</p>
                        </Link><br></br>
                        <Link href="dataProducts/Krasnodar" className="text-xl font-semibold   ">
                            <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={KrasnodarCity} width="75" height="75" alt="Krasnodar"></Image>
                            <p className="text-2xl">Краснодар</p>
                        </Link><br></br>
                        <Link href="dataProducts/Ekaterinburg" className="text-xl font-semibold invisible  ">
                            <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={EkaterCity} width="75" height="75"  alt="ekatenburg"></Image>
                            <p className="text-2xl">Екатеринбург</p>
                        </Link><br></br>
                    </div>
                </div>
                */}

                <h2 className="text-2xl text-black lg:text-3xl font-semibold mt-10">Преимущества компании:</h2>
                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 mb-8">
                        <div className="bg-gray-200 text-center  text-black  py-1 px-1 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Бесплатная консультация</h3>

                            <Image src={freeTalking} className="mx-auto" width="120" height="120" alt="Бесплатная консультация"></Image>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-gray-200 text-black py-1 px-1  rounded-lg shadow-lg">
                            <h3 className="text-xl text-center  font-semibold mb-4">Можно взять товар в аренду</h3>
                            <Image src={lowCost} className="mx-auto" width="150" height="150" alt="Можно взять товар в аренду"></Image>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-gray-200  items-center py-1 px-1  text-black rounded-lg shadow-lg">
                            <h3 className="text-xl text-center font-semibold mb-4">Возможно взять товар в рассрочку</h3>
                            <Image src={moneyTime} className="mx-auto" width="150" height="150" alt="Возможно взять товар в рассрочку"></Image>
                        </div>
                    </div>


                </div>
                <Link href="tel:+7 951 191-11-11" className="text-center text-blue-950 text-2xl underline">
                    <div> Телефон: +7 951 191-11-11</div>
                </Link>

            </div>



      </div>
        </div>
    </main>
  )
}
