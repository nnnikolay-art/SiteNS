import React from 'react';
import Image from "next/image";
import kk7f3l from "../../public/ProductImg/7F_3L_w_trans.png";
import kk7f5l from "../../public/ProductImg/7F_5L_w_trans.png";
import kk8f5 from "../../public/ProductImg/8F_5_w_trans.png";
import kkjay5f from "../../public/ProductImg/JAY_5A_w_trans.png";
import kkjay10 from "../../public/ProductImg/LongFian10.jpg";
import Armed7f5c from "../../public/ProductImg/Armed7f-5c.jpeg";


import { useSpring, animated } from '@react-spring/web';

const ListOxy = () => {


    const [isVisible, setIsVisible] = React.useState(false);

    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        config: { duration: 1500 },
    });

    const propsLine = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        config: { duration: 1500 },
    });

    React.useEffect(() => {
        setIsVisible(true);
    }, []);



    return (
        <animated.div style={props} >
        <div>

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 text-black">

                <div className="bg-transparent p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={kk7f3l} width="200" height="200" alt="Кислородный концентратор Armed 7F-3L" ></Image>
                    <h2 className="text-xl font-bold mb-2 text-black">Armed 7F-3L</h2>
                    <p className="text-gray-600">Производительность: 3 литра в минуту</p>
                    <div className="flex">
                        <div className="w-1/3 h-1 bg-green-600 ml-auto"></div>
                        <div className="w-1/3 h-1 bg-gray-400 "></div>
                        <div className="w-1/3 h-1 bg-gray-400 "></div>
                    </div>

                    <p className="text-gray-600"><b>Прокат (Неделя):</b> 1 490 ₽ </p>
                    <p className="text-gray-600"><b>Прокат (Месяц):</b> 2 990 ₽ \ месяц</p>
                    <details>
                        <b>Концентратор кислорода Армед 7F-3L</b> выпускается с 2007 года и зарекомендовал себя как добротный и надежный &quot3-литровый&quot аппарат. Прибор выдает почти медицинский кислород на скорости потока от 1 до 3 л/мин.<br></br>
                        <br></br>
                        <b>ПРИНЦИП РАБОТЫ</b><br></br>
                        <br></br>
                        <b>Кислородный концентратор Армед 7F-3L</b>  работает по принципу физического разделения газов (кислорода, азота и проч.), содержащихся в воздухе.  Воздух буквально просеивается через специальные &quotмолекулярные сита&quot (цеолит) и на выходе получается струя с концентрацией кислорода до 90%, тогда как в обычном воздухе концентрация кислорода не превышает 21%. Такая технология делает концентратор кислорода Армед 7F-3L практически безопасным в сравнении с обычными кислородными баллонами.<br></br>
                        <b>ПРОИЗВОДИТЕЛЬНОСТЬ</b> <br></br>
                        <br></br>
                        Кислородный концентратор Армед 7F-3L может производить от 1 до 3 литров воздушно-кислородной смеси в минуту с концентрацией кислорода 93%±3.<br></br>
                        <b>ВОЗМОЖНОСТИ</b><br></br>
                        <br></br>
                        <b>• Беспрерывная работа 24 часа в сутки от розетки 220В</b><br></br>
                        <b>• Тревожная сигнализация (зуммер) при отключении электричества</b><br></br>
                        <b>• Плавная регулировка объема воздушно-кислородного потока на выходе</b><br></br>
                        <b>• Имеется таймер (до 99 минут). По истечении заданного времени, прибор автоматически отключается</b><br></br>
                    </details>

                </div>

                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={kk7f5l} width="200" height="200" alt="Кислородный концентратор Armed Armed 7F-5L"  ></Image>
                    <h2 className="text-xl font-bold mb-2 text-black">Armed 7F-5L</h2>
                    <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                    <div className="flex">
                        <div className="w-1/3 h-1 bg-blue-600 ml-auto"></div>
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-gray-400 "></div>
                    </div>

                    <p className="text-gray-600"><b>Прокат (Неделя):</b> 1 790 ₽ </p>
                    <p className="text-gray-600"><b>Прокат (Месяц):</b> 3 990 ₽ \ месяц</p>

                    <details>
                        Концентратор кислорода <b>Армед 7F-3L</b> выпускается с 2007 года и зарекомендовал себя как добротный и надежный &quot3-литровый&quot аппарат. Прибор выдает почти медицинский кислород на скорости потока от 1 до 3 л/мин.<br></br>
                        <br></br>
                        <b>ПРИНЦИП РАБОТЫ</b><br></br>
                        <br></br>
                        Кислородный концентратор Армед 7F-3L  работает по принципу физического разделения газов (кислорода, азота и проч.), содержащихся в воздухе.  Воздух буквально просеивается через специальные &quotмолекулярные сита&quot (цеолит) и на выходе получается струя с концентрацией кислорода до 90%, тогда как в обычном воздухе концентрация кислорода не превышает 21%. Такая технология делает концентратор кислорода Армед 7F-3L практически безопасным в сравнении с обычными кислородными баллонами.<br></br>
                        <b>ПРОИЗВОДИТЕЛЬНОСТЬ</b><br></br>
                        <br></br>
                        Кислородный концентратор Армед 7F-3L может производить от 1 до 3 литров воздушно-кислородной смеси в минуту с концентрацией кислорода 93%±3.<br></br>
                        <b>ВОЗМОЖНОСТИ</b><br></br>
                        <br></br>
                        <b>• Беспрерывная работа 24 часа в сутки от розетки 220В</b><br></br>
                        <b>• Тревожная сигнализация (зуммер) при отключении электричества</b><br></br>
                        <b>• Плавная регулировка объема воздушно-кислородного потока на выходе</b><br></br>
                        <b>• Имеется таймер (до 99 минут). По истечении заданного времени, прибор автоматически отключается</b><br></br>
                    </details>

                </div>

                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={kk8f5} width="200" height="200" alt="Кислородный концентратор Armed Armed Armed 8F-5"  ></Image>
                    <h2 className="text-xl font-bold mb-2 text-black">Armed 8F-5</h2>
                    <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                    <div className="flex">
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-gray-400 "></div>
                    </div>

                    <p className="text-gray-600"><b>Прокат (Неделя):</b> 1 790 ₽ </p>
                    <p className="text-gray-600"><b>Прокат (Месяц):</b> 4 990 ₽ \ месяц</p>

                    <details>
                        Полноценный пятилитровый концентратор, находящий широкое применение как в домашних, так и в стационарных условиях. Одно из преимуществ -  возможность использования концентратора как основного или резервного источника кислорода.<br></br>
                        <br></br>
                        <b>ПРИНЦИП РАБОТЫ</b><br></br>
                        <br></br>
                        <b>Кислородный концентратор Армед 8F-5</b> работает по принципу физического разделения газов (кислорода, азота и проч.), содержащихся в воздухе. Воздух буквально просеивается через специальные &quotмолекулярные сита&quot (цеолит) и на выходе получается струя с концентрацией кислорода до 90%, тогда как в обычном воздухе концентрация кислорода не превышает 21%. Такая технология делает концентратор кислорода Армед 8F-5 практически безопасным в сравнении с обычными кислородными баллонами.<br></br>
                        <b>ПРОИЗВОДИТЕЛЬНОСТЬ</b><br></br>
                        <br></br>
                        <b>Кислородный концентратор Армед 8F-5</b> способен производить от 1 до 5 литров воздушно-кислородной смеси в минуту с концентрацией кислорода более 90%.<br></br>
                        При увеличении объема больше чем 5 л/мин, концентрация кислорода в вырабатываемой воздушно-кислородной смеси будет менее 90%.<br></br>
                        <b>ВОЗМОЖНОСТИ</b><br></br>
                        <br></br>
                        <b>• Может работать 24 часа в сутки от обычной розетки 220В</b><br></br>
                        <b> • Плавная регулировка объема воздушно-кислородного потока</b><br></br>
                        <b>• Встроен счетчик наработанного времени</b><br></br>
                        <b>• Аварийная сигнализация (зуммер) при экстренном отключении электричества</b><br></br>
                        <b>• Имеется индикатор электропитания и индикатор неисправности</b><br></br>
                    </details>
                </div>

                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={kkjay5f} width="200" height="200" alt="Кислородный концентратор Longfian JAY-5A"  ></Image>
                    <h2 className="text-xl font-bold mb-2 text-black">Longfian JAY-5A</h2>
                    <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                    <div className="flex">
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-gray-400  ml-auto"></div>
                    </div>

                    <p className="text-gray-600"><b>Прокат (Неделя):</b> 1 790 ₽ </p>
                    <p className="text-gray-600"><b>Прокат (Месяц):</b> 4 990 ₽ \ месяц</p>
                    <p className="text-gray-600"><b>Продажа:</b>42 990 ₽</p>

                    <details>
                        <b>Longfian JAY-5A</b>  - это концентратор кислорода нового поколения, выдающий О2 концентрации около 93% при настраиваемой производительности от нуля до пяти литров в минуту, оптимально подходящий как для лечения, так и для приготовления полезных кислородных коктейлей в домашних условиях.<br></br>
                        Полезные опции концентратора Longfian JAY-5A<br></br>
                        В аппарате продумано всё до мелочей: он компактный, имеет ЖК-экран с интуитивно-понятным управлением, его удобно перевозить по дому за счёт специальных колёсиков, он снабжён парой сменных фильтров, канюлей, всеми необходимыми приспособлениями для оксигенотерапии, а также сумкой для их хранения.<br></br>
                        Принцип функционирования концентратора Лонгфиан Джей 5А<br></br>
                        В концентраторе Longfian JAY-5A реализован метод короткоцикловой адсорбции (PSA), основанный на направлении компрессором отфильтрованного атмосферного воздуха на колонки, содержащие порошковый адсорбент (&quotмолекулярное сито&quot), основной задачей которых служит удаление азота. Далее О2 проходит бактериальную фильтрацию и подаётся посредством системы выхода пользователю.<br></br>
                        Плюсы для использования дома<br></br>
                        JAY-5A работает тихо, имеет незначительный уровень потребления электроэнергии и рассчитан на долгое время использования, благодаря чему данный аппарат – это идеальное решение для дома. Управлять концентратором очень просто, в комплекте Вы найдёте подробное руководство пользователя, а встроенная аварийная сигнализация известит о сбоях технического характера в процессе эксплуатации.<br></br>
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
                    <Image src={Armed7f5c} width="200" height="200" alt="Кислородный концентратор Армед 7F-5C" ></Image>
                    <h2 className="text-xl font-bold mb-2 text-black">Кислородный концентратор Армед 7F-5C</h2>
                    <p className="text-gray-600">Производительность: 5 литров в минуту</p>
                    <div className="flex">
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-blue-600  ml-auto"></div>
                        <div className="w-1/3 h-1 bg-gray-400  ml-auto"></div>
                    </div>
                    <p className="text-gray-600"><b>Продажа:</b> 39 990₽</p>

                    <details>
                        Кислородный концентратор <b>Кислородный концентратор Армед 7F-5C</b><br></br>
                        <br></br>
                        Кислородный концентратор <b>Армед 7F-5C</b> производительностью 5 л/мин применяется для профилактики и лечения заболеваний, вызванных дефицитом кислорода. Концентратор кислорода используется как в домашних условиях, так и в медучреждениях. Панель управления проста и удобна. На дисплее отображается время работы в минутах, а индикатор оповещает о рабочем состоянии техники. В конструкции нет кислородных баллонов, что делает аппарат безопасным в использовании. Благодаря колесам и небольшим размерам концентратор легко перемещать. <br></br>
                        <b>Концентрация КВС на выходе при максимальной производительности</b>  ≥ 93 %<br></br>
                        <b>Уровень шума (не более)</b>  55 дБА<br></br>
                        <b>Вес нетто (ед)</b> 16.9 кг<br></br>
                        <b>Время выхода концентратора на рабочий режим</b> 3 мин<br></br>
                        <b>Вес брутто (ед)</b> 19 кг<br></br>
                        <b>Упаковка (ед)</b>  Картонная коробка<br></br>
                        <b>Габариты в упаковке (ед)</b> 49.5*35.5*58.5 см<br></br>
                    </details>
                </div>

                <div className="p-4 border rounded shadow hover:border-2 hover:border-blue-500 transition duration-200">
                    <Image src={kkjay10} width="200" height="200" alt="Кислородный концентратор Longfian JAY-10" ></Image>
                    <h2 className="text-xl font-bold mb-2 text-black">Longfian JAY-10</h2>
                    <p className="text-gray-600">Производительность: 10 литров в минуту</p>
                    <div className="flex">
                        <div className="w-1/3 h-1 bg-red-600 ml-auto"></div>
                        <div className="w-1/3 h-1 bg-red-600 ml-auto"></div>
                        <div className="w-1/3 h-1 bg-red-600 "></div>
                    </div>

                    <p className="text-gray-600"><b>Прокат (Неделя):</b> 2 990 ₽ </p>
                    <p className="text-gray-600"><b>Прокат (Месяц):</b> 9 990₽ \ месяц</p>
                    <p className="text-gray-600"><b>Продажа:</b> 74 000₽</p>

                    <details>
                        Кислородный концентратор <b>Longfian JAY-10</b><br></br>
                        <br></br>
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
                        <br></br>
                        индикатором, загорающимся после трёх тысяч часов эксплуатации;<br></br>
                        температурный датчик срабатывает при увеличении рабочей температуры сверх пятидесяти градусов по Цельсию;<br></br>
                        загорание красного индикатора сигнализирует о падении уровня концентрации О2 ниже 82%<br></br>
                        Комплект поставки кислородного концентратора JAY-10:<br></br>
                        <br></br>
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
            </div>
        </animated.div>
    );
};

export default ListOxy;