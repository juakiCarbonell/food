import React from 'react';
import styled from "styled-components";
import logo from '../../multimedia/images/logo.png';

const Brand = () => {

  const StyledImage = styled.div`
    height: 66%;
    /* width: 100%; */
    display: flex;
    align-items: center;
    img {
      height: 66%;
      width: auto;
    }
  `;

  
  const BrandName = styled.h1`
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    padding-left: 10px;
  `

  return (
    <StyledImage>
      <img src={logo} alt="whatever"/>
      <BrandName>Luis Titos</BrandName>
    </StyledImage>
  );
};

export default Brand;