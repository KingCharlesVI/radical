import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const FallCollection = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Fall Collection</h1>
          <p className="paragraph">Wrap up in style with our autumn collection.</p>
          {/* Add content specific to the Fall Collection */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FallCollection;