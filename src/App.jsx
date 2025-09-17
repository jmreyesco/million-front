import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProperties } from "./features/properties/propertiesSlice";
import PropertyFilters from "./components/PropertyFilters";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProperties());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Propiedades</h1>
      <PropertyFilters />
      <PropertyList />
      <PropertyDetails />
    </div>
  );
}

export default App;