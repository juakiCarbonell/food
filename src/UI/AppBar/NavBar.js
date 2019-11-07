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

  const handleclick = () => {
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

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });
  // const barAnimation = useSpring({
  //   from: { transform: 'translate3d(0, -10rem, 0)' },
  //   transform: 'translate3d(0, 0, 0)',
  //   delay: 1000
  // });
  return (
    <>
      <StyledNavBar 
        {...props} 
        style={barAnimation}
      >
        <FlexContainer>
          <Brand />
          <NavLinks />
          <BurgerMenu open={open} setOpen={setOpen}/>
        </FlexContainer>
      </StyledNavBar>
      <CollapseMenu open={open} setOpen={setOpen}/>
    </>
  
  );
};


export default NavBar;