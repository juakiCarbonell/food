import React from 'react';
import Button from '../UI/Button';
import NavBar from '../UI/NavBar';
import Card from '../UI/Card'

import { ThemeProvider } from 'styled-components'
import theme from '../UI/theme'

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
      <NavBar />
      <Button color="white" bg="grey">
        Hello
      </Button>
      <Button color="white" bg="green">
        Hello
      </Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='danger'>Primary</Button>
      <Card />
    </ThemeProvider>
  );
};

export default App;