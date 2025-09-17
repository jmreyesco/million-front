// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchProperties } from "../../api/propertiesApi";

// export const loadProperties = createAsyncThunk(
//   "properties/loadProperties",
//   async () => await fetchProperties()
// );


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProperties } from "../../api/propertiesApi";

export const loadProperties = createAsyncThunk(
  "properties/loadProperties",
  async (filters) => await fetchProperties(filters)
);

// ...resto del slice igual

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    items: [],
    filters: { name: "", address: "", priceRange: [0, 1000000] },
    selected: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    selectProperty(state, action) {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProperties.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilters, selectProperty } = propertiesSlice.actions;
export default propertiesSlice.reducer;