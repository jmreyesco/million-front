import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProperty } from "../features/properties/propertiesSlice";

export default function PropertyCard({ property }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.properties.selected);

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition border-2 ${
        selected?.id === property.id ? "border-blue-500" : "border-transparent"
      }`}
      onClick={() => dispatch(setSelectedProperty(property))}
    >
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-xl font-semibold text-gray-800">{property.name}</h3>
      <p className="text-gray-600">{property.address}</p>
      <p className="text-blue-700 font-bold text-lg">
        ${property.price.toLocaleString()}
      </p>
    </div>
  );
}