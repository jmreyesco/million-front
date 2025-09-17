import React from "react";
import { useSelector } from "react-redux";

export default function PropertyDetails() {
  const selected = useSelector((state) => state.properties.selected);
  if (!selected) return null;

  return (
    <div className="property-details">
      <h2>{selected.name}</h2>
      <img src={selected.image} alt={selected.name} />
      <p>{selected.address}</p>
      <p>${selected.price}</p>
      <p>{selected.description}</p>
    </div>
  );
}