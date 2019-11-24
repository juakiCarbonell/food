import React from 'react';
import NavBar from '../UI/AppBar/NavBar';
import CardContainer from '../UI/CardContainer';
import Video from './Video';
import Jumbotron from '../UI/Jumbotron/Jumbotron';
import About from '../UI/About/About';
import Paellas from '../UI/Paellas';
import GlobalStyles from '../UI/GlobalStyles';
import Testimonial from '../UI/Testimonial/Testimonial'

import { ThemeProvider } from 'styled-components'
import theme from '../UI/theme'

const App = (props) => {


  return (
    
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <NavBar bg="darkReed"/>
        <Jumbotron />
        <About />
        <Paellas />
        <Testimonial />
        {/* <Video /> */}
        {/* <CardContainer justifyContent='space-around'/> */}
      </ThemeProvider>
  );
};

export default App;