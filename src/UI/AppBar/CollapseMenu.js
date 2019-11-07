import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import {useSpring, animated, interpolate} from 'react-spring'

const StyledCollapseMenu = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: red;
  text-align: right;
  padding: 3rem;
  width: 40%;
  /* transform: ${( props ) => props.open ? 'translateX(0%)' : 'translateX(100%)'}; */

  @media (min-width: 769px) {
    display: none;
  }
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 1rem;
  
  /* & li {
    transition: all 300ms linear 0s;
  } */
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
  /* @media (min-width: 769px) {
    display: none;
  } */
`;


const CollapseMenu = (props) => {
  
  const { open } = useSpring({ open: props.open ? 0 : 1 });


  return (
    <StyledCollapseMenu 
      {...props}
      style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, 20, 0, 200],
        }).interpolate(openValue => `translate3d(${openValue}%, 0, 0`),
      }}
    
      >
      <NavLinks>
        <li><a href="/">link n1</a></li>
        <li><a href="/">link n2</a></li>
        <li><a href="/">link n3</a></li>
      </NavLinks>
    </StyledCollapseMenu>
  );
  
};

export default CollapseMenu;