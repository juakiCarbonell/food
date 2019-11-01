import React from 'react';
import styled from "styled-components";


const StyledBurgerMenu = styled.div`
  outline: 1px solid red;
  cursor: pointer;
  height: 39px;
  @media (min-width: 769px) {
    display: none;
  }
`
const Lines = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`

const BurgerMenu = (props) => {
  return (
    <StyledBurgerMenu onClick={props.handleClick}>
      <Lines />
      <Lines />
      <Lines />
    </StyledBurgerMenu>
    );
};

export default BurgerMenu;