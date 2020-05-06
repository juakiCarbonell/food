import React, { useState } from 'react';

import NavBar from '../components/AppBar/NavBar';
import CollapseMenu from '../components/AppBar/CollapseMenu';

const Layout = (props) => {

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);


  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
  }

  const drawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }

  return (
    <div>
      <NavBar bg="darkReed" drawerToggleClick={drawerToggleHandler} open={sideDrawerIsVisible}/>
      <CollapseMenu open={sideDrawerIsVisible} closed={sideDrawerClosedHandler}/>
      <main>
          {props.children}
      </main>
      
    </div>
  );
};

export default Layout;