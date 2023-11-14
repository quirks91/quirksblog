import { createGlobalStyle } from "styled-components";
import { reset } from "@/styles/mixin";
import { wanted } from "./font";
export const GlobalStyle = createGlobalStyle`
  :before,
  :after {
    ${reset};
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    overflow-y: scroll;
  }
  body {
    font-family: ${wanted.style.fontFamily};
    line-height: 1.8;
    font-size: 1.6rem;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
  }
  th,
  td {
    text-align: center;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit
  }
  button {
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer;
  }
`;
