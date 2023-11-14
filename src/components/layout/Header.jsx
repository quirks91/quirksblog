"use client";

import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 8rem;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 2rem;
  }
  div {
    cursor: pointer;
  }

  color: var(--nav-gray);
  nav {
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
