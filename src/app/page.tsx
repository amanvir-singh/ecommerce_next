import React from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "./lib/types";
import { getAllProducts } from "./lib/actions";

const Home = async () => {
  const products: Product[] = (await getAllProducts()) as Product[];

  return (
    <div className="container bg-black mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;