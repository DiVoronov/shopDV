import React from 'react';
import styled from 'styled-components';

export const StyledAlert = styled('div')`
background: ${ props => {console.log(props.theme()); return props.theme().background}};
color: ${ props => props.theme.color};
z-index: 100;
padding: 1rem;
margin: 1rem .3rem;
border-radius: 10px;
opacity: .8;
/* transition: transform .3s, opacity .3s; */
animation: alertAppear .3s ease-in 0s;

@keyframes alertDelete {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(.7) translate( -400px , 0px ) ;
    opacity: 0;
  }
}

@keyframes alertAppear {
  from {
    transform: scale(.7) translate( 400px , 0px ) ;
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
`;