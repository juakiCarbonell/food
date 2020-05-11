import React from 'react';
import styled from "styled-components";

import NavBar from '../components/AppBar/NavBar';

const MainContianer = styled.main`
  margin-top: 70px;
`


const Layout = (props) => {


  return (
    <div>
      <NavBar bg="darkReed"/>
      <MainContianer>
          {props.children}
      </MainContianer>
      
    </div>
  );
};

export default Layout;