import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export interface IAlert {
  id: string
  type: string
};

const initialState: IAlert[] = [];

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    pushToAlertArray (state, action) {
      state.push(action.payload);
      return state;
    },
    removeFromAlertArray (state, action) {
      const indexAlertById = state.findIndex( alert => alert.id === action.payload );
      state.splice(indexAlertById, 1);
      return state;
    }
  }
});

export const { pushToAlertArray, removeFromAlertArray } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
