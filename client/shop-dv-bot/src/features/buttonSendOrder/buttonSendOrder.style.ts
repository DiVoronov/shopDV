import React from 'react';
import styled from 'styled-components';

export const StyledButtonSendOrder = styled('button')`
border-radius: 5px;
background: orange;
height: 2.3rem;
border: 3px solid darkorange;
color: brown;
font-weight: 700;
cursor: pointer;
margin: 2rem 1rem 4rem 1rem;
transition: transform .3s, background .3s, color .6s;

&:hover {
  transform: scale(1.06);
  background: darkorange;
  color: #fff;
}
`;