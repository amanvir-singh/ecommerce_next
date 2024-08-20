"use client";
import { Product } from "../lib/types"; 
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card"; 
import Link from "next/link";
import { useCart } from "../components/CartContext"; 

const ProductCard = ({ product }: { product: Product }) => {
  const { dispatch } = useCart(); 

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product }); 
    console.log(`Added ${product.name} to cart`); 
  };

  return (
    <Card className="border rounded-lg bg-white p-2 shadow-md max-w-xs"> 
      <CardHeader className="text-gray-900 text-center"> 
        <CardTitle>
          <Link href={`./product/${product.id}`} className="text-center">{product.name}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center"> 
        <Link href={`./product/${product.id}`}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-28 object-cover mb-2 rounded-md" 
          />
        </Link>
        <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-2"> 
        <button
          className="bg-indigo-600 text-white font-bold py-1 px-2 rounded hover:bg-indigo-700 transition duration-300" // Adjusted padding for button
          onClick={handleAddToCart} 
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;