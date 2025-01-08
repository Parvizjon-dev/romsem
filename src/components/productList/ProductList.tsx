import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    desсription: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className=" shadow-md rounded-lg p-4 flex flex-col justify-around">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-50 mx-auto h-52 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.desсription}</p>
                    <div className="flex justify-around items-center">
                        <p className="text-gray-700 text-lg font-bold">{product.price} c.</p>
                        <button className="mt-1 w-24 bg-orange-500 text-white text-center py-2 rounded-full hover:bg-orange-600">
                            Выбрать
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ProductList;
