import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GarmentItem from '../components/GarmentItem'; // Import the new component
import '../App.css';

const SS24 = () => {
  // Example garment data (replace with your actual data)
  const garments = [
    {
      id: 1,
      name: 'Radical Leopard print vest',
      description: 'Description for Radical Leopard print vest',
      price: 30,
      imageUrl: '/images/placeholder.png', // Replace with the actual image URL
    },
    {
      id: 2,
      name: 'Radical Varsity jacket',
      description: 'Description for Radical Varsity jacket',
      price: 60,
      imageUrl: '/images/placeholder.png', // Replace with the actual image URL
    },
    {
      id: 3,
      name: 'Radical Layers scarf',
      description: 'Description for Radical Layers scarf',
      price: 20,
      imageUrl: '/images/placeholder.png', // Replace with the actual image URL
    },
    {
      id: 4,
      name: 'Radical Hallmark jeans',
      description: 'Description for Radical Hallmark jeans',
      price: 45,
      imageUrl: '/images/placeholder.png', // Replace with the actual image URL
    },
    // Add more garment objects as needed
  ];

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="section">
          <h1 className="header-text">Collection SS24</h1>
          <p className="paragraph">Discover our first collection: SS24.</p>
          
          {/* Render the garment items using the GarmentItem component */}
          <div className="garment-grid">
            {garments.map((garment) => (
              <GarmentItem
                key={garment.id}
                name={garment.name}
                description={garment.description}
                price={garment.price}
                imageUrl={garment.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SS24;
