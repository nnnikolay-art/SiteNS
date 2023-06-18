import React from 'react'

import screenlogo from '../../public/3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";



const categories = [
    {
        id: 1,
        name: 'Кислородные концентраторы',
        imageUrl: '/Icons/wind-solid.svg',
        desc: 'Для лечения ряда заболеваний с легкими и приготовления кислородных коктелей ',
        categorySlug: '/dataProducts/1'
    },
    {
        id: 2,
        name: 'Комплектующие',
        imageUrl: '/Icons/code-compare-solid.svg',
        desc: 'Канюли, маски, трубки и другие расходные материалы для мед оборудования',
        categorySlug: '/dataProducts/4'
    },
    {
        id: 3,
        name: 'Приборы',
        imageUrl: '/Icons/heart-circle-bolt-solid.svg',
        desc: 'Приборы для магнитной терапии, лампы для лечения желтухи у новорожденных, детские весы и тд.',
        categorySlug: '/dataProducts/3'
    },
    {
        id: 4,
        name: 'Средства реабилитации',
        imageUrl: '/Icons/wheelchair-solid.svg',
        desc: 'Ходунки, Трости, Костыли, Кресла, Кровати для людей с дополнительными потребностями',
        categorySlug: '/dataProducts/2'
    }
];

const Page = () => {
    return (
        <div className="bg-gray-100 py-10">
            <Head>
                <title>
                    Категории товаров
                </title>
                <meta
                    name="Категории товаров"
                    content="Категория: Кислородные концентраторы, Приборы, Средства реабилитации, Комплектующие"
                    key="category"
                />
            </Head>


            <div className="absolute inset-0">
            <Image  src={screenlogo}
                    alt="background image"
                    fill/>
            </div>
            <div className="relative z-10 ">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10">Категории товаров</h2>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 flex-col">
                        {categories.map(({ id, name, imageUrl,desc,categorySlug }) => (
                            <Link
                                key={id}
                                href= {categorySlug}
                                className="bg-blue-200 shadow-lg rounded-lg p-6 flex flex-col items-center transition-all duration-200 hover:scale-105"
                            >
                                <Image src={imageUrl} alt={name} width={100} height={100}
                                       className="w-24 h-24 mb-4"


                                           />
                                <div className='text-center font-bold'>{name}</div>
                                <div className='text-cyan-700 text-center'>{desc}</div>

                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;