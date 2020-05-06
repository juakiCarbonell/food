import React from 'react';
import styled from 'styled-components';

import { setFont} from '../../UI/styles';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
`
const Image = styled.img`
  height: 55%;
  
`

const BrandName = styled.div`
  font-size: 1.5rem;
  ${setFont.secondary}
  margin-left: 10px;
`

const Brand = ({logo}) => {
  return (
    <BrandContainer>
      <Image src={logo}/>
      <BrandName>Branch Name</BrandName>
    </BrandContainer>
  );
};

export default Brand;