import React from "react";
import InstagramIcon from '../../assets/icons/instagramIcon.png';
import WhatsappIcon from '../../assets/icons/whatsappIcon.png';
import TelegramIcon from '../../assets/icons/telegramIcon.png';
import PhoneForm from "../phonePhorm/phonePhorm";

const Footer: React.FC = () => {
    return (
        <footer className="py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:divide-x md:divide-gray-300">

                {/* Первый блок - Информация */}
                <div className="md:pr-6">
                    <ul className="text-gray-700 space-y-2">
                        <li>
                            <a href="#" className="hover:text-orange-500">О компании</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500">Доставка и оплата</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-orange-500">Политика возврата</a>
                        </li>
                    </ul>
                </div>

                {/* Второй блок - Форма и иконки */}
                <div className="md:px-6">
                    <h3 className="text-gray-900 font-bold mb-2">Введите номер</h3>

                    {/* Используем компонент PhoneForm */}
                    <PhoneForm />

                    <p className="text-gray-600 text-sm mt-4">Выберите удобный мессенджер для общения</p>
                    <div className="flex space-x-4 mx-auto">
                        <a href="#" className="hover:scale-110 transition-transform duration-300">
                            <img src={WhatsappIcon} alt="WhatsApp" className="w-10 h-10" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform duration-300">
                            <img src={TelegramIcon} alt="Telegram" className="w-10 h-10" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform duration-300">
                            <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
                        </a>
                    </div>
                </div>

                {/* Третий блок - Контакты */}
                <div className="md:pl-6 text-gray-700">
                    <p>Тел: +992 905 188 955</p>
                    <p>Тел: +992 555 188 955</p>
                    <p>Адрес: Исмоили Сомони 126</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;