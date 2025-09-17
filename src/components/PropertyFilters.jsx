import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../features/properties/propertiesSlice";

export default function PropertyFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.properties.filters);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   dispatch(setFilters({ ...filters, [name]: value }));
  // };


    const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    dispatch(setFilters(newFilters));
    dispatch(loadProperties(newFilters)); // <-- Aquí despachas la acción con los filtros
  };

  return (
    <div className="filters">
      <input
        name="name"
        placeholder="Nombre"
        value={filters.name}
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Dirección"
        value={filters.address}
        onChange={handleChange}
      />
      <input
        name="priceRange"
        type="range"
        min="0"
        max="1000000"
        value={filters.priceRange[1]}
        onChange={(e) =>
          dispatch(
            setFilters({
              ...filters,
              priceRange: [0, Number(e.target.value)],
            })
          )
        }
      />
      <span>Hasta ${filters.priceRange[1]}</span>
    </div>
  );
}