import React from 'react';
import styled from 'styled-components';

export const StyledItemsList = styled.div`
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

    & .list-net-image {
      transition: filter .3s;

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