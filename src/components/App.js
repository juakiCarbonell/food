import React from 'react';
import NavBar from '../UI/NavBar';
import CardContainer from '../UI/CardContainer';
import Video from './Video';

import { ThemeProvider } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import theme from '../UI/theme'

const App = (props) => {
  const [mobile, tablet] = theme.breakpoints;

  const isMobile = useMediaQuery({ query: `(max-width: ${mobile})` });
  const isTablet = useMediaQuery({ query: `(max-width: ${tablet})` });
  console.log('mobile', isMobile)
  console.log('tablet', isTablet)
  return (
    <ThemeProvider theme={theme}>
      {props.children}
      <NavBar />
      <Video isMobile={isMobile}/>
      <CardContainer isMobile={isMobile}/>
      
    </ThemeProvider>
  );
};

export default App;