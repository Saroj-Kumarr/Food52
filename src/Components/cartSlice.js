import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    addSuccess: false,
    removeSuccess: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (obj) => obj.name == action.payload.name
      );
      if (index != -1){
        state.items.splice(index, 1);
        state.removeSuccess = true;
      }
    },
    addMessage: (state, action) => {
      state.addSuccess = action.payload;
    },
    removeMessage: (state, action) => {
      state.removeSuccess = false;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, addMessage, removeMessage, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
