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
import HowItWorks from '../UI/HowItWorks/HowItWorks';
import ContactIndex from '../UI/ContactForm/ContactIndex';
import { useMediaQuery } from 'react-responsive';

const IndexPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  return (
    <>
      <Jumbotron />
      <HowItWorks />
      <Paellas />
      <About />
      <Testimonial />
      <Image img={coockingImg}/>
      { isDesktopOrLaptop ? <ContactIndex /> : <Contact />}
      <Image img={cheersImg}/>
      <Follow />
    </>
  );
};

export default IndexPage;