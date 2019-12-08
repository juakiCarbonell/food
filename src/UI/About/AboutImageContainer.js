import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 1.5rem;
  img {
    width: 100%;
    display: block;
  }
  @media (min-width: 1200px){
    padding: 0rem;
    align-self: center;
  }
`

const AboutImageContainer = ({img}) => {
  return (
    <StyledContainer >
      <img src={img} alt="Sobre mi"/>
    </StyledContainer >
  );
};

export default AboutImageContainer;