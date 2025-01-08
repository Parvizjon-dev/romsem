import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SalmonSet from '../../assets/imgs/salmon-set.png'
import PhiladelphiaLux from '../../assets/imgs/philadelphia-lux.png'
import BigPhiladelphia from '../../assets/imgs/big-philadelphia.png'

import { Navigation } from 'swiper/modules';

const products = [
  {
    image: SalmonSet,
    title: 'Новенький Саломон сет',
    description: '1050 грамм, 30 кусочков',
    price: '1500',
  },
  {
    image: PhiladelphiaLux,
    title: 'Филадельфия и лосось сет',
    description: '1260 грамм, 36 кусочков',
    price: '1150',
  },
  {
    image: BigPhiladelphia,
    title: 'Самая большая Филадельфия',
    description: '2050 грамм, 45 кусочков',
    price: '2100',
  },
  {
    image: SalmonSet,
    title: 'Саломон сет',
    description: '1050 грамм, 30 кусочков',
    price: '1500',
  },
  {
    image: PhiladelphiaLux,
    title: 'Филадельфия и лосось сет',
    description: '1260 грамм, 36 кусочков',
    price: '1150',
  },
  {
    image: BigPhiladelphia,
    title: 'Самая большая Филадельфия',
    description: '2050 грамм, 45 кусочков',
    price: '2100',
  },
];

const ProductSlider = () => {
  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button className="font-semibold border-b-2 border-black">Новинки</button>
        <button className="font-semibold text-gray-500">Популярное</button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-around">
              <img
                src={product.image}
                alt={product.title}
                className=" w-50  h-52 object-cover"
              />

              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>

              <div className='items-center flex gap-8'>
                <p className="text-lg font-bold">{product.price} с.</p>
                <button className="mt-1 w-24 bg-orange-500 text-white text-center py-2 rounded-full hover:bg-orange-600">
                  Выбрать
                </button>
              </div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;