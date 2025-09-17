import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const { items, status, error } = useSelector((state) => state.properties);

  if (status === "loading") return <div className="text-center text-gray-500">Cargando propiedades...</div>;
  if (status === "failed") return <div className="text-center text-red-500">Error: {error}</div>;
  if (items.length === 0) return <div className="text-center text-gray-400">No hay propiedades para mostrar.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}