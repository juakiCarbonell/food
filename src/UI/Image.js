import styled from "styled-components";
import {setBackground} from './styles';
import img from '../multimedia/images/chef.jpg'

const Image = styled.div`
  min-height: 50vh;
  width: auto;
  ${props => setBackground({img:props.img, color:"rgba(0,0,0,0)"})};
  /* background-image: url(${img}); */
  background-image: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
`


export default Image;