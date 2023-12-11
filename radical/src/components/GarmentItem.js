import React from 'react';

const GarmentItem = ({ name, description, imageUrl }) => {
  return (
    <div className="garment-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      {/* You can add more details or buttons related to the garment */}
    </div>
  );
};

export default GarmentItem;