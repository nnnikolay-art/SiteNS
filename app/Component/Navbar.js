'use client'

import Link from 'next/link';
import logo4 from '../../public/Logo4.jpg'
import Image from 'next/image'
import { Dropdown } from "@nextui-org/react";

const Navbar = () => {
    const menuItems = [
        { key: "new", name: "New File" },
        { key: "copy", name: "Copy Link" },
        { key: "edit", name: "Edit File" },
        { key: "delete", name: "Delete File" },
    ];

    return (
        <div className="relative z-10 flex-col items-center justify-center h-full">




            <nav className="bg-white border-gray-200 ">
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
                                <Link href="/dataProducts/5"
                                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Весь ассортимент</Link>
                            </li>

                            <li>
                                <Link href="/contact"
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Контакты</Link>
                            </li>



                        </ul>
                    </div>



                    <Dropdown disableAnimation={true} >
                        <Dropdown.Button flat className="visible  sm:invisible ">☰</Dropdown.Button>
                        <Dropdown.Menu aria-label="Dynamic Actions" >


                                <Dropdown.Item description="Страница о нашей компании" showFullDescription={true}  key= '1'     color={"default"}>
                                    <Link  href="#">Домашняя страница</Link>
                                </Dropdown.Item>

                                <Dropdown.Item description=" " showFullDescription={true}  key= '2'     color={"default"}>
                                    <Link className="w-25" href="/catalog">Каталог</Link>
                                </Dropdown.Item>

                                <Dropdown.Item description=" " showFullDescription={true}  key= '2'     color={"default"}>
                                    <Link className="w-25" href="/dataProducts/5">Весь ассортимент</Link>
                                </Dropdown.Item>

                                <Dropdown.Item description="Телефоны, адреса, почта" showFullDescription={true} key='3' color={"default"}>
                                    <Link className="w-25" href="/contact">Контакты</Link>
                                </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;