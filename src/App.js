import React from 'react';
import GlobalStyles from './UI/GlobalStyles';
import {BrowserRouter, Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './UI/theme';
import Layout from './UI/Layout';

import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

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
            component={Home}
          />
          <Route
            path="/menu"
            exact
            component={Menu}
          />
          <Route
            path="/about"
            exact
            component={About}
          />
          <Route
            path="/how_it_works"
            exact
            component={HowItWorks}
          />
          <Route
            path="/contact"
            exact
            component={Contact}
          />

        </Layout>
        
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;