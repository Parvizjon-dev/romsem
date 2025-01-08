import React from "react";
import ProductList from '../components/productList/ProductList'
import bearPizza from '../assets/imgs/pizza/bearPizza.avif'
import burgerPizza from '../assets/imgs/pizza/burgerPizza.avif'
import cheeseChicken from '../assets/imgs/pizza/cheeseСhicken.avif'
import chorizoFresh from '../assets/imgs/pizza/chorizoFresh.avif'
import margarita from '../assets/imgs/pizza/margarita.avif'
import pepperoni from '../assets/imgs/pizza/pepperoni.avif'
import pesto from '../assets/imgs/pizza/pesto.avif'
import vulcano from '../assets/imgs/pizza/vulcano.avif'
import fourSeasons from '../assets/imgs/pizza/fourSeasons.avif'

const Pizza: React.FC = () => {
    const pizzaProducts = [
        { id: 1, name: "Пицца Мишка", price: 57, description: "Цыплёнок, картофель из печи, моцарелла, томатный соус", image: bearPizza },
        { id: 2, name: "Бургер-пицца", price: 100, description: "Ветчина куриная, фирменный томатный соус, мясной соус бургер, соус бургер, соленые огурчики, томаты, красный лук и сыр моцарелла", image: burgerPizza },
        { id: 3, name: "Сырный цеплёнок", price: 700, description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок", image: cheeseChicken },
        { id: 4, name: "Чоризо Фреш", price: 78, description: "Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец", image: chorizoFresh },
        { id: 5, name: "Маргарита", price: 500, description: "Много-много моцареллы, томаты, томатный соус и итальянские травы. Классика!", image: margarita },
        { id: 6, name: "Пепперони", price: 100, description: "Пепперони, много моцареллы и томатного соуса. Самая популярная пицца", image: pepperoni },
        { id: 7, name: "Песто", price: 115, description: "Сочный цыпленок с пикантным соусом песто, кубики брынзы, томаты, моцарелла и соус альфредо", image: pesto },
        { id: 8, name: "Вулкано", price: 115, description: "Острая чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, томатный соус", image: vulcano },
        { id: 9, name: "Четыре сезона", price: 115, description: "Мно-о-ого моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, томатный соус, итальянские травы", image: fourSeasons }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Пицца</h1>
            <ProductList products={pizzaProducts} />
        </div>
    );
};

export default Pizza;
