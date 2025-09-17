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
    <div className="container">
      <h1>Propiedades</h1>
      <PropertyFilters />
      <PropertyList />
      <PropertyDetails />
    </div>
  );
}

export default App;