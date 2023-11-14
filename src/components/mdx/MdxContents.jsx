"use client";

import styled from "styled-components";
import { prism } from "@/styles/prism";

function MdxContents({ children }) {
  return (
    <StyledMdxContents className="mdx-contents">{children}</StyledMdxContents>
  );
}

const StyledMdxContents = styled.div`
  ${prism}
  line-height: 1.8;
  img {
    display: block;
    cursor: pointer;
    margin-inline: auto;
  }
  .image-cite {
    display: block;
    text-align: center;
    margin-top: 6px;
    color: #666;
    font-size: 12px;
  }
  code {
    width: 100%;
    font-weight: 400;
    display: inline-block;
    font-size: 14px;
    line-height: 1.5em;
    padding-block: 0;
    margin-block: 0.25em;
  }
  .rehype-code-title {
    text-align: right;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 14px;
    text-shadow: 0 1px white;
    position: relative;
    border-radius: 6px;
    padding: 6px 16px;
    border-width: 1px 1px 0;
  }
  ol {
    list-style: decimal;
  }
  ul {
    list-style: disc;
  }
  pre {
  }
`;

export default MdxContents;
