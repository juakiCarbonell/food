import React from 'react';
import AboutImage from '../../multimedia/images/chef.jpg';
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

const AboutImageContainer = () => {
  return (
    <StyledContainer >
      <img src={AboutImage} alt="Sobre mi"/>
    </StyledContainer >
  );
};

export default AboutImageContainer;