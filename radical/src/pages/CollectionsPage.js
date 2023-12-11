import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Panel } from 'rsuite'; // Import RSuite Panel
import 'rsuite/dist/styles/rsuite-default.css'; // Import RSuite default styles
import '../App.css';

const CollectionsPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Collections</h1>
          <Panel shaded bordered bodyFill style={{ width: '80%', margin: '20px auto' }}>
            <img
              src="https://via.placeholder.com/240x240" // Replace with your image source
              alt="Collection Image"
              height="240"
              style={{ marginBottom: '20px' }}
            />
            <Panel header="Your Collection Name">
              <p>
                Your collection description goes here. A brief overview of the collection and what
                it showcases.
              </p>
              <Link to="/collections/your-collection" className="collection-button">
                Explore Your Collection
              </Link>
            </Panel>
          </Panel>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionsPage;