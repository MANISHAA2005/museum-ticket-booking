import React from "react";

const MuseumCard = ({ museum }) => {
  return (
    <div className="museum-card">
      <img src={museum.imageUrl} alt={museum.name} />
      <div className="museum-info">
        <h3>{museum.name}</h3>
        <p>{museum.description}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default MuseumCard;
