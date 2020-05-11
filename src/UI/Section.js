import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 1rem;
  background: ${(props) => props.color};


  @media (min-width: 1200px){
    padding: 6rem 1rem;
  }
`;

export default Section;
