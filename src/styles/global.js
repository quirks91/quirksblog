import { createGlobalStyle } from "styled-components";
import { reset } from "@/styles/mixin";
import { wanted } from "./font";
export const GlobalStyle = createGlobalStyle`
  :before,
  :after {
    ${reset};
  }
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    overflow-y: scroll;
  }
  body {
    font-family: ${wanted.style.fontFamily};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    color: #000;
    background: #fff;
    -webkit-text-size-adjust: 100%;
    min-width: 320px;
    &.is-mobile {
      font-size: 12px;
    }
    &.is-scroll-lock {
      overflow: hidden;
    }
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
  button {
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer;
  }
`;
