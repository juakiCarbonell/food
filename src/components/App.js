import React from 'react';
import NavBar from '../UI/AppBar/NavBar';
import GlobalStyles from '../UI/GlobalStyles';
import {BrowserRouter, Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../UI/theme';
import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import HowItWorks from './HowItWorksPage';
import MenuPage from './MenuPage';
import ContactPage from './ContactPage';

const App = (props) => {


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <NavBar bg="darkReed"/>
        <Route
          path="/"
          exact
          component={IndexPage}
        />
        <Route
          path="/menu"
          exact
          component={MenuPage}
        />
        <Route
          path="/about"
          exact
          component={AboutPage}
        />
        <Route
          path="/how_it_works"
          exact
          component={HowItWorks}
        />
        <Route
          path="/contact"
          exact
          component={ContactPage}
        />

  
        
        {/* <Video /> */}
        {/* <CardContainer justifyContent='space-around'/> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;