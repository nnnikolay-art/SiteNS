import React from 'react';
import PhoneIcon from '../../public/Icons/phone-solid.svg'
import MailIcon from '../../public/Icons/envelope-solid.svg'
import addr from '../../public/Icons/house-solid.svg'
import Image from "next/image";
import Head from "next/head";
import Link from "next/link"


const contacts = [
    { city: 'Ижевск', phone: '+7 951 191-11-11', email: 'medprokat18@mail.ru',address: 'Удмуртская республика, г. Ижевск, ул. Ломоносова 9а' },
    { city: 'Краснодар', phone: '+7 906 818-39-36', email: 'medprokat66@mail.ru',address: 'Краснодарский край г. Краснодар ул. Леваневского, 3' },
    { city: 'Екатеринбург', phone: '+7 (982) 796-66-66', email: 'medprokat23@mail.ru',address: 'Свердловская обл. г. Екатеринбург ул. Степена разина 122' },
];

export const metadata = {
    title: 'Контакты компании ЦентрМедПрокат',
    description: 'Контакты, телефоны, адреса компании',
}

const ContactList = () => (
    <div className="bg-gray-100 py-10">
        <Head>
            <title>
                Контакты компании
            </title>
            <meta
                http-equiv="Content-Type"
                content="text/html; charset=utf-8"
                key= "contact"
            />
        </Head>

        <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-10">Список контактов</h2>
            {contacts.map(({ city, phone, email ,address}) => (
                <div key={city} className="bg-gray-200 shadow-lg rounded-lg p-6 mb-6   ">
                    <div className="divide-y divide-gray-300 divide-x-reverse">
                        <h3 className="text-xl font-bold mb-1">{city}</h3>
                        <div></div>
                    </div>

                        <Image className="float-left" src={addr} alt='Адрес:' width={25} height={25}/>
                        <p className="text-gray-700 mb-1">Адрес: {address}</p>

                        <div className="">
                            <Image className="float-left" src={PhoneIcon} alt='Телефон:' width={25} height={25}/>
                            <Link href={"tel:"+phone} className="text-gray-700 mb-1">{phone}</Link>
                        </div>
                        <div className="border-1 border"></div>
                        <div className="">
                            <Image className="float-left mx-0 flex-" src={MailIcon} alt='Email:' width={25} height={25}/>
                            <Link href={"mailto:"+email} className="text-gray-700 mb-1">{email}</Link>
                        </div>

                </div>
            ))}
        </div>
    </div>


);



export default ContactList;