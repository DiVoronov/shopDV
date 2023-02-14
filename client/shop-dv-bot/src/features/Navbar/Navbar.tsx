import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './navbar.style';

export const Navbar = () => {

  const path = [
    {name: 'Menu', link: '/'},
    {name: 'Cart', link: '/cart'},
  ];

  return (
    <StyledNavbar>
      {
        path.map( item => {
          return (
            <Box key={item.name}>
              <NavLink to={item.link}>{item.name}</NavLink>
            </Box>
          )
        })
      }
    </StyledNavbar>
  );
};