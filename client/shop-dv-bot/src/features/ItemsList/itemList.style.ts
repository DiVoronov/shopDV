import React from 'react';
import styled from 'styled-components';

export const StyledItemsList = styled('div')`
margin: 1rem auto;
padding: 1rem;
box-sizing: border-box;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

& #list-net {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: .5rem;

  ${(props => '& #' + props.theme.id)} {
    animation: cardDelete .5s ease-in 0s;
  }

  /* ${(props => '& .' + props.theme.addId)} {
    animation: cardAddTo .3s ease-in 0s;
  } */

  & > div {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 45%;
    gap: .5rem;
    background: #f5f5f5;
    border-radius: 10px;
    padding: .5rem;
    margin-top: 2rem;
    animation: card .5s ease-in 0s;

    & .button-delete-in-net {
      border: none;
      background: none;
      display: flex;
      position: relative;
      justify-content: right;
      z-index: 1;

      & > div {
        position: absolute;
        /* right: 5%; */
        right: -8px;
        top: -30px;
        background: #f5f5f5;
        padding: 10px;
        border-radius: 50px;

        & > div {
          display: block;
          
          background: darkorange;
          padding: 5px 10px;
          border-radius: 50px;
          transition: transform .3s, background .3s, color .6s;
          cursor: pointer;

          /* &::before {
            display: none;
            position: absolute;
            flex-direction: row-reverse;
            left: 0px;
            top: 0px;
            content: 'Delete from cart';
            width: 100px;
            height: 20px;
            color: #000;
            transition: transform 2s, left 1s, color 2s;
          } */

          &:hover {
            transform: scale(1.3);
            background: darkorange;
            color: #fff;
            /* &::before {
              display: flex;
              color: #ccc;
              left: -120px;
              top: 5px;
            } */
          }
        }

        
      }
    }

    & .list-net-image {
      transition: filter .3s;
      /* z-index: 1; */

      &:hover {
        filter: blur(3px);

      }
    }

    & .list-net-title {
      font-weight: 700;
      margin: .4rem;
    }

    & .button-in-net {
      border-radius: 5px;
      background: orange;
      height: 2.3rem;
      border: 3px solid darkorange;
      color: brown;
      font-weight: 700;
      cursor: pointer;
      transition: transform .3s, background .3s, color .6s;

      &:hover {
        transform: scale(1.06);
        background: darkorange;
        color: #fff;
      }
    }

    @keyframes cardDelete {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(.7) translate( -400px , 0px ) ;
        opacity: 0;
      }
    }
    

    @keyframes card {
      from {
        /* transform: scale(1); */
        opacity: 0;
      }
      to {
        /* transform: scale(.7) translate( 400px , 0px ) ; */
        opacity: 1;
      }
    }

    /* @keyframes cardAddTo {
      0% {
        transform: translate( 0px , 0px );
      }
      25% {
        transform: translate( 10px , 0px );
      }
      50% {
        transform: translate( -10px , 0px );
      }
      75% {
        transform: translate( 10px , 0px );
      }
      100% {
        transform: translate( 0px , 0px ) ;
      }
    } */
  }

}

@media screen and (max-width: 451px) {
  margin: auto;
  padding: 1rem;
  font-size: .8em;
  & #list-net {
    & > div {
      padding: .2rem;

      & .list-net-description {
        overflow: hidden;
        max-height: 50px;
      }
    }
  }
}

@media screen and (max-width: 251px) {
  & #list-net {
    & > div {
      width: 100%;
    }
  }
}

@media screen and (min-width: 950px) {
  & #list-net {
    & > div {
      width: 31%;
    }
  }
}

`;