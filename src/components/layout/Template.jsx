"use client";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 64rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const InnerLayout = styled.div`
  min-height: 100%;
  padding-bottom: 8rem;
`;

const Template = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        <InnerLayout>{children}</InnerLayout>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Template;
