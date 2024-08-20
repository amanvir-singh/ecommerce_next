import { Product } from './types';
import { app } from "../../../firebase";
import { getDatabase, ref, set, get, child, remove } from 'firebase/database';


const db = getDatabase(app);


export async function getAllProducts(): Promise<Product[]> {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, 'products'));
  return snapshot.exists() ? Object.values(snapshot.val()) : [];
}


export async function getProductById(id: string): Promise<Product | null> {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `products/${id}`));
  return snapshot.exists() ? snapshot.val() : null;
}


export async function addProduct(product: Product): Promise<void> {
  const dbRef = ref(db, `products/${product.id}`);
  await set(dbRef, product);
}

export async function deleteProduct(id: string): Promise<void> {
  const dbRef = ref(db, `products/${id}`);
  await remove(dbRef);
}