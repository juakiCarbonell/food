import {createGlobalStyle} from 'styled-components';
import { setColor, setFont } from './styles';

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 100%;
    color: ${setColor.black};
    background: ${setColor.white};
    ${setFont.main}
  }
`;
export default Globals