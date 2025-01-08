import React from "react";
import ProductList from '../components/productList/ProductList'
import cocktail from '../assets/imgs/wok/cocktail.png'
import krevetki from '../assets/imgs/wok/krevetki.png'
import losos from '../assets/imgs/wok/losos.png'
import meat from '../assets/imgs/wok/meat.png'
import rice from '../assets/imgs/wok/rice.png'
import spicy from '../assets/imgs/wok/spicy.png'

const Wok: React.FC = () => {
    const wokProducts = [
        {
            id: 1, name: "Рис с морский коктейлем", price: 45, description: "Традиционный тайский рис обжаривается с овощами и морепродуктами в средне-остром соусе кунг пао...", image: cocktail

        },
        {
            id: 2, name: "Суши с лососем", price: 30, description: "Традиционный тайский рис с креветками и свежими овощами, обжаренными в нейтральном соусе дасуан...", image: krevetki
        },
        {
            id: 3, name: "Суши с тунцом", price: 35, description: "Традиционный тайский рис с овощами, обжаренный с лососем в нейтральном соусе дасуан...", image: losos
        },
        {
            id: 4, name: "Суши с угрём", price: 50, description: "Классическая пшеничная лапша со свежими овощами и говядиной, обжаренными в средне-остром соусе кунг пао...", image: meat
        },
        {
            id: 5, name: "Суши с отварной креветкой", price: 25, description: "Традиционный тайский рис с овощами, обжаренный с лососем в нейтральном соусе дасуан...", image: rice

        },
        { id: 6, name: "Суши с опаленным лососем", price: 30, description: "Тори Спайси – это сочная курица в пикантном соусе от нашего шеф-повара с рассыпчатым рисом и кукурузой...", image: spicy },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Wok</h1>
            <ProductList products={wokProducts} />
        </div>
    );
};

export default Wok;
