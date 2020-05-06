import styled from "styled-components";
import { setFlex, setBackground } from '../../UI/styles';


const Hero = styled.div`
  /* min-height: 100vh; */
  min-height: ${props => props.height || `100vh`};
  width: auto;
  z-index: 1;
  ${props => setBackground({img:props.img, color:"rgba(0,0,0,0)"})};
  ${setFlex({x:"center", y:"center"})};
`

export default Hero;