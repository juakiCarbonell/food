import React from 'react';

import NavBar from '../components/AppBar/NavBar';


const Layout = (props) => {


  return (
    <div>
      <NavBar bg="darkReed"/>
      <main>
          {props.children}
      </main>
      
    </div>
  );
};

export default Layout;