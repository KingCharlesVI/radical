import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const SpringCollection = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Spring Collection</h1>
          <p className="paragraph">Explore the latest trends for the spring season.</p>
          {/* Add content specific to the Spring Collection */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpringCollection;