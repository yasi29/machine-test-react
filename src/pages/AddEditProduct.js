import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

const empty = { title: '', price: '', description: '', image: '', category: '' };

export default function AddEditProduct() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const pid = isEdit ? Number(id) : null;
  const { products, addProduct, updateProduct } = useProducts();
  const navigate = useNavigate();

  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const p = products.find(x => Number(x.id) === pid);
      if (p) setForm({ title: p.title || '', price: p.price || '', description: p.description || '', image: p.image || '', category: p.category || '' });
    }
  }, [isEdit, pid, products]);

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.price || Number.isNaN(Number(form.price))) e.price = 'Price must be a valid number';
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.image.trim()) e.image = 'Image URL is required';
    if (!form.category.trim()) e.category = 'Category is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    const payload = { ...form, price: Number(form.price) };
    if (isEdit) {
      updateProduct(pid, payload);
      navigate(`/product/${pid}`);
  setSaved(true);
  setTimeout(()=> setSaved(false), 2200);
    } else {
      const newP = addProduct(payload);
      navigate(`/product/${newP.id}`);
  setSaved(true);
  setTimeout(()=> setSaved(false), 2200);
    }
  }

  return (
  <div className="card p-3 position-relative">
      <h3>{isEdit ? 'Edit Product' : 'Add Product'}</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-2">
          <label className="form-label">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="form-control" />
          {errors.title && <div className="form-error">{errors.title}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Price</label>
          <input name="price" value={form.price} onChange={handleChange} className="form-control" />
          {errors.price && <div className="form-error">{errors.price}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Category</label>
          <input name="category" value={form.category} onChange={handleChange} className="form-control" />
          {errors.category && <div className="form-error">{errors.category}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="form-control" />
          {errors.image && <div className="form-error">{errors.image}</div>}
        </div>

        <div className="mb-2">
          <label className="form-label">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="form-control" rows={4}></textarea>
          {errors.description && <div className="form-error">{errors.description}</div>}
        </div>

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-primary" type="submit">{isEdit ? 'Save' : 'Add Product'}</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate(isEdit ? `/product/${pid}` : '/')}>Cancel</button>
        </div>
      </form>
      {saved && (
        <div className="toast-success">Product saved ✓</div>
      )}
    </div>
  );
}
