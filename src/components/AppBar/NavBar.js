import React from 'react';
import styled from 'styled-components';

import Brand from './Brand';
import Burger from './Burger';
import NavLinks from './NavLinks';

import logo from '../../multimedia/images/logo.png';

import { setColor } from '../../UI/styles';

const NavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${setColor.darkRed};
  z-index: 5;
`
const FlexBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  height: 5rem;
`

const NavBar = (props) => {
  return (
    <>
      <NavBarContainer>
        <FlexBox>
          <Brand logo={logo} />
          <Burger clicked={props.drawerToggleClick} open={props.open}/>
          <NavLinks />
        </FlexBox>
      </NavBarContainer>
    
    </>
  );
};

export default NavBar;