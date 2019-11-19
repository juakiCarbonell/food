import styled from "styled-components";
import {setColor, setFont, setTransition} from "./styles";

const Section = styled.section`
  padding: 1rem;
  background: ${props => props.color}

`

export default Section