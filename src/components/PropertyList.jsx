import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProperty } from "../features/properties/propertiesSlice";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const { items, filters, status } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  const filtered = items.filter((p) =>
    p.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    p.address.toLowerCase().includes(filters.address.toLowerCase()) &&
    p.price >= filters.priceRange[0] &&
    p.price <= filters.priceRange[1]
  );

  if (status === "loading") return <div>Cargando...</div>;
  if (filtered.length === 0) return <div>No hay propiedades.</div>;

  return (
    <div className="property-list">
      {filtered.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => dispatch(selectProperty(property))}
        />
      ))}
    </div>
  );
}