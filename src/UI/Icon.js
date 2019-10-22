
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { space } from "styled-system";



const Icon = (props) =>  {
  return(
    <FontAwesomeIcon icon={props.icon}/>  
  );
};

Icon.propTypes = {
  ...space.propTypes
};


export default Icon;