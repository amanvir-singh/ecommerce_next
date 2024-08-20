import React from "react";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../lib/types";
import { getAllProducts } from "../../lib/actions";

const SearchResults = async ({ params }: { params: { query: string } }) => {
  const allProducts: Product[] = (await getAllProducts()) as Product[];
  const finalquery = params.query.toLowerCase();

  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(finalquery) || 
    product.description.toLowerCase().includes(finalquery)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for &quot;{params.query}&quot;</h1>
      {filteredProducts.length === 0 ? (
        <p>No products found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;