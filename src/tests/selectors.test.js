import { selectFilteredProperties } from "../features/properties/selectors";

describe("selectFilteredProperties", () => {
  it("filtra propiedades por nombre", () => {
    const state = {
      properties: {
        items: [
          { name: "Casa Moderna", address: "Calle 1", price: 100 },
          { name: "Apartamento", address: "Calle 2", price: 200 }
        ],
        filters: { name: "Casa", address: "", priceRange: [0, 1000] }
      }
    };
    const result = selectFilteredProperties(state);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Casa Moderna");
  });
});