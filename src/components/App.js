import React from 'react';
import GlobalStyles from '../UI/GlobalStyles';
import {BrowserRouter, Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../UI/theme';
import Layout from '../UI/Layout';
import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import HowItWorks from './HowItWorksPage';
import MenuPage from './MenuPage';
import ContactPage from './ContactPage';
import ScrollToTop from './ScrollToTop';

const App = (props) => {


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles/>
          <ScrollToTop />
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

        </Layout>
        
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;