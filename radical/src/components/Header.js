import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/radical-logo.png'; // Replace with your logo image
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Radical Logo" className="logo-image" />
        <Link to="/" className="header-link">
          <h1 className="header-text">Radical</h1>
        </Link>
      </div>
      <ul className="header-links">
        <li className="header-link">
          <span>Collections</span>
          <ul className="dropdown">
            <li><Link to="/collections/spring">Spring Collection</Link></li>
            <li><Link to="/collections/summer">Summer Collection</Link></li>
            <li><Link to="/collections/fall">Fall Collection</Link></li>
            {/* Add more collection pages as needed */}
          </ul>
        </li>
        <li><Link to="/about" className="header-link">About</Link></li>
        <li><Link to="/contact" className="header-link">Contact</Link></li>
      </ul>
    </header>
  );
};

export default Header;