"use client";

import { useCart } from '../components/CartContext';
import { Product } from '../lib/types';

export default function AddToCartButton({ product }: { product: Product }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
    >
      Add to Cart
    </button>
  );
}