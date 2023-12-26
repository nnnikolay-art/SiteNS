'use client'
import React, { useState } from 'react';

const ProductListPage = () => {
    const [filters, setFilters] = useState({
        category: '',
        city: '',
        price: '',
        search: '',
        sort: ''
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleSliderChange = e => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: parseInt(value)
        }));
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        // Здесь можно добавить логику обработки фильтров
        console.log(filters);
    };

    return (
        <div className="flex">
            <div className="w-1/4 p-4">
                <h2 className="text-2xl font-bold">Фильтры</h2>
                <form onSubmit={handleFormSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium">Категория товара</label>
                        <select
                            id="category"
                            name="category"
                            value={filters.category}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Все категории</option>
                            <option value="category1">Категория 1</option>
                            <option value="category2">Категория 2</option>
                            <option value="category3">Категория 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium">Город</label>
                        <select
                            id="city"
                            name="city"
                            value={filters.city}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Все города</option>
                            <option value="city1">Город 1</option>
                            <option value="city2">Город 2</option>
                            <option value="city3">Город 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium">Цена</label>
                        <input
                            type="range"
                            id="price"
                            name="price"
                            min="0"
                            max="1000"
                            value={filters.price}
                            onChange={handleSliderChange}
                            className="w-full"
                        />
                        <p className="mt-2">{filters.price} руб.</p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="search" className="block mb-2 text-sm font-medium">Поиск по названию товара</label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={filters.search}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sort" className="block mb-2 text-sm font-medium">Сортировка товара</label>
                        <select
                            id="sort"
                            name="sort"
                            value={filters.sort}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Без сортировки</option>
                            <option value="name_asc">Название (по возрастанию)</option>
                            <option value="name_desc">Название (по убыванию)</option>
                            <option value="price_asc">Цена (по возрастанию)</option>
                            <option value="price_desc">Цена (по убыванию)</option>
                        </select>
                    </div>

                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                        Применить фильтры
                    </button>
                </form>
            </div>

            <div className="w-3/4 p-4">
                {/* Здесь может быть компонент для отображения списка товаров */}
            </div>
        </div>
    );
};

export default ProductListPage;