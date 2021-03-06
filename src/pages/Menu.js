import React, {useState} from 'react';
import Section from '../UI/Section';
import styled from "styled-components";
import { BigMenu } from '../foodData/foodData';
import Paella from '../UI/Paella';
import Title from '../UI/Title';

const AboutCenterTop = styled.div`
  width: 90vw;
  margin: 2rem auto 2rem;
  .about-section {
    margin-bottom: 3rem;
  }

  
  @media (min-width: 1200px){
    margin-top: 2rem;
    max-width: 1170px;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

const PaellaCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-column-gap: 2.8rem;
  @media (min-width: 1200px) {
    width: 100vw;
    max-width: 1170px;
  }
`


const MenuPage = () => {
  const [paellas] = useState(BigMenu);

  return (
      <Section>
        <Title title="Menu" center />
        <AboutCenterTop>
          <PaellaCenter>
            {paellas.map((paella)=> {
              return <Paella key={paella.id} paella={paella} />
            })}
          
          </PaellaCenter>
          
        </AboutCenterTop>
      </Section>

        
  );
};

export default MenuPage;