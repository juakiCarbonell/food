import styled from "styled-components";
import {setColor, setFont, setTransition} from "./styles";

const Section = styled.section`
  padding: 2rem 1rem 2rem 1rem;
  background: ${props => props.color}

`

export default Section