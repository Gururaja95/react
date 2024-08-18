import React from 'react';
import "./Navbar.css";
import logo from '../assets/logo.png';

 export const Navbar = () => {
  return (
    <nav className="container">
            <h1><img src= {logo} alt="" className="logo" />Shopsy</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Card</li>
                <li>Service</li>
                <li><button className="btn">Contact Us</button></li>
            </ul>
    </nav>
  );
}

export default Navbar;