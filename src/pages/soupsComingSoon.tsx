// src/pages/SaladsComingSoon.tsx
import React from "react";

const SoupsComingSoon: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Супы</h1>
            <div className="flex flex-col items-center justify-center h-48">
                <h1 className="text-4xl font-bold text-orange-500 mb-4">Скоро будут Супы в меню!</h1>
                <p className="text-lg text-gray-700">
                    Мы готовим для вас лучшие рецепты. Следите за обновлениями!
                </p>
            </div>
        </div>
    );
};

export default SoupsComingSoon;

