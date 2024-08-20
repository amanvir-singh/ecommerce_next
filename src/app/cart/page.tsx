"use client";
import React from "react";
import { useCart } from "../components/CartContext"; 
import { FaTrash } from "react-icons/fa";
import { Product } from '../lib/types'; 

const CartPage = () => {
  const { state, dispatch } = useCart();


  const groupedItems = state.items.reduce((acc, product) => {
    const existingProduct = acc.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      acc.push({ ...product, quantity: 1 }); 
    }
    return acc;
  }, [] as (Product & { quantity: number })[]);


  const totalPrice = groupedItems.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {groupedItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {groupedItems.map((product) => (
            <div key={product.id} className="flex items-center border rounded-lg p-4 shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-white-700">
                  ${product.price.toFixed(2)} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;