
import React from 'react';
import GlobalNav from '../../global/Nav';
import { ThemeProvider } from 'styled-components';

const componentTheme = {
  ulJustifyContent : "space-between",
  liMaxWidth: "100px",
  divLineHeight: "36px",
  divHoverColor: "black",
  divHoverBgColor: "transparent",
  divBeforeBgColor: "darkgray",
}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalNav {...props} />
  </ThemeProvider>
)
