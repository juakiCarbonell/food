import React from 'react';
import img from '../multimedia/images/paella.jpg';

import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%
`


const Image = () => {
  return (
    <StyledImage src={img} alt="Paella"/>
  );
};

export default Image;