import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const HomePage = () => {
  return (
    <div className="page">
      <Header />
      <main className="main radical-container">
        <section className="section radical-section">
          <h1 className="radical-heading">Discover Our Collections</h1>
          <p className="radical-description">Explore the latest trends and redefine your style with Radical.</p>
          <a href="/collections" className="radical-button">View Collections</a>
        </section>
        {/* Add more sections or components for showcasing products */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
