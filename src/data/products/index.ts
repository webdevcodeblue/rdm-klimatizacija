// Export all product data
export { klimaProducts } from './klima-uredaji';
export { multiKlimaProducts } from './multi-klima';

// Import all products
import { klimaProducts } from './klima-uredaji';
import { multiKlimaProducts } from './multi-klima';

import type { Product } from '../types';

// Combine all products
export const allProducts: Product[] = [
  ...klimaProducts,
  ...multiKlimaProducts
];

// Get products on sale
export const saleProducts = allProducts.filter(p => p.isOnSale);

// Get featured products
export const featuredProducts = allProducts.filter(p => p.isFeatured);

// Get products by manufacturer
export const getProductsByManufacturer = (manufacturer: string) => {
  return allProducts.filter(p => p.manufacturer === manufacturer);
};

// Get products by category
export const getProductsByCategory = (category: string) => {
  return allProducts.filter(p => p.category === category);
};

// Get product by slug
export const getProductBySlug = (slug: string) => {
  return allProducts.find(p => p.slug === slug);
};

// Get product by ID
export const getProductById = (id: string) => {
  return allProducts.find(p => p.id === id);
};