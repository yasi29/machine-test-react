import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

export default function ProductDetails() {
  const { id } = useParams();
  const pid = Number(id);
  const { products, deleteProduct } = useProducts();
  const product = products.find(p => Number(p.id) === pid);
  const navigate = useNavigate();

  if (!product) return <div className="alert alert-warning">Product not found.</div>;

  function handleDelete() {
    if (!window.confirm('Delete this product?')) return;
    deleteProduct(product.id);
    navigate('/');
  }

  return (
    <div className="row">
      <div className="col-12 col-md-5">
        <div className="card bg-surface p-3">
          <img src={product.image} className="card-img-top p-4" style={{height:300,objectFit:'contain'}} alt={product.title}/>
        </div>
      </div>
      <div className="col-12 col-md-7">
        <h2 className="text-primary-text">{product.title}</h2>
        <p className="text-secondary">Category: {product.category}</p>
        <h3 className="price">${product.price}</h3>
        <p className="text-primary-text">{product.description}</p>

        <div className="d-flex gap-2">
          <Link to={`/edit/${product.id}`} className="btn btn-outline-light">Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          <button className="btn btn-link text-secondary" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
}
