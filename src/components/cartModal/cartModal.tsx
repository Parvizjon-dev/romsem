import React from 'react';

const CartModal = ({ onClose }: { onClose: () => void }) => {
    const cartItems = [
        // Пример статических данных. Здесь будет список товаров из контекста или состояния.
        { id: 1, name: 'Пицца Маргарита', price: 55 },
        { id: 2, name: 'Суши Филадельфия', price: 30 },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Корзина</h2>
                {cartItems.length > 0 ? (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between mb-2">
                                <span>{item.name}</span>
                                <span>{item.price} сомони</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Корзина пуста</p>
                )}
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default CartModal;
