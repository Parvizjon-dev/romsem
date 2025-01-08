import React, { useState } from "react";

const PhoneForm: React.FC = () => {
  const [phone, setPhone] = useState("+992");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Останавливаем перезагрузку страницы

    // Валидация
    if (phone.length !== 13 || !/^\+992\d{9}$/.test(phone)) {
      setError("Введите полный номер телефона!");
      return;
    }

    setError(""); // Если всё валидно, убираем ошибку
    setIsModalOpen(true); // Открываем модальное окно
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
    setPhone("+992"); // Сбрасываем поле ввода
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mx-auto items-center">
        <input
          type="text"
          maxLength={13}
          placeholder="+992"
          value={phone}
          onChange={(e) => {
            const value = e.target.value;
            // Разрешаем только цифры и строку, начинающуюся с +992
            if (/^\+992\d*$/.test(value) && value.length <= 13) {
              setPhone(value);
            }
          }}
          className="text-sm pl-1 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-28 size-10 bg-orange-500 text-white text-sm text-center rounded-full hover:bg-orange-600"
        >
          Позвоните мне
        </button>
      </form>

      {/* Ошибка валидации */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-bold mb-4">Спасибо что выбрали нас! <br /> Сейчас же свяжемся с вами.</p>
            <button
              onClick={closeModal}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneForm;