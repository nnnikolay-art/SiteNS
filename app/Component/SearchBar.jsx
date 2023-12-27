import { useState } from "react";
import Link from "next/link";
import router from "next/navigation"

const cities = [{City:"Ижевск", keyCity:"Izhevsk"},  {City:"Краснодар", keyCity:"Krasnodar"}]; // Список городов

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Состояние для поискового запроса
    const [selectedCity, setSelectedCity] = useState("Izhevsk"); // Состояние для выбранного города
    const [focusType, setFocusType] = useState(false); // Состояние для выбранного города

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
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
    const filteredProducts = ["Алмаг", "Кислородный концентратор", "Кровать","Костыли","Ходунки","Трости","Весы детские","УФ-лампа"].filter((product) =>
        product.toLowerCase().includes(searchTerm.slice(0,3).toLowerCase() )
    );


    return (
        <div>
        <div className="flex justify-center items-center">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Поиск товара"
                className="border border-gray-300 rounded p-2 mr-2"

                onFocus={handleMouseOver} onBlur={handleMouseOut}
            />


            <select
                value={selectedCity}
                onChange={handleCityChange}
                className="border border-gray-300 rounded p-2 mr-2 "
            >
                {/*  <option value="">Выберите город</option> */}
                {cities.map((c) => (
                    <option key={c.keyCity} value={c.keyCity}>
                        {c.City}
                    </option>
                ))}
            </select>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                <Link
                    href={{
                        pathname: '/dataProducts/[slug]/',
                        query: { find: searchTerm }
                    }}
                    as={`dataProducts/${selectedCity}/?find=${searchTerm}`}
                >
                Поиск
                </Link>
            </button>
        </div>
        <div>
            {filteredProducts.length > 0 && searchTerm.length > 0  && (
                <ul className={"border border-gray-300 rounded p-2 flex bg-blue-100 flex justify-center " }>
                    {filteredProducts.slice(0,3).map((product) => (
                        <li
                            key={product}
                            className={"cursor-pointer font-bold py-2 pl-3 pr-4 "}
                            onClick={() => setSearchTerm(product)}
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