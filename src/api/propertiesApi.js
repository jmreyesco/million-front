export async function fetchProperties(filters = {}) {
  const params = new URLSearchParams();
  if (filters.name) params.append("name", filters.name);
  if (filters.address) params.append("address", filters.address);
  if (filters.minPrice) params.append("minPrice", filters.minPrice);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);

  const response = await fetch(`http://localhost:5159/api/property?${params.toString()}`);
  console.log(response);
  
  if (!response.ok) throw new Error("Error al obtener propiedades");
  return await response.json();
}