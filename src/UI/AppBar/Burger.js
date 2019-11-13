import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 49px;
  height: 49px;
  cursor: pointer;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  div {
    transition: all 0.3s linear;
    
    :first-child {
      transform-origin: 0 100%;
      transform: ${({ open }) => open ? 'rotate(45deg) translate(5px, -1px)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }
    :last-child {
      transform-origin: 0% 0%;
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(7px, 1px)' : 'rotate(0)'};
    }
  }
`
const Linie = styled.div`
  width: 50px;
  height: 5px;
  background-color: white;
`

const Burger = (props) => {
  console.log(props)
  return (
    <Wrapper onClick={props.handleClick} {...props}>
      <Linie />
      <Linie />
      <Linie />
      
    </Wrapper>
  );
};

export default Burger;