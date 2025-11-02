import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import { ProductsProvider } from './context/ProductsContext';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AddEditProduct from './pages/AddEditProduct';

function App() {
  return (
    <ProductsProvider>
  {/* subtle animated gradient background */}
  <div className="bg-gradient" aria-hidden="true"></div>
  <Header />

      <main className="container mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add" element={<AddEditProduct />} />
          <Route path="/edit/:id" element={<AddEditProduct />} />
        </Routes>
      </main>

        <footer className="app-footer py-3">
          <div className="container">
            <div>
              
            <div>
              <strong>shopee.com</strong>
              <div className="text-secondary">A demo e-commerce SPA • Built with React</div>
            </div>
              <a href="#" className="text-secondary">Terms</a>
              <a href="#" className="text-secondary">Contact</a>
            </div>
          </div>
          <div className="container mt-2 text-secondary small">© {new Date().getFullYear()} shopee.com — For demonstration purposes only.</div>
        </footer>
    </ProductsProvider>
  );
}

export default App;
