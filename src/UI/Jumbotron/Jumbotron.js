import React from 'react';
import Hero from './Hero';
import img from '../../multimedia/images/jumbotron.jpg';
import Banner from './Banner';
// import Buttons from '../Buttons';

const Jumbotron = () => {
  return (
    <Hero img={img}>
      <Banner title="Luis Titos" text="Paellas a domicilio">
        {/*<Buttons>View Details</Buttons> */}
      </Banner>
    </Hero>
  );
};

export default Jumbotron;