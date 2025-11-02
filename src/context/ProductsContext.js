import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductsContext = createContext();

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        if (!cancelled) setProducts(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProducts();
    return () => { cancelled = true; };
  }, []);

  function addProduct(product) {
    // assign a temporary id (max id + 1) to new client-only product
    const maxId = products.reduce((m, p) => Math.max(m, p.id || 0), 0);
    const newProduct = { ...product, id: maxId + 1 };
    setProducts(prev => [newProduct, ...prev]);
    return newProduct;
  }

  function updateProduct(id, updates) {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)));
  }

  function deleteProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  const value = { products, loading, error, addProduct, updateProduct, deleteProduct };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}
