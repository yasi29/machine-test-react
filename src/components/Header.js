import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(){
  const [shrink, setShrink] = useState(false);

  useEffect(()=>{
    function onScroll(){
      setShrink(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <header className={`site-header py-3 mb-4 ${shrink? 'shrink': ''}`}>
  <div className="container d-flex justify-content-between align-items-center">
  <h1 className="h5 m-0">shopee.com</h1>
        <nav>
          <NavLink to="/" className={({isActive})=> isActive? 'nav-link active': 'nav-link'}>Home</NavLink>
          <NavLink to="/add" className={({isActive})=> isActive? 'nav-link ms-3 active btn-link': 'nav-link ms-3 btn-link'}>Add Product</NavLink>
        </nav>
      </div>
    </header>
  );
}
