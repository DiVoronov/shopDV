import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { IService } from '../../app/slices/servicesSlice';
import { RootState } from '../../app/store';
import { StyledButtonSendOrder } from './buttonSendOrder.style';

export const ButtonSendOrder = () => {

  const cart: IService[] = useSelector( (state: RootState) => state.cart);

  const [ dataTelegramBot, setDataTelegramBot ] = useState<any>('');

  useEffect( () => {
    // setDataTelegramBot(window.Telegram!.WebApp);
    // window.Telegram.webApp
    // window.Telegram! && setDataTelegramBot(window.Telegram!.WebApp);
    console.log(window);
  }, []);

  const sendDataToBot = (cart: IService[]) => {

  };

  return (
    <StyledButtonSendOrder onClick={() => sendDataToBot(cart)}>
      Send order to Telegram Bot
    </StyledButtonSendOrder>
  );
};