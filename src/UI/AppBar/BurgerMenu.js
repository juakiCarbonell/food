import React from 'react';
import styled from "styled-components";


const StyledBurgerMenu = styled.button`
  /* top: 5%;
  right: 0%; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  outline: 1px solid red;
  padding: 0;
  border: none;
  cursor: pointer;

  div {
    :first-child {
      transform: ${props => props.open ? 'rotate(45deg) scaleX(1.2) translate(2px, -9px)' : 'rotate(0)'};
      transform-origin: top left;
    }
    :nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
    }
    :nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg) scaleX(1.2) translate(1px, 9px)' : 'rotate(0)'};
      transform-origin: bottom left;
      /* transform-origin: center left; */
    }
  }


  @media (min-width: 769px) {
    display: none;
  }
  
`


const Lines = styled.div`
  width: 4rem;
  height: 0.5rem;
  background-color: black;
  /* border-radius: 10px; */
  /* transform-origin: 0% 50%; */
  /* transition: all 0.3s linear; */
`

const BurgerMenu = (props) => {
  console.log(props)
  return (
    <StyledBurgerMenu onClick={props.handleClick} {...props}>
      <Lines />
      <Lines />
      <Lines />
    </StyledBurgerMenu>
    );
};

export default BurgerMenu;