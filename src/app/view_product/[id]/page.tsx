import { Product } from '../../lib/types';
import { getProductById } from '../../lib/actions'; 
import AddToCartButton from '../../ui/AddToCardButton';

async function ProductPreview({ params }: { params: { id: string } }) {
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
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;