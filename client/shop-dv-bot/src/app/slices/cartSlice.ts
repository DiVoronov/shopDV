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
      console.log(state);
      state.splice(action.payload, 1);
      console.log(state);
      return state;
    }
  }
});

export const { pushToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// interface IPresentItem {
//   id: number
//   isPresent: boolean
// };

// interface IInitialState {
//   cart: IService[]
//   presentInCart: IPresentItem[]
// };

// const initialState: IInitialState = {
//   cart: [],
//   presentInCart: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     pushToCart (state, action) {
//       const check = state.cart.filter( item => item.id === action.payload.id);
//       if (check.length > 0) {
//         return state;
//       } else {
//         state.cart.push(action.payload);
//         state.presentInCart.push(action.payload);
//         return state;
//       }
//     },
//     removeFromCart (state, action) {
//       console.log(state);
//       state.cart.splice(action.payload, 1);
//       console.log(state);
//       return state;
//     }
//   }
// });