import React from 'react';
// import CardContainer from '../UI/CardContainer';
// import Video from './Video';
import Jumbotron from '../UI/Jumbotron/Jumbotron';
import Image from '../UI/Image';
import About from '../UI/About/About';
import Paellas from '../UI/Paellas';
import Testimonial from '../UI/Testimonial/Testimonial';
import Contact from '../UI/ContactForm/Contact';
import coockingImg from '../multimedia/images/coocking.jpg';
import cheersImg from '../multimedia/images/cheers.jpg';
import Follow from '../UI/Follow';
import HowItWorks from '../UI/HowItWorks/HowItWorks'

const IndexPage = () => {
  return (
    <>
      <Jumbotron />
      <HowItWorks />
      <Paellas />
      <About />
      <Testimonial />
      <Image img={coockingImg}/>
      <Contact />
      <Image img={cheersImg}/>
      <Follow />
    </>
  );
};

export default IndexPage;