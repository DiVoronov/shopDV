import React from 'react';
import { Box } from '@mui/material';
import { ItemsList } from '../features/ItemsList/ItemsList';
import { useSelector } from 'react-redux';
import { IService } from '../app/slices/servicesSlice';
import { RootState } from '../app/store';
import './index.css';

import './page.module.scss';
import { ButtonSendOrder } from '../features/buttonSendOrder/ButtonSendOrder';
import { ButtonTest } from '../features/buttonSendOrder/ButtonTest';

export const CartPage = () => {

  const cart: IService[] = useSelector( (state: RootState) => state.cart);

  return (
    <Box component='div' className='cart-page'>
      {
        cart.length === 0 
        ? 
        <Box component='div' className='header-title'>Your Cart is empty</Box> 
        : 
        <Box component='div' className='header-title'>Your Cart</Box>
      }
      {/* <FindArea/> */}
      <ItemsList services={cart} isCart={true}/>

      <ButtonSendOrder/>
      <ButtonTest/>
    </Box>
  );
};