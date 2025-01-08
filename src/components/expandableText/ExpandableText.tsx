import React from "react";
import { useState } from "react";

const ExpandableText: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="p-4 text-left">
            <h2 className="text-lg text-gray-500 font-bold mb-2">Заказать суши в Душанбе</h2>
            <p className={`text-gray-700 ${isExpanded ? "" : "line-clamp-6"}`}>
                Ресторан "Суши и Лапша" предлагает своим клиентам самые вкусные суши с доставкой на дом,
                приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
                собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
                заказать суши в Душанбе с доставкой на дом или в офис.
                <br />
                В нашем меню более 20 видов суши:
                <ul className="list-disc list-inside">
                    <li>Классические с сырым лососем, тунцом, окунем.</li>
                    <li>Экзотические с тигровой креветкой, морским гребешком.</li>
                    <li>Пикантные с копченым лососем, угрем.</li>
                </ul>
                В меню также представлены гункань с начинкой из красной икры и тобико, а также феликсы, где
                японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут
                купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки,
                гребешки, тунец, лосось и окунь.
            </p>
            <button
                onClick={handleToggle}
                className="mt-4 block mx-auto text-orange-500 hover:text-orange-600 focus:outline-none"
            >
                {isExpanded ? "Свернуть" : "Подробнее"}
            </button>
        </div>
    );
};

export default ExpandableText;