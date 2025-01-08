import React from "react";
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/imgs/logo.png';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-[183px] bg-gray-100 h-screen fixed top-0 left-0 shadow-md">
            <div className="flex flex-col items-center py-6">

                <Link to='/' className="mb-2 hover:scale-110 transition-transform duration-300 ">
                    <img
                        src={LogoImg}
                        alt="Logo"
                        className="w-24 h-24"
                    />
                    <h3>ROMSEM</h3>
                </Link>

                <nav className="w-full">
                    <ul className="space-y-1">
                        <li>
                            <a href="/pizza" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🍕</span> Пицца
                            </a>
                        </li>
                        <li>
                            <a href="/sets" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🥢</span> Сеты
                            </a>
                        </li>
                        <li>
                            <a href="/wok" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🍜</span> WOK
                            </a>
                        </li>
                        <li>
                            <a href="/rolls" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🍣</span> Роллы
                            </a>
                        </li>
                        <li>
                            <a href="/sushi" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🍱</span> Суши
                            </a>
                        </li>
                        <li>
                            <a href="/salads-coming-soon" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🥗</span> Салаты
                                <span className="bg-red-500 text-white text-[9px] px-1 ml-1 rounded">Скоро</span>
                            </a>
                        </li>
                        <li>
                            <a href="/soups-coming-soon" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🍲</span> Супы
                                <span className="bg-red-500 text-white text-[9px] px-1 ml-1 rounded">Скоро</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🌭</span> Корн-доги
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🥤</span> Напитки
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition" >
                                <span className="mr-3">🔥</span> Акции
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;