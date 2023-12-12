import React from 'react';
import { Link } from 'react-router-dom';

const GarmentItem = ({ id, name, description, price, imageUrl }) => {
  return (
    <div className="garment-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/*<Link to={`/garment/${id}`}>*/}
        <button className="explore-button">Explore</button>
      {/*</Link>*/}
    </div>
  );
};

export default GarmentItem;
