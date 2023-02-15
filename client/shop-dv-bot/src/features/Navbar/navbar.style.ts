import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyledNavbar = styled(Box)`
height: 2.5rem;
margin: auto;
background: orange;
border-bottom: 3px solid darkorange;

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 3rem;
color: brown;
font-weight: 700;

& > div {

  border-radius: 10px;
  padding: .2rem 1rem;
  transition: transform .3s, background .3s;
  font-weight: 700;

  & a {
    color: brown;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.06);
    background: darkorange;
    cursor: pointer;
  }
}


`;