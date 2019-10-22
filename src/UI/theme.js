import { darken } from "polished";

const red = "#db2a2a";
const yellow = "#FFC300";
const blue = "#0091ff";
const grey = "#AAA";
const green = "#83be58";
const white = "#FFF";


export default {
  name: "default",
  breakpoints: ["40em", "72em", "92em"],
  space: [0, 5, 10, 20],
  fontWeights: [400, 700, 900],
  // fontSizes: {
  //   small: "11px",
  //   medium: "13px",
  //   large: "16px",
  //   hero: "32px"
  // },
  fontSizes: [11, 13, 16, 32],
  colors: {
    red,
    yellow,
    blue,
    grey,
    green,
    white
  },
  buttons: {
    primary: {
      backgroundColor: blue,
      color: "white",
      "&:hover": {
        backgroundColor: darken(0.2, blue)
      },
      "&:disabled": {
        backgroundColor: "lightgrey"
      }
    },
    danger: {
      backgroundColor: red,
      color: "white",
      "&:hover": {
        backgroundColor: darken(0.2, red)
      }
    },
    warning: {
      backgroundColor: yellow,
      color: "white",
      "&:hover": {
        backgroundColor: darken(0.2, yellow)
      }
    }
  }
}