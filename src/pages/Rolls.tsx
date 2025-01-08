import React from "react";
import ProductList from '../components/productList/ProductList'
import banito from '../assets/imgs/rolls/banito.jpg'
import california from '../assets/imgs/rolls/california.jpg'
import chedder from '../assets/imgs/rolls/chedder.jpg'
import double from '../assets/imgs/rolls/double.jpg'
import philadelphia from '../assets/imgs/rolls/philadelphia.jpg'
import rollKrevetka from '../assets/imgs/rolls/rollKrevetka.jpg'
import sansei from '../assets/imgs/rolls/sansei.jpg'
import sevenSea from '../assets/imgs/rolls/sevenSea.jpg'

const Rolls: React.FC = () => {
    const rollsProducts = [
        { id: 1, name: "Жареный Банито", price: 72, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко, соус Унаги", image: banito },
        { id: 2, name: "Калифорния запеченная", price: 100, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко, соус Унаги", image: california },
        { id: 3, name: "Ролл чеддер с лососем", price: 73, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко, сыр чеддер", image: chedder },
        { id: 4, name: "Дабл ролл", price: 75, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко, соус Унаги", image: double },
        { id: 5, name: "Филаделфия запеченная", price: 72, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко, соус Унаги", image: philadelphia },
        { id: 6, name: "Ролл креветка запеченная", price: 68, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, креветки, сухари Панко, соус Унаги", image: rollKrevetka },
        { id: 7, name: "Сан-сей", price: 73, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко, соус Унаги", image: sansei },
        { id: 8, name: "7 морей", price: 89, description: "Рис, нори, сыр Кремте, тунец, кляр Темпура, лосось, авокадо, сухари Панко", image: sevenSea },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Роллы</h1>
            <ProductList products={rollsProducts} />
        </div>
    );
};

export default Rolls;
