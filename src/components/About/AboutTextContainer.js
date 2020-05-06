import React from 'react';
import styled from "styled-components";
import Title from '../../UI/Title';

const StyledContainer = styled.div`
  p {
    letter-spacing: 3px;
    margin-bottom: 0;
  }
  @media (min-width: 1200px){
    padding: 0rem;
    align-self: center;
    p {
      width: 80%;
    }
    
  }

`

const AboutTextContainer = ({title, text}) => {
  return (
    <StyledContainer>
      <Title title={title} center></Title>
      <p>{text}</p>
    </StyledContainer>
  );
};

export default AboutTextContainer;