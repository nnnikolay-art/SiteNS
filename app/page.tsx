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

import kk7f3l from '../public/ProductImg/7F_3L_w_trans.png'
import kk7f5l from '../public/ProductImg/7F_5L_w_trans.png'
import kk8f5 from '../public/ProductImg/8F_5_w_trans.png'
import kkjay5f from '../public/ProductImg/JAY_5A_w_trans.png'
import kkjay10 from '../public/ProductImg/JAY_10_w_trans.png'

import kups from '../public/ProductImg/Kostil_UPS.jpg'
import k2 from '../public/ProductImg/Kostil2.jpg'
import k3 from '../public/ProductImg/Kostil3.jpg'
import hmain from '../public/ProductImg/HodunkiMain.jpg'

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


                <div className="underline text-2xl mt-2"> Кислородные концентраторы</div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">

                        <div className="bg-transparent p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                            <Image src={kk7f3l} width="300" height="300" alt="Кислородный концентратор Armed 7F-3L" ></Image>
                            <h2 className="text-xl font-bold mb-2">Armed 7F-3L</h2>
                            <p className="text-gray-600">Производительность: 3 литра в минуту</p>
                            <div className="flex">
                                <div className="w-1/3 h-1 bg-green-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-gray-400 h-16"></div>
                                <div className="w-1/3 h-1 bg-gray-400 h-16"></div>
                            </div>
                            <details>
                                <b>Концентратор кислорода Армед 7F-3L</b> выпускается с 2007 года и зарекомендовал себя как добротный и надежный "3-литровый" аппарат. Прибор выдает почти медицинский кислород на скорости потока от 1 до 3 л/мин.<br></br>
                                ​<br></br>
                                <b>ПРИНЦИП РАБОТЫ</b><br></br>
                                ​<br></br>
                                <b>Кислородный концентратор Армед 7F-3L</b>  работает по принципу физического разделения газов (кислорода, азота и проч.), содержащихся в воздухе.  Воздух буквально просеивается через специальные "молекулярные сита" (цеолит) и на выходе получается струя с концентрацией кислорода до 90%, тогда как в обычном воздухе концентрация кислорода не превышает 21%. Такая технология делает концентратор кислорода Армед 7F-3L практически безопасным в сравнении с обычными кислородными баллонами.<br></br>
                                <b>ПРОИЗВОДИТЕЛЬНОСТЬ</b> <br></br>
                                ​<br></br>
                                Кислородный концентратор Армед 7F-3L может производить от 1 до 3 литров воздушно-кислородной смеси в минуту с концентрацией кислорода 93%±3.<br></br>
                                <b>ВОЗМОЖНОСТИ</b><br></br>
                                ​<br></br>
                                <b>• Беспрерывная работа 24 часа в сутки от розетки 220В</b><br></br>
                                <b>• Тревожная сигнализация (зуммер) при отключении электричества</b><br></br>
                                <b>• Плавная регулировка объема воздушно-кислородного потока на выходе</b><br></br>
                                <b>• Имеется таймер (до 99 минут). По истечении заданного времени, прибор автоматически отключается</b><br></br>
                            </details>
                        </div>
                        <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                            <Image src={kk7f5l} width="300" height="300" alt="Кислородный концентратор Armed Armed 7F-5L"  ></Image>
                            <h2 className="text-xl font-bold mb-2">Armed 7F-5L</h2>
                            <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                            <div className="flex">
                                <div className="w-1/3 h-1 bg-blue-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-blue-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-gray-400 h-16"></div>
                            </div>
                            <details>
                                Концентратор кислорода <b>Армед 7F-3L</b> выпускается с 2007 года и зарекомендовал себя как добротный и надежный "3-литровый" аппарат. Прибор выдает почти медицинский кислород на скорости потока от 1 до 3 л/мин.<br></br>
                                ​<br></br>
                                <b>ПРИНЦИП РАБОТЫ</b><br></br>
                                ​<br></br>
                                Кислородный концентратор Армед 7F-3L  работает по принципу физического разделения газов (кислорода, азота и проч.), содержащихся в воздухе.  Воздух буквально просеивается через специальные "молекулярные сита" (цеолит) и на выходе получается струя с концентрацией кислорода до 90%, тогда как в обычном воздухе концентрация кислорода не превышает 21%. Такая технология делает концентратор кислорода Армед 7F-3L практически безопасным в сравнении с обычными кислородными баллонами.<br></br>
                                <b>ПРОИЗВОДИТЕЛЬНОСТЬ</b><br></br>
                                ​<br></br>
                                Кислородный концентратор Армед 7F-3L может производить от 1 до 3 литров воздушно-кислородной смеси в минуту с концентрацией кислорода 93%±3.<br></br>
                                <b>ВОЗМОЖНОСТИ</b><br></br>
                                ​<br></br>
                                <b>• Беспрерывная работа 24 часа в сутки от розетки 220В</b><br></br>
                                <b>• Тревожная сигнализация (зуммер) при отключении электричества</b><br></br>
                                <b>• Плавная регулировка объема воздушно-кислородного потока на выходе</b><br></br>
                                <b>• Имеется таймер (до 99 минут). По истечении заданного времени, прибор автоматически отключается</b><br></br>
                            </details>
                        </div>
                        <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                            <Image src={kk8f5} width="300" height="300" alt="Кислородный концентратор Armed Armed Armed 8F-5"  ></Image>
                            <h2 className="text-xl font-bold mb-2">Armed 8F-5</h2>
                            <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                            <div className="flex">
                                <div className="w-1/3 h-1 bg-blue-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-blue-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-gray-400 h-16"></div>
                            </div>
                            <details>
                                Полноценный пятилитровый концентратор, находящий широкое применение как в домашних, так и в стационарных условиях. Одно из преимуществ -  возможность использования концентратора как основного или резервного источника кислорода.<br></br>
                                ​<br></br>
                                <b>ПРИНЦИП РАБОТЫ</b><br></br>
                                ​<br></br>
                                <b>Кислородный концентратор Армед 8F-5</b> работает по принципу физического разделения газов (кислорода, азота и проч.), содержащихся в воздухе. Воздух буквально просеивается через специальные "молекулярные сита" (цеолит) и на выходе получается струя с концентрацией кислорода до 90%, тогда как в обычном воздухе концентрация кислорода не превышает 21%. Такая технология делает концентратор кислорода Армед 8F-5 практически безопасным в сравнении с обычными кислородными баллонами.<br></br>
                                <b>ПРОИЗВОДИТЕЛЬНОСТЬ</b><br></br>
                                ​<br></br>
                                <b>Кислородный концентратор Армед 8F-5</b> способен производить от 1 до 5 литров воздушно-кислородной смеси в минуту с концентрацией кислорода более 90%.<br></br>
                                При увеличении объема больше чем 5 л/мин, концентрация кислорода в вырабатываемой воздушно-кислородной смеси будет менее 90%.<br></br>
                                <b>ВОЗМОЖНОСТИ</b><br></br>
                                ​<br></br>
                                <b>• Может работать 24 часа в сутки от обычной розетки 220В</b><br></br>
                                <b> • Плавная регулировка объема воздушно-кислородного потока</b><br></br>
                                <b>• Встроен счетчик наработанного времени</b><br></br>
                                <b>• Аварийная сигнализация (зуммер) при экстренном отключении электричества</b><br></br>
                                <b>• Имеется индикатор электропитания и индикатор неисправности</b><br></br>
                            </details>
                        </div>
                        <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                            <Image src={kkjay5f} width="300" height="300" alt="Кислородный концентратор Longfian JAY-5A"  ></Image>
                            <h2 className="text-xl font-bold mb-2">Longfian JAY-5A</h2>
                            <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                            <div className="flex">
                                <div className="w-1/3 h-1 bg-blue-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-blue-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-gray-400 h-16"></div>
                            </div>
                            <details>
                                <b>Longfian JAY-5A</b>  - это концентратор кислорода нового поколения, выдающий О2 концентрации около 93% при настраиваемой производительности от нуля до пяти литров в минуту, оптимально подходящий как для лечения, так и для приготовления полезных кислородных коктейлей в домашних условиях.<br></br>
                                Полезные опции концентратора Longfian JAY-5A<br></br>
                                В аппарате продумано всё до мелочей: он компактный, имеет ЖК-экран с интуитивно-понятным управлением, его удобно перевозить по дому за счёт специальных колёсиков, он снабжён парой сменных фильтров, канюлей, всеми необходимыми приспособлениями для оксигенотерапии, а также сумкой для их хранения.<br></br>
                                Принцип функционирования концентратора Лонгфиан Джей 5А<br></br>
                                В концентраторе Longfian JAY-5A реализован метод короткоцикловой адсорбции (PSA), основанный на направлении компрессором отфильтрованного атмосферного воздуха на колонки, содержащие порошковый адсорбент ("молекулярное сито"), основной задачей которых служит удаление азота. Далее О2 проходит бактериальную фильтрацию и подаётся посредством системы выхода пользователю.<br></br>
                                Плюсы для использования дома<br></br>
                                JAY-5A работает тихо, имеет незначительный уровень потребления электроэнергии и рассчитан на долгое время использования, благодаря чему данный аппарат – это идеальное решение для дома. Управлять концентратором очень просто, в комплекте Вы найдёте подробное руководство пользователя, а встроенная аварийная сигнализация известит о сбоях технического характера в процессе эксплуатации.<br></br>
                                ​
                                <b>Концентрация кислорода на выходе:</b> 93%<br></br>
                                <b>Очень низкий уровень шума</b><br></br>
                                <b>Жидкокристаллический экран</b><br></br>
                                <b>Вырабатывает от 0 до 5 литров О2</b><br></br>
                                <b>Несколько уровней фильтрации воздуха</b><br></br>
                                <b>Лёгкость и высокая эргономика</b><br></br>
                                <b>Подходит для эксплуатации дома</b><br></br>
                                <b>Вес:</b> 16 кг<br></br>
                            </details>
                        </div>
                        <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                            <Image src={kkjay10} width="300" height="300" alt="Кислородный концентратор Longfian JAY-10" ></Image>
                            <h2 className="text-xl font-bold mb-2">Longfian JAY-10</h2>
                            <p className="text-gray-600">Производительность: 10 литров в минуту</p>
                            <div className="flex">
                                <div className="w-1/3 h-1 bg-red-600 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-red-600 h-16 ml-auto"></div>
                                <div className="w-1/3 h-1 bg-red-600 h-16"></div>
                            </div>
                            <details>
                                Кислородный концентратор <b>Longfian JAY-10</b><br></br>
                                ​<br></br>
                                Концентрация О2 до 10 л/мин - 90% (до 9 л/мин - 93%)<br></br>
                                Высокое качество и надёжность<br></br>
                                Небольшая шумность даже ночью<br></br>
                                Гарантия производителя - <b>100 тысяч часов работы</b><br></br>
                                ЖК-дисплей и система индикаций<br></br>
                                Эргономичность:  <b>колёсики улучшают мобильность</b><br></br>
                                Подходит для применения дома<br></br>
                                <b>JAY-10</b> - это мощный и качественный кислородный концентратор для дома, способный выдавать высокую концентрацию кислорода (до десяти литров в минуту). Согласно заверениям разработчика, чистота О2 при максимальной концентрации – девяносто процентов. Если же выбран режим до девяти литров в минуту, то она будет равна приблизительно девяносто трём процентам.<br></br>
                                Высочайшее качество исполнения<br></br>
                                Аппарат произведён с использованием только надёжных и проверенных комплектующих, что гарантирует долгий срок службы и удобство применения. Компрессор концентратора выделяется своей высокой износоустойчивостью. Так, производитель гарантирует сто тысяч часов рабочего ресурса модели JAY-10, в то время как один рабочий цикл аппарата рассчитан на девяносто девять часов непрерывной эксплуатации.<br></br>
                                Комфорт при использовании концентратора JAY-10<br></br>
                                Джей 10 работает очень тихо, что создаст должный уровень комфорта даже во время сна и отдыха. На жидкокристаллическом экране кислородного концентратора отображаются следующие показателя: выбранное время, время работы текущей сессии, а также совокупное время работы аппарата.<br></br>
                                Система индикаций концентратора JAY-10<br></br>
                                Аппарат оснащён некоторыми полезными датчиками:<br></br>
                                ​<br></br>
                                индикатором, загорающимся после трёх тысяч часов эксплуатации;<br></br>
                                температурный датчик срабатывает при увеличении рабочей температуры сверх пятидесяти градусов по Цельсию;<br></br>
                                загорание красного индикатора сигнализирует о падении уровня концентрации О2 ниже 82%<br></br>
                                Комплект поставки кислородного концентратора JAY-10:<br></br>
                                ​<br></br>
                                <b>Концентратор кислорода JAY-10</b><br></br>
                                <b>Канюля кислородная</b> - 2 шт.<br></br>
                                <b>Увлажнитель кислорода</b><br></br>
                                <b>Фильтр грубой очистки запасной</b> - 2 шт.<br></br>
                                <b>Фильтр тонкой очистки запасной</b> - 2 шт.<br></br>
                                <b>Инструкция по эксплуатации</b><br></br>
                                <b>Гарантийный талон</b><br></br>
                            </details>
                        </div>

                </div>
                <div className="underline text-2xl mt-2">Средства реабилитации</div>
                <div className="grid  sm:grid-cols-3 grid-cols-1 gap-4 flex ">

                    <div className="bg-transparent w-auto h-auto p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                        <Image src={kups} width="200" height="200" alt="Костыли с устройством против скольжения" ></Image>
                        <h2 className="text-xl font-bold mb-2">Костыли с устройством против скольжения</h2>
                        <p className="text-gray-600">Продажа: 2 490 ₽ </p>
                        <p className="text-gray-600">Прокат: 490 ₽</p>
                    </div>
                    <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                        <Image src={k2} width="200" height="200" alt="Костыли металлические"   ></Image>
                        <h2 className="text-xl font-bold mb-2">Костыли металлические</h2>
                        <p className="text-gray-600">Продажа: 1 980 ₽ </p>
                        <p className="text-gray-600">Прокат: 390 ₽</p>
                    </div>
                    <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                        <Image src={k3} width="250" height="250" alt="Костыли локевые"   ></Image>
                        <h2 className="text-xl font-bold mb-2">Костыли локевые</h2>
                        <p className="text-gray-600">Продажа: 2 490 ₽  </p>
                        <p className="text-gray-600">Прокат: 490 ₽</p>
                    </div>
                    <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                        <Image src={hmain} width="200" height="200" alt="Ходунки складные"    ></Image>
                        <h2 className="text-xl font-bold mb-2">Ходунки складные</h2>
                        <p className="text-gray-600">Продажа: 2 990 ₽  </p>
                        <p className="text-gray-600">Прокат: 490 ₽</p>
                    </div>


                </div>



                <h2 className="text-2xl text-black lg:text-3xl font-semibold mb-8 ">Множество других товаров можно найти по городам:</h2>
                <div className='columns-1 mb-2'>
                    <div className="w-full text-black columns-3  ">
                        <Link href="dataProducts/Izhevsk" className="text-xl font-semibold   ">
                            <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={izhevskCity} width="75" height="75" alt="izh"></Image>
                            <p className="text-2xl">Ижевск</p>
                        </Link><br></br>
                        <Link href="dataProducts/Krasnodar" className="text-xl font-semibold  ">
                            <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={KrasnodarCity} width="75" height="75" alt="Krasnodar"></Image>
                            <p className="text-2xl">Краснодар</p>
                        </Link><br></br>
                        <Link href="dataProducts/Ekaterinburg" className="text-xl font-semibold  ">
                            <Image className="rounded-lg shadow-lg transition-all duration-200 hover:scale-125" src={EkaterCity} width="75" height="75"  alt="ekatenburg"></Image>
                            <p className="text-2xl">Екатеринбург</p>
                        </Link><br></br>
                    </div>
                </div>




                <h2 className="text-2xl text-black lg:text-3xl font-semibold ">Выберете на предпочитаемый способ поиска товара:</h2>
                <Link href='catalog' className="ml-5  inline-block font-bold py-2 px-4 border-2 border-blue-700 rounded transition-all duration-200 hover:scale-125 ">
                    <p>► Поиск товара по категории</p>
                </Link>

                <Link href='dataProducts/99' className="ml-5  inline-block font-bold py-2 px-4 border-2 border-blue-700 rounded transition-all duration-200 hover:scale-125 ">
                    <p>► Показать весь ассортимент товара</p>
                </Link>

                <h2 className="text-2xl text-black lg:text-3xl font-semibold mt-10">Преимущества компании:</h2>
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
