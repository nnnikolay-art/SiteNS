import React from 'react';
import PhoneIcon from '../../public/Icons/phone-solid.svg'
import MailIcon from '../../public/Icons/envelope-solid.svg'
import addr from '../../public/Icons/house-solid.svg'
import Image from "next/image";
import Head from "next/head";


const contacts = [
    { city: 'Ижевск', phone: '+7 (495) 555-55-55', email: 'moscow@example.com',address: 'Удмуртская республика, г. Ижевск, ул. Ломоносова 9а' },
    { city: 'Краснодар', phone: '+7 (812) 555-55-55', email: 'spb@example.com',address: 'Краснодарский край г. Краснодар ул. Леваневского, 3' },
    { city: 'Екатеринбург', phone: '+380 44 555-55-55', email: 'kiev@example.com',address: 'Свердловская обл. г. Екатеринбург ул. Степена разина 122' },
];

export const metadata = {
    title: 'Контакты компании',
    description: 'Контакты, телефоны, адреса компании',
}

const ContactList = () => (
    <div className="bg-gray-100 py-10">
        <Head>
            <title>
                Контакты компании
            </title>
            <meta
                name="Контакты компании"
                content="Контакты компании: Телефон, адрес, почта"
                key="contact"
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
                        <Image className="float-left" src={PhoneIcon} alt='Телефон:' width={25} height={25}/>
                        <p className="text-gray-700 mb-1">Телефон: {phone}</p>
                        <Image className="float-left" src={MailIcon} alt='Email:' width={25} height={25}/>
                        <p className="text-gray-700">Email: {email}</p>
                </div>
            ))}
        </div>
    </div>


);



export default ContactList;