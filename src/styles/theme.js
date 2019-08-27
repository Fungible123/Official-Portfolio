const theme = {
  font: {
    primary: `'TW Cen MT', serif`,
  },
  font_size: {
    small: "font-size: 18px; line-height: 35px",
    medium: "font-size: 24px; line-height: 35px",
    regular: "font-size: 36px; line-height: 35px",
    large: "font-size: 48px; line-height: 35px",
    xlarge: "font-size: 64px; line-height: 35px",
  },
  color: {
    light: "#FFFFFF",
    dark: "#1D1D1D",
    grey: "#808080",
    colored: {
      general: "#0A7953",
      shapes: "rgba(10, 121, 83, 0.05)",
      framework: `${props => (props.gatsby ? "#663399" : "#61DAFB")}`,
    },
  },
  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
}
export default theme
