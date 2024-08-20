"use client";
import React, { useState } from "react";
import { useCart } from "../components/CartContext"; 
import { FaTrash } from "react-icons/fa";
import { Product } from '../lib/types';
import { placeOrder } from '../lib/actions'; 

const CartPage = () => {
  const { state, dispatch } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    postalCode: '',
    email: '',
    phone: ''
  });


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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await placeOrder({
        items: groupedItems,
        totalPrice,
        ...orderDetails
      });
      alert('Order placed successfully!');
      dispatch({ type: 'CLEAR_CART' });
      setShowOrderForm(false);
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
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
            <button
              onClick={() => setShowOrderForm(true)}
              className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl text-black font-bold mb-4">Order Details</h2>
            <form onSubmit={handlePlaceOrder}>
              <input
                type="text"
                name="name"
                value={orderDetails.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full text-black p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="address"
                value={orderDetails.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full text-black p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={orderDetails.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="w-full text-black p-2 mb-4 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full text-black p-2 mb-4 border rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full text-black p-2 mb-4 border rounded"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;