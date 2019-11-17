export const setColor = {
  darkRed: "#8B0000",
  white: "#FFF",
  black: "#222",
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

export const setTransition = ({property="all", time="0.3s", timing="ease-in-out"}) => {
  return `transition: ${property} ${time} ${timing} `
}