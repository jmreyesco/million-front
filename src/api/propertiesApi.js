// export const mockProperties = [
//   {
//     id: 1,
//     name: "Casa Moderna",
//     address: "Calle 123, Bogotá",
//     price: 350000,
//     description: "Casa moderna con jardín y garaje.",
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 2,
//     name: "Apartamento Central",
//     address: "Avenida 45, Medellín",
//     price: 250000,
//     description: "Apartamento céntrico cerca de todo.",
//     image: "https://via.placeholder.com/300x200",
//   },
//   // ...más propiedades
// ];

// export async function fetchProperties() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(mockProperties), 500);
//   });
// }



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