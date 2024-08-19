"use client"
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useState } from 'react';

const Header = () => {

  const [cartItems, setCartItems] = useState(3); 

  return (
    <header className="py-4 bg-white shadow-md dark:bg-white-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-black">
          <Link href="/" className="hover:opacity-75 transition duration-300">
            Ecommerce App
          </Link>
        </h1>
        <nav className="flex-grow flex justify-center space-x-10">
          <Link
            href="/"
            className="text-black hover:opacity-75 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/cart"
            className="text-black hover:opacity-75 transition duration-300"
          >
            Cart
          </Link>
          <Link
            href="/about"
            className="text-black hover:opacity-75 transition duration-300"
          >
            About
          </Link>
        </nav>
        <Link href="/cart" className="relative flex items-center text-black hover:opacity-75 transition duration-300">
  <FaShoppingCart className="text-2xl" />
  {cartItems > 0 && (
    <span className="absolute -top-4 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {cartItems}
    </span>
  )}
</Link>
      </div>
    </header>
  );
};

export default Header;