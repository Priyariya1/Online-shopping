import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
 const [activeLink, setActiveLink] = useState('');

 const handleNavClick = (e) => {
    setActiveLink(e.target.id);
 };

 return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-xl font-bold">My Ecommerce Website</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" id="home" onClick={handleNavClick} className={activeLink === 'home' ? 'text-green-500 font-bold' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/products" id="products" onClick={handleNavClick} className={activeLink === 'products' ? 'text-green-500 font-bold' : ''}>Products</Link>
          </li>
          <li>
            <Link to="/about" id="about" onClick={handleNavClick} className={activeLink === 'about' ? 'text-green-500 font-bold' : ''}>About</Link>
          </li>
          <li>
            <Link to="/contact" id="contact" onClick={handleNavClick} className={activeLink === 'contact' ? 'text-green-500 font-bold' : ''}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
 );
};

export default Header;