import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-size: 16px;
}
`