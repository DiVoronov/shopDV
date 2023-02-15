import React, { useState } from 'react';
import { Box } from '@mui/material';
import { StyledAlert } from './alert.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IAlert } from '../../app/slices/alertSlice';

interface IAlertProps {
  type: string
};

export const Alert = () => {
  const alertArray: IAlert[] = useSelector( (state: RootState) => state.alert);

  const currentAlertType = (alert: IAlert) => alert.type;

  const themeAlert = {
    getCurrentType(alert: IAlert) {
      return (
        {
          color: alert.type === 'add' ? 'green' : alert.type === 'delete' ? 'red' : 'brown',
          background: alert.type === 'add' ? 'lightgreen' : alert.type === 'delete' ? 'salmon' : 'yellow'
        }
      )
    }
    
  };

  return (
    <Box 
      component='div' 
      sx={{
        position: 'fixed',
        top: '50px',
        right: '20px',
      }}
    >
      {
        alertArray.map( alert => {
          return (
            <StyledAlert theme={() => themeAlert.getCurrentType(alert)} key={alert.id}>
              {
                alert.type === 'add' 
                ? 'Item was added to the Cart' 
                : alert.type === 'delete' 
                ? 'Item was deleted from the Cart' 
                : 'Item already present in the Cart'
              }
            </StyledAlert>
          );
        })
      }
      
    </Box>
  );
}