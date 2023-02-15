import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { IService } from '../../app/slices/servicesSlice';
import { RootState } from '../../app/store';
import { StyledButtonSendOrder } from './buttonSendOrder.style';

export const ButtonSendOrder = () => {

  const cart: IService[] = useSelector( (state: RootState) => state.cart);

  return (
    <StyledButtonSendOrder>
      Send order to Telegram Bot
    </StyledButtonSendOrder>
  );
};