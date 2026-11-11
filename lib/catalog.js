import catalog from '../data/products.json';
import illustrations from '../data/product-illustrations.json';
export const products = catalog.products.map(product => {
  const illustration = illustrations[product.id];
  return { ...product, illustration: illustration?.source === product.image ? illustration.path : null };
});
export const importedAt = catalog.importedAt;
export const listedProducts = products.filter(product => product.visible);
export const featuredProducts = listedProducts.filter(product => product.featured).sort((a, b) => a.order - b.order).slice(0, 6);
export function getProduct(id) { return listedProducts.find(product => product.id === id); }
