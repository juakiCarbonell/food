import React from 'react';
import styled from "styled-components";
import logo from '../multimedia/images/jumbotron.jpg';


const StyledJumbotron = styled.div`
  background-image: url(${logo});
  background-position: center center;
  height: 100vh;
  width: auto;
  z-index: 1;
`

const TextContainer = styled.div`
  border: 2px solid white;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 1;
`

const Text = styled.h1`
  text-align: center;
  border: 2px solid white;
  padding: 10px;
  font-weight: bold;
  opacity: 1 !important;
`

const Jumbotron = () => {
  return (
    <>
      <StyledJumbotron logo={logo} />
      <TextContainer>
        <Text>Paellas a domicilio</Text>
      </TextContainer>
    </>

      
  );
};

export default Jumbotron;