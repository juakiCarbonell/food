import React from 'react';
import styled from 'styled-components';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  /* height: 90%; */
  outline: 1px solid white;
`
const Image = styled.img`
  height: 66%;
`

const BrandName = styled.div`
  font-size: 1rem;
`

const Brand = ({logo}) => {
  return (
    <BrandContainer>
      <Image src={logo}/>
      <BrandName>Luis Titos</BrandName>
    </BrandContainer>
  );
};

export default Brand;