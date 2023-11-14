"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 8rem;
  position: relative;
  transform: translateY(-100%);

  p {
    font-size: 1.4rem;
    color: #9696967d;
  }
  span {
    background-color: inherit;
    cursor: pointer;
    img {
      filter: opacity(0.2) drop-shadow(0 0 0 #b8b8b8cd) !important;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>Copyright 2023. All rights reserved</p>
    </Container>
  );
};

export default Footer;
