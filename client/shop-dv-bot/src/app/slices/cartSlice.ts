import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IService } from "./servicesSlice";

const initialState: IService[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pushToCart (state, action) {
      const check = state.filter( item => item.id === action.payload.id);
      if (check.length > 0) {
        return state;
      } else {
        state.push(action.payload);
        return state;
      }
    },
    removeFromCart (state, action) {
      state.splice(action.payload, 1);
      return state;
    }
  }
});

export const { pushToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;