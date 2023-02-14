import React from 'react';
import { Box } from '@mui/material';
import { ItemsList } from '../features/ItemsList/ItemsList';
import { useSelector } from 'react-redux';
import { IService } from '../app/slices/servicesSlice';
import { RootState } from '../app/store';

import './page.module.scss';

export const ItemsListPage = () => {

  const services: IService[] = useSelector( (state: RootState) => state.services);

  return (
    <Box>
      <Box component='div' className='header-title'>Main list page</Box>
      {/* <FindArea/> */}
      <ItemsList services={services}/>
    </Box>
  );
};