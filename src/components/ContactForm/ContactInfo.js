import React from 'react';
import styled from "styled-components";

const StyledInfo = styled.div`
  text-align: center;
  letter-spacing: 2px;
  margin: 2rem 0;
  p{
    margin-bottom: 0px;
  }
`

const ContactInfo = () => {
  return (
    <StyledInfo>
      <p>Telf: 012 345 678</p>
      <p>Email: paellas@branchName.de</p>
    </StyledInfo>
  );
};

export default ContactInfo;