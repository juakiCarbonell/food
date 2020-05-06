import React from 'react';
import styled from 'styled-components';

import { setColor } from '../../UI/styles';

const Wrapper = styled.div`
  width: 40px;
  height: 35px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${setColor.darkRed};
  
  div {
    transition: all 0.3s linear;
    
    :first-child {
      transform-origin: 0 100%;
      transform: ${({ open }) => open ? 'rotate(45deg) translate(1px, -3px)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }
    :last-child {
      transform-origin: 0% 0%;
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(5px, 0px)' : 'rotate(0)'};
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const Linie = styled.div`
  width: 40px;
  height: 5px;
  background-color: ${setColor.black};
`

const Burger = (props) => {
  return (
    <Wrapper onClick={props.clicked} {...props}>
      <Linie />
      <Linie />
      <Linie />
      
    </Wrapper>
  );
};

export default Burger;