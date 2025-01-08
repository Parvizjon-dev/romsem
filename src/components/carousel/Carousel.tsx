import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/imgs/slide1.jpg'
import slide2 from '../../assets/imgs/slide2.jpg'
import slide3 from '../../assets/imgs/slide3.jpg'
import slide4 from '../../assets/imgs/slide4.jpg'
import slide5 from '../../assets/imgs/slide5.jpg'

interface Slide {
    image: string;
    title: string;
    description: string;
    oldPrice: string;
    newPrice: string;
}

const slides: Slide[] = [
    {
        image: slide1,
        title: '“Сеть Пятый Океан”',
        description: '1260 грамм 36 кусочков',
        oldPrice: '1599',
        newPrice: '599',
    },
    {
        image: slide2,
        title: '“Сет Сакура”',
        description: '1400 грамм 40 кусочков',
        oldPrice: '1799',
        newPrice: '799',
    },
    {
        image: slide3,
        title: '“Сет для влюблённых”',
        description: '1300 грамм 32 кусочка',
        oldPrice: '1399',
        newPrice: '699',
    },
    {
        image: slide4,
        title: '“Сет Сансей”',
        description: '1200 грамм 28 кусочка',
        oldPrice: '1099',
        newPrice: '599',
    },
    {
        image: slide5,
        title: '“Сет РОМСЕМ”',
        description: '1200 грамм 20 кусочка',
        oldPrice: '1199',
        newPrice: '999',
    },

];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-5">
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full p-4 text-center"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="mx-auto h-96 object-cover w-full rounded-xl"
                            />
                            <h2 className="mt-2 text-lg font-bold text-gray-800">{slide.title}</h2>
                            <p className="text-sm text-gray-600">{slide.description}</p>
                            <div className="flex items-center justify-center mt-1 space-x-2">
                                <span className="text-red-500 line-through">{slide.oldPrice} с.</span>
                                <span className="text-green-500 text-lg font-bold">{slide.newPrice} с.</span>
                            </div>
                            <button className="mt-2 bg-orange-500 text-white py-2 px-7 rounded-full hover:bg-orange-600">
                                Выбрать
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute top-52 left-2 -translate-y-1/2 bg-Primary text-white rounded-full p-2"
                onClick={prevSlide}
            >
                ❮
            </button>
            <button
                className="absolute top-52 right-2 -translate-y-1/2 bg-Primary text-white rounded-full p-2"
                onClick={nextSlide}
            >
                ❯
            </button>
            <div className="flex justify-center mt-1 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
