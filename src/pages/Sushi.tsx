import React from "react";
import ProductList from '../components/productList/ProductList'
import salmonSushi from '../assets/imgs/sushi/salmonSushi.jpg'
import smokedSalmonSushi from '../assets/imgs/sushi/smokedSalmonSushi.jpg'
import sushiEel from '../assets/imgs/sushi/sushiEel.jpg'
import sushiSearedSalmon from '../assets/imgs/sushi/sushiSearedSalmon.jpg'
import sushiShrimp from '../assets/imgs/sushi/sushiShrimp.jpg'
import sushiTuna from '../assets/imgs/sushi/sushiTuna.jpg'

const Sushi: React.FC = () => {
    const sushiProducts = [
        { id: 1, name: "Суши с копчёным лососем", price: 23, desсription: "Рис, копчёный лосось, лимон, зелень", image: salmonSushi },
        { id: 2, name: "Суши с лососем", price: 29, desсription: "Рис, лосось", image: smokedSalmonSushi },
        { id: 3, name: "Суши с тунцом", price: 23, desсription: "Рис, тунец", image: sushiEel },
        { id: 4, name: "Суши с угрём", price: 28, desсription: "Рис, нори, угорь, соус Унаги, белый кунжут", image: sushiSearedSalmon },
        { id: 5, name: "Суши с отварной креветкой", price: 29, desсription: "Рис, отварная креветка", image: sushiShrimp },
        { id: 6, name: "Суши с опаленным лососем", price: 29, desсription: "Рис, лосось", image: sushiTuna },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Суши</h1>
            <ProductList products={sushiProducts} />
        </div>
    );
};

export default Sushi;
