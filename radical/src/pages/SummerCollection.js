import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const SummerCollection = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Summer Collection</h1>
          <p className="paragraph">Discover the hottest styles for the summer.</p>
          {/* Add content specific to the Summer Collection */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SummerCollection;