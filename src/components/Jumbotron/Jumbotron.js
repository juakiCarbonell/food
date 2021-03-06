import React from 'react';
import Hero from './Hero';
import img from '../../multimedia/images/jumbotron.jpg';
import Banner from './Banner';

const Jumbotron = () => {
  return (
    <Hero img={img}>
      <Banner title="Branch Name" text="Paellas at home">
        {/*<Buttons>View Details</Buttons> */}
      </Banner>
    </Hero>
  );
};

export default Jumbotron;