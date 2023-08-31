import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      alert(action.payload.name);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(state.items.findIndex((obj) => obj.name == action.payload.name),1)
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
