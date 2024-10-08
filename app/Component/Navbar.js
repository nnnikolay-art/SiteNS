'use client'

import Link from 'next/link';
import logo4 from '../../public/Logo4.jpg'
import Image from 'next/image'
import {Dropdown, Text} from "@nextui-org/react";
import { YMInitializer } from 'react-yandex-metrika';
import { useState,useEffect } from "react";


const Navbar = () => {


    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                setIsVisible(true);
            } else {
                setIsVisible(false);

            }
            console.log(currentScrollPos,prevScrollPos)
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos,isVisible]);



    return (
        isVisible ?
            (
        <div className="sticky z-50 flex-col items-center justify-center h-full sticky top-0 bg-white  ">
            <YMInitializer accounts={[94082951]} options={{webvisor: true}} version="2" />

            <div className="bg-white border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="#" className="flex items-center">
                            <Image src={logo4} alt="Flowbite Logo" className='h-25 w-72' width={400} height={150}/>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="#"
                                   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                                   aria-current="page">Домашняя страница</Link>
                            </li>

                            <li>
                                <Link href="/catalog"
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Каталог компании</Link>
                            </li>

                            <li>
                                <Link href="/dataProducts/99"
                                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Весь ассортимент</Link>
                            </li>

                            <li>
                                <Link href="/contact"
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Контакты</Link>
                            </li>
                            <li>
                                <Link href="https://yandex.ru/business/widget/request/company/14408664021"
                                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Обратный звонок</Link>
                            </li>




                        </ul>
                    </div>



                    <Dropdown >
                        <Dropdown.Button flat className="visible  md:invisible   ">☰</Dropdown.Button>
                        <Dropdown.Menu aria-label="Static Actions" >


                                <Dropdown.Item  className="p-0"   key= '1'     color={"default"} >
                                    <Link className="m-0 block h-full w-full p-2" href="#" >
                                        <Text b color="inherit" css={{ d: 'flex' }}>
                                            Домашняя страница
                                        </Text>
                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item  className="p-0"  key= '2'     color={"default"}>
                                    <Link  className="m-0 block h-full w-full p-2" href="/catalog" rel="canonical">
                                        <Text b color="inherit" css={{ d: 'flex' }}>
                                            Каталог
                                        </Text>
                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item  className="p-0"  key= '3'   color={"default"}>
                                    <Link  className="m-0 block h-full w-full p-2" href="/dataProducts/99" rel="canonical">
                                        <Text b color="inherit" css={{ d: 'flex' }}>
                                           Весь ассортимент
                                        </Text>

                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item   className="p-0" key='4' color={"default"}>
                                    <Link  className="m-0 block h-full w-full p-2" href="/contact" rel="canonical">
                                        <Text b color="inherit" css={{ d: 'flex' }}>
                                            Контакты
                                        </Text>
                                    </Link>
                                </Dropdown.Item>

                            <Dropdown.Item   className="p-0" key='4' color={"default"}>
                                <Link  className="m-0 block h-full w-full p-2" href="https://yandex.ru/business/widget/request/company/14408664021">
                                    <Text b color="inherit" css={{ d: 'flex' }}>
                                        Обратный звонок
                                    </Text>
                                </Link>
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>

        </div>
            ) : null

    );
};

export default Navbar;