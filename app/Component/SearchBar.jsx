import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const cities = [{City:"Ижевск", keyCity:"Izhevsk"},  {City:"Краснодар", keyCity:"Krasnodar"}]; // Список городов

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Состояние для поискового запроса
    const [selectedCity, setSelectedCity] = useState("Izhevsk"); // Состояние для выбранного города
    const [focusType, setFocusType] = useState(false); // Состояние для выбранного города

    const routers = useRouter()

    const handleChange = (e) => {
        setSearchTerm(e.target.value);

    };

    const handleClick= (e) => {
        routers.push(`dataProducts/${selectedCity}/?find=${e}`); // Используем обратные кавычки для подстановки переменных
    };


    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleMouseOver = () => {

        setFocusType(true);

    };

    const handleMouseOut = () => {

        setFocusType(false);
    };

    const handleSearch = () => {
        // Переход на другую страницу с передачей параметров поиска
        // Например, с помощью роутинга из пакета next/router
         //Link href=(`/DataProducts?term=${searchTerm}&city=${selectedCity}`);


    };

    // Фильтрация списка товаров для подсказок
    const filteredProducts = ["Алмаг", "Кислородный концентратор", "Кровать","Костыли","Ходунки","Трости",
        "Весы детские","Фотолампа для лечения желтухи новорожденных","Ортез","Носилки"].filter((product) =>
        product.toLowerCase().includes(searchTerm.slice(0,3).toLowerCase() )
    );


    return (
        <div className="">
        <div className="flex justify-center items-center flex-wrap text-black w-full">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Поиск товара"
                className="m-2 p-2 border border-gray-300 rounded"

                onFocus={handleMouseOver} onBlur={handleMouseOut}
            />

            {/*
            <select
                value={selectedCity}
                onChange={handleCityChange}
                className="m-2 p-2 border border-gray-300 rounded "
            >

                {cities.map((c) => (
                    <option key={c.keyCity} value={c.keyCity}>
                        {c.City}
                    </option>
                ))}
            </select>
            */}

            <button className="bg-blue-200 hover:bg-blue-300 text-white font-bold  text-black py-2 px-4 rounded ">
                <Link
                    href={{
                        pathname: '/dataProducts/[slug]/',
                        query: { find: searchTerm }
                    }}
                    as={`dataProducts/${selectedCity}/?find=${searchTerm}`}
                >
                    🔍︎
                </Link>
            </button>
        </div>

        <div>
            {filteredProducts.length > 0 && searchTerm.length > 0  && (
                <ul className={"m-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded" }>
                    {filteredProducts.slice(0,5).map((product) => (
                        <li
                            key={product}
                            className={"cursor-pointer font-bold py-2 pl-3 pr-4 "}
                            onClick={() => handleClick(product)}
                        >
                            {product}
                        </li>
                    ))}
                </ul>
            )}


            </div>
        </div>


    );
};

export default SearchPage;