import React from "react";
import chicken from '../../assets/imgs/chicken.jpg';
import ugrem from '../../assets/imgs/ugrem.jpg';
import cornDog from '../../assets/imgs/corn-dog.jpg';
import pizza from '../../assets/imgs/pizza.jpg';
import sashimi from '../../assets/imgs/sashimi.jpg';

interface Card {
    image: string;
    title: string;
}

const cards: Card[] = [
    { image: chicken, title: 'Чикен' },
    { image: ugrem, title: 'С угрем' },
    { image: cornDog, title: 'Корн дог' },
    { image: pizza, title: 'Пицца' },
    { image: sashimi, title: 'Акции' },
];

const CardGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative bg-white rounded-lg overflow-hidden shadow-md group cursor-pointer"
                >
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-2">
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;