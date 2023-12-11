import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const SS24 = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Collection SS24</h1>
          <p className="paragraph">Discover our first collection: SS24.</p>
          {/* Add content specific to the ss24 Collection */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SS24;