import styled from "styled-components";
import {setBackground} from '../styles';
import img from '../../multimedia/images/chef.jpg';

const AboutImage = styled.div`
  min-height: 30vh;
  width: auto;
  ${props => setBackground({img:props.img, color:"rgba(0,0,0,0)"})};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`


export default AboutImage;