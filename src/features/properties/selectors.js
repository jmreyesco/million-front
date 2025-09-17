export const selectFilteredProperties = (state) => {
  const { items, filters } = state.properties;
  return items.filter((p) =>
    p.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    p.address.toLowerCase().includes(filters.address.toLowerCase()) &&
    p.price >= filters.priceRange[0] &&
    p.price <= filters.priceRange[1]
  );
};

export const selectSelectedProperty = (state) => state.properties.selected;