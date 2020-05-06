import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import About from '../components/About/About';
import Testimonial from '../components/Testimonial/Testimonial';
import Follow from '../components/Follow/Follow';
import Contact from '../components/ContactForm/Contact';
import ContactIndex from '../components/ContactForm/ContactIndex';

import Image from '../UI/Image';
import Paellas from '../UI/Paellas';

import coockingImg from '../multimedia/images/coocking.jpg';
import cheersImg from '../multimedia/images/cheers.jpg';

const Home = () => {
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
      <Follow showPhone= {true}/>
    </>
  );
};

export default Home;