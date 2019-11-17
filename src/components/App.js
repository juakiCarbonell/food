import React from 'react';
import NavBar from '../UI/AppBar/NavBar';
import CardContainer from '../UI/CardContainer';
import Video from './Video';
import Jumbotron from '../UI/Jumbotron/Jumbotron';
import GlobalStyles from '../UI/GlobalStyles'

import { ThemeProvider } from 'styled-components'
import theme from '../UI/theme'

const App = (props) => {


  return (
    
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <NavBar bg="darkReed"/>
        <Jumbotron />
        {/* <Video /> */}
        {/* <CardContainer justifyContent='space-around'/> */}
      </ThemeProvider>
  );
};

export default App;