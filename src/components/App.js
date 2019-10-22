import React from 'react';
import NavBar from '../UI/NavBar';
import CardContainer from '../UI/CardContainer';
import Video from './Video';

import { ThemeProvider } from 'styled-components'
import theme from '../UI/theme'

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
      <NavBar />
      <Video />
      <CardContainer justifyContent='space-around'/>
      
    </ThemeProvider>
  );
};

export default App;