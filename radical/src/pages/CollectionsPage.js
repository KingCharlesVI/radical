import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const CollectionsPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Collections</h1>
          <p className="paragraph">Discover our curated collections for every season.</p>
          <ul>
            <li><Link to="/collections/spring" className="header-link">Spring Collection</Link></li>
            <li><Link to="/collections/summer" className="header-link">Summer Collection</Link></li>
            <li><Link to="/collections/fall" className="header-link">Fall Collection</Link></li>
            {/* Add more collection links as needed */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionsPage;