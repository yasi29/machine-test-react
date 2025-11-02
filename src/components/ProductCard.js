import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="card h-100 product-card">
      <div className="card-body d-flex flex-column align-items-center text-center position-relative">
        <Link to={`/product/${product.id}`} className="stretched-link text-decoration-none">
          <div className="product-image-wrapper mb-3">
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
        </Link>

        <h6 className="card-title text-primary-text mt-2">{product.title}</h6>
        <div className="mt-auto price transition-lift">${product.price}</div>

        <button className="btn btn-sm add-action">Add to Cart</button>
      </div>
    </div>
  );
}
