import React from "react";
import { createSlice } from "@reduxjs/toolkit";

import picUIUX from '../../pic/uiux.jpg';
import picTelegramBot from '../../pic/telegramBot.jpg';
import picResponsive from '../../pic/responsive.jpg';
import picDesign from '../../pic/design.jpg';

export interface IService {
  link: string,
  description: string,
  id: string,
  title: string,
};

const initialState: IService[] = [
  {link: picUIUX, description: 'We are providing custom design for you', id: '1', title: 'UI/UX design'},
  {link: picTelegramBot, description: 'All abilities of creation of Telegram Bots', id: '2', title: 'Telegram Bots'},
  {link: picResponsive, description: 'The best practises of creation responsie Web Application', id: '3', title: 'Responsive design of Web Applicatiion'},
  {link: picDesign, description: 'NEW ability: providing different Web Application directly in your Telegram Bot', id: '4', title: 'Personal design of Telegram Bots'},
];

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    updateServices (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { updateServices } = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;