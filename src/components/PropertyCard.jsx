import React from "react";

export default function PropertyCard({ property, onClick }) {
  return (
    <div className="property-card" onClick={onClick}>
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.address}</p>
      <p>${property.price}</p>
    </div>
  );
}