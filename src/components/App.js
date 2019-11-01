import React, { useState } from 'react';
import NavBar from '../UI/AppBar/NavBar';
import CardContainer from '../UI/CardContainer';
import Video from './Video';

import { ThemeProvider } from 'styled-components'
import theme from '../UI/theme'

const App = (props) => {

  const [navBarOpen, setNavBarOpen] = useState(false);  

  return (
    <ThemeProvider theme={theme}>
      {props.children}
      <NavBar 
        navBarState={navBarOpen}
        handleNavBar={setNavBarOpen}
      />
      {/* <Video /> */}
      {/* <CardContainer justifyContent='space-around'/> */}
      
    </ThemeProvider>
  );
};

export default App;