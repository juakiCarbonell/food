import React from 'react';
import Hero from './Hero';
import img from '../../multimedia/images/jumbotron.jpg';
import Banner from './Banner';

const Jumbotron = () => {
  return (
    <Hero img={img}>
      <Banner title="Luis Titos" text="Paellas a domicilio"></Banner>
    </Hero>
  );
};

export default Jumbotron;