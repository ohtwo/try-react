import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>,
    ) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (index >= 0) {
        state.items[index].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity--;
      }
    },
  },
});
