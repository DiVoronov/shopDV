import React from 'react';
import { Box } from '@mui/material';

import picUIUX from '../../pic/uiux.jpg';
import picTelegramBot from '../../pic/telegramBot.jpg';
import picResponsive from '../../pic/responsive.jpg';
import picDesign from '../../pic/design.jpg';
import { StyledItemsList } from './itemList.style';
import { IService } from '../../app/slices/servicesSlice';
import { useDispatch } from 'react-redux';
import { pushToCart, removeFromCart } from '../../app/slices/cartSlice';

interface IItemsListProps {
  services: IService[]
};

export const ItemsList = ( { services }: IItemsListProps ) => {

  const dispatch = useDispatch();

  const handleAddToCart = ( item: IService ) => {
    dispatch(pushToCart(item));
  };

  return (
    <StyledItemsList>
      <Box id='list-net'>
        {
          services.map( item => {
            return (
              <Box key={item.link}>
                <img className='list-net-image' style={{borderRadius: '10px'}}  width='100%' src={item.link}/>
                <Box>
                  <Box component='div' className='list-net-title'>{item.title}</Box>
                  <Box component='div' className='list-net-description'>{item.description}</Box>
                </Box>
                <Box 
                  component='button'
                  className='button-in-net'
                  onClick={() => handleAddToCart(item)}
                >
                  ORDER
                </Box>
              </Box>
            ); 
          })
        }
      </Box>
    </StyledItemsList>
  );
};