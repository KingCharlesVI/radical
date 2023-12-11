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
            <li><Link to="/collections/ss24" className="header-link">Collection SS24</Link></li>
            {/* Add more collection links as needed */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionsPage;