"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '../../lib/types';
import { getProductById, deleteProduct } from '../../lib/actions'; 
import AddToCartButton from '../../ui/AddToCardButton';

function ProductPreview({ product }: { product: Product }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleDelete = async () => {
    setShowPasswordPopup(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "admin") {
      setShowPasswordPopup(false);
      setPassword('');
      setShowConfirmation(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteProduct(product.id);
      router.push('/'); 
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setShowConfirmation(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
            <p className="text-white-700 mb-4">{product.description}</p>
            <div className="flex space-x-4">
              <AddToCartButton product={product} />
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              >
                Delete Product From Database
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPasswordPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-black">Enter Password to Delete</h2>
            <h3 className="text-black font-bold mb-4">Password: admin - For Development</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 w-full mb-4 text-black"
                placeholder="Enter password"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordPopup(false);
                    setPassword('');
                  }}
                  className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4 text-black">Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

async function ProductPreviewWrapper({ params }: { params: { id: string } }) {
  const product: Product | null = await getProductById(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        </div>
      </div>
    );
  }

  return <ProductPreview product={product} />;
}

export default ProductPreviewWrapper;