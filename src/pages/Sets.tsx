import React from "react";
import ProductList from '../components/productList/ProductList'
import slide1 from '../assets/imgs/slide1.jpg'
import slide2 from '../assets/imgs/slide2.jpg'
import slide3 from '../assets/imgs/slide3.jpg'
import slide4 from '../assets/imgs/slide4.jpg'
import slide5 from '../assets/imgs/slide5.jpg'

const Sets: React.FC = () => {
    const setsProducts = [
        { id: 1, name: "Сеть Пятый Океан", price: 599, description: "1260 грамм 36 кусочков", image: slide1 },
        { id: 2, name: "Сет Сакура", price: 799, description: "1400 грамм 40 кусочков", image: slide2 },
        { id: 3, name: "Сет для влюблённых", price: 699, description: "1300 грамм 32 кусочка", image: slide3 },
        { id: 4, name: "Сет Сансей", price: 599, description: "1200 грамм 28 кусочка", image: slide4 },
        { id: 5, name: "Сет РОМСЕМ", price: 999, description: "1200 грамм 20 кусочка", image: slide5 },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Сеты</h1>
            <ProductList products={setsProducts} />
        </div>
    );
};

export default Sets;
