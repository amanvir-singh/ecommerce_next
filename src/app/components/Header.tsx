"use client";
import Link from 'next/link';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; 
import { useState } from 'react';
import { useCart } from './CartContext'; 

const Header = () => {
  const { state } = useCart(); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

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
        
        
        <Link href="/create" className="border border-black rounded-md px-4 py-2 text-black hover:bg-gray-200 transition duration-300">
          Create Product
        </Link>

        
        <form onSubmit={handleSearch} className="flex items-center relative ml-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border text-black border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
            <FaSearch className="text-gray-500" />
          </button>
        </form>
     
       
        <Link href="/cart" className="relative flex items-center text-black hover:opacity-75 transition duration-300 ml-4">
          <FaShoppingCart className="text-2xl" />
          {state.items.length > 0 && (
            <span className="absolute -top-4 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {state.items.length} 
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;