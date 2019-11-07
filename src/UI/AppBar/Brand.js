import React from 'react';
import styled from "styled-components";
import logo from '../../multimedia/images/bmw.png';

const Brand = () => {

  const StyledImage = styled.div`
    height: 85%;
    img {
      height: 100%;
      width: auto;
    }
`;
//   const Image = styled.img`
//   
// `;

  return (
    <StyledImage>
      <img src={logo} alt="whatever"/>
    </StyledImage>
  );
};

export default Brand;