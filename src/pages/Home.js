import React from 'react';
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div>
      <h2 className="mb-3">Products</h2>
      <div className="row gy-3">
        {products.map(p => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
