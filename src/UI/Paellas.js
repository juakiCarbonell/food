import React, {useState} from 'react';
import Paella from './Paella';
import styled from "styled-components";
import Title from './Title';
import Section from './Section';
import foodData from '../foodData/foodData';
import {setColor, setFont, setTransition} from "./styles"


const PaellaCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px,1fr));
  grid-column-gap: 2.8rem;
  @media (min-width: 1200px) {
    width: 100vw;
    max-width: 1170px;
  }
  /* @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`

const Paellas = () => {

  const [paellas, setPaellas] = useState(foodData);
  return (
    <Section color={setColor.grey}>
      <Title title="Menu" center />
      <PaellaCenter>
        {paellas.map((paella)=> {
          return <Paella key={paella.id} paella={paella} />
        })}
      </PaellaCenter>
    </Section>
  );
};

export default Paellas;