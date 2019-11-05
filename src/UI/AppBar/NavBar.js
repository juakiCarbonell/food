import React, { useState } from 'react';
import styled from "styled-components";
import {useSpring, animated} from 'react-spring';
import BurgerMenu from './BurgerMenu';
import Brand from './Brand';
import NavLinks from './NavLinks';
import CollapseMenu from './CollapseMenu';
import { color } from 'styled-system';


const NavBar = (props)  => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("handleClick")
    setOpen(!open)
  }

  const StyledNavBar = styled(animated.nav)`
    width: 100%;
    top: 0;
    left: 0;
    ${color}
    z-index: 2;
  `;

  const FlexContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    display: flex;
    /* padding: 0 2rem; */
    justify-content: space-between;
    height: 5rem;
    align-items: center;
  `;


  return (
    <>
      <StyledNavBar {...props}>
        <FlexContainer>
          <Brand />
          <NavLinks />
          <BurgerMenu open={open} handleClick={handleClick }/>
        </FlexContainer>
      </StyledNavBar>
      <CollapseMenu open={open} handleClick={handleClick }/>
    </>
  
  );
};


export default NavBar;