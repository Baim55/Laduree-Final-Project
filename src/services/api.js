import { createSlug } from "../utils/createSlug";

const BASE_URL = "http://localhost:3000/api";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/category`);
  if (!res.ok) throw new Error("Kateqoriyalar yüklənmədi");
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Məhsullar yüklənmədi");
  return res.json();
}

export const getProductBySlug = async (slug) => {
  const products = await getProducts();

  const product = products.find(
    (item) => createSlug(item.name) === slug
  );

  return product || null;
};