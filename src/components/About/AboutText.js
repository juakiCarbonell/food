import styled from "styled-components";
import React from 'react';

const AboutTextWrapper = styled.div`
  h1 {
    margin: 1.5rem; 
  }
  p {
    margin: 1.5rem; 
  }

`



const AboutText = ({text, title}) => {
  return (
    <AboutTextWrapper>
      <h1>{title}</h1>
      <p>{text}</p>
    </AboutTextWrapper>
  );
};

export default AboutText;
