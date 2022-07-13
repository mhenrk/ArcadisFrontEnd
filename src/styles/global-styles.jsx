import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
}

body {
  width: 1280px;
  display: flex;
  margin: 30px auto;
  font-family: "Montserrat";
  font-size: 16px;
}
`