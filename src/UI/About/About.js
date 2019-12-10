import styled from "styled-components";
import Section from '../Section';
import React from 'react';
import Title from '../Title';
import AboutImage from '../../multimedia/images/chef.jpg';
import PrimaryBtn from '../Buttons';
import { Link } from 'react-router-dom';

const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  .about-info {
    p {
      letter-spacing: 3px;
    }
  }
  .about-img {
    img {
      width: 100%;
    }
  }
  @media (min-width: 1200px){
    width: 100vw;
    .about-info,
    .about-img {
      padding: 0rem;
    }
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    .about-img,
    .about-info {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  }
`


const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={AboutImage} alt="Sobre mi"/>
        </div>
        <div className="about-info">
          <Title title="About Me" center></Title>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla, nisi officiis delectus voluptatum inventore ab sapiente architecto magni aperiam ut dicta vero qui similique ea harum aliquam recusandae neque.
          </p>
          <Link to="/about">
            <PrimaryBtn>Read More</PrimaryBtn>
          </Link>
        </div>
      </AboutCenter>
    </Section>
  );
};

export default About;

// import styled from "styled-components";
// import React from 'react';
// import img from '../../multimedia/images/chef.jpg';
// import AboutImage from './AboutImage';
// import AboutText from './AboutText';


// const AboutWrapper = styled.div`

// `

// const About = () => {
//   return (
//     <AboutWrapper>
//       <AboutText 
//         title="Sobre mi"
//         text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//       />
//       <AboutImage img={img}/>
//     </AboutWrapper>
//   );
// };

// export default About;