export const setColor = {
  darkRed: "#8B0000",
  activeDarkRed: "#660000",
  white: "#FFF",
  black: "#222",
  grey: "#CCC"
}


export const setFont = {
  main: "font-family: 'Open Sans', sans-serif;",
  secondary: "font-family: 'Pacifico', cursive;"
}

export const setFlex = ({x = "center", y = "center"} = {}) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `
}
export const setBackground = ({img, color="rgba(0,0,0,0)"} = {}) => {
  return `background: linear-gradient(${color},${color}), url(${img}) center/cover fixed no-repeat`;
}

export const setMediaQuery = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const setShadow = {
  light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);',
  dark: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
  darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);'
}

export const setTransition = ({property="all", time="0.3s", timing="ease-in-out"}) => {
  return `transition: ${property} ${time} ${timing} `
}