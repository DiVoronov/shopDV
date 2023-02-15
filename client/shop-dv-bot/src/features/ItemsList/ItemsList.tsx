import React, { useState } from 'react';
import { Box } from '@mui/material';

import { StyledItemsList } from './itemList.style';
import { IService } from '../../app/slices/servicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { pushToCart, removeFromCart } from '../../app/slices/cartSlice';
import { RootState } from '../../app/store';
import { IAlert, pushToAlertArray, removeFromAlertArray } from '../../app/slices/alertSlice';
import { Alert } from '../alert/Alert';

interface IItemsListProps {
  services: IService[]
  isCart: boolean
};

export const ItemsList = ( { services, isCart }: IItemsListProps ) => {

  const cart: IService[] = useSelector( (state: RootState) => state.cart);
  // const alertArray: IAlert[] = useSelector( (state: RootState) => state.alert);

  const [classDeleteCard, setClassDeleteCard] = useState('');
  // const [classAddToCard, setClassAddToCard] = useState('');

  const dispatch = useDispatch();

  const handleAddToCart = ( item: IService, id: string ) => {
    const checkedCartToFindItem = cart.filter( currentItem => currentItem.id === item.id);
    const uniqueID = Date.now();
    if (checkedCartToFindItem.length === 0) {
      dispatch(pushToAlertArray({id: uniqueID, type: 'add'}))
    } else {
      dispatch(pushToAlertArray({id: uniqueID, type: 'present'}))
    };
    dispatch(pushToCart(item));
    setTimeout( () => {
      dispatch(removeFromAlertArray(uniqueID));
    }, 2000);
  };

  const handleADeleteFromCart = ( index: number, id: string ) => {
    setClassDeleteCard(id);
    const uniqueID = Date.now();
    dispatch(pushToAlertArray({id: uniqueID, type: 'delete'}));
    setTimeout( () => {
      dispatch(removeFromCart(index));
      setClassDeleteCard('');
    }, 500);
    setTimeout( () => {
      dispatch(removeFromAlertArray(uniqueID));
    }, 2000);
  };

  const themeForStyledItemsList = {
    id: classDeleteCard,
    // addId: classAddToCard,
  }
  // USE useRef

  return (
    <StyledItemsList theme={themeForStyledItemsList}>
      <Alert/>
      <Box id='list-net'>
        {
          services.map( (item, index) => {
            return (
              <Box key={item.link} component='div' className={`current-card-add-to-${item.id}`} id={`current-card-${item.id}`}>
                {
                  isCart
                  &&
                  <Box 
                    component='button'
                    className='button-delete-in-net'
                    onClick={() => handleADeleteFromCart(index, `current-card-${item.id}`)}
                  >
                    <Box>
                      <Box>x</Box>
                    </Box>
                  </Box>
                }
                
                <img className='list-net-image' style={{borderRadius: '10px'}}  width='100%' src={item.link} alt='Item'/>
                <Box>
                  <Box component='div' className='list-net-title'>{item.title}</Box>
                  <Box component='div' className='list-net-description'>{item.description}</Box>
                </Box>
                {
                  !isCart
                  &&
                  <Box 
                    component='button'
                    className='button-in-net'
                    onClick={() => handleAddToCart(item, `current-card-add-to-${item.id}`)}
                  >
                    ORDER
                  </Box>
                }
              </Box>
            ); 
          })
        }
      </Box>
    </StyledItemsList>
  );
};