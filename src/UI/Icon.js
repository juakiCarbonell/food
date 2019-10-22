
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { space } from "styled-system";
import { Box } from 'reflexbox/styled-components';
import styled from "styled-components";


const Icon = (props) =>  {
  console.log(props)
  return(
    <FontAwesomeIcon icon={props.icon}/>  
  );
};

Icon.propTypes = {
  ...space.propTypes
};


export default Icon;