import React from 'react';
import SearchIcon from '../../assets/icons/searchIcon.svg';
import clock from '../../assets/icons/clock.svg';

interface NavbarProps {
    onCartClick: () => void; // Props for handling cart modal toggle
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
    return (
        <nav className="flex items-center justify-between p-2 shadow-sm bg-white">
            {/* Left Section */}
            <div className="flex gap-8 items-center">
                <div className="nav-text">
                    <p className="font-bold">Наш телефон</p>
                    <p className="text-primary">
                        +992 705 188 955 <br />
                        +992 555 188 955
                    </p>
                    <p className="text-gray-500">
                        <img className="inline mr-1" src={clock} alt="Clock Icon" />
                        работаем с 10:00 до 00:00
                    </p>
                </div>
                <div className="city-info">
                    <p className="font-semibold">город:</p>
                    <p>Душанбе</p>
                </div>
            </div>

            {/* Right Section */}
            <div>
                <ul className="flex gap-5 items-center">
                    <li className="nav-item cursor-pointer hover:text-orange-400 hover:scale-110 transition-transform duration-300">
                        Отзывы
                    </li>
                    <li className="nav-item cursor-pointer hover:text-orange-400 hover:scale-110 transition-transform duration-300">
                        Доставка и оплата
                    </li>
                    <li
                        className="nav-item cursor-pointer hover:text-orange-400 hover:scale-110 transition-transform duration-300"
                        onClick={onCartClick} // Trigger cart modal when clicked
                    >
                        Корзина
                    </li>
                    <li className="nav-item cursor-pointer hover:scale-110 transition-transform duration-300">
                        <img src={SearchIcon} alt="Search Icon" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
