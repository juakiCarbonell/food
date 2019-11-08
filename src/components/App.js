import React from 'react';
import NavBar from '../UI/AppBar/NavBar';
import CardContainer from '../UI/CardContainer';
import Video from './Video';
import Jumbotron from '../UI/Jumbotron'

import { ThemeProvider } from 'styled-components'
import theme from '../UI/theme'

const App = (props) => {


  return (
    <ThemeProvider theme={theme}>
      {props.children}
      <NavBar bg="darkReed"/>
      <Jumbotron />
      {/* <Video /> */}
      {/* <CardContainer justifyContent='space-around'/> */}
      
    </ThemeProvider>
  );
};

export default App;