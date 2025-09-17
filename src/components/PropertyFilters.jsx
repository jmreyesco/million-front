import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, loadProperties } from "../features/properties/propertiesSlice";

export default function PropertyFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.properties.filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    dispatch(setFilters(newFilters));
    dispatch(loadProperties(newFilters));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        name="name"
        placeholder="Buscar por nombre"
        value={filters.name || ""}
        onChange={handleChange}
        className="p-2 rounded border border-gray-300 flex-1"
      />
      <input
        type="text"
        name="address"
        placeholder="Buscar por dirección"
        value={filters.address || ""}
        onChange={handleChange}
        className="p-2 rounded border border-gray-300 flex-1"
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Precio mínimo"
        value={filters.minPrice || ""}
        onChange={handleChange}
        min={0}
        className="p-2 rounded border border-gray-300 w-32"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Precio máximo"
        value={filters.maxPrice || ""}
        onChange={handleChange}
        min={0}
        className="p-2 rounded border border-gray-300 w-32"
      />
    </div>
  );
}