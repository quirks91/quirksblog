"use client";

import styled from "styled-components";
import { MDXRemote } from "next-mdx-remote";
import MdxContents from "../mdx/MdxContents";

const PostViewer = ({ postData }) => {
  return (
    <>
      <StyledPostViewer>
        <section className="post-header">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-categories">
            {postData.categories.map((category) => {
              return <div key={category}>{category}</div>;
            })}
          </div>
          <div className="post-date">{postData.date}</div>
        </section>
        <div className="post-content">
          <MdxContents>
            <MDXRemote {...postData.mdx} />
          </MdxContents>
        </div>
      </StyledPostViewer>
    </>
  );
};

const StyledPostViewer = styled.article`
  .post-header {
    text-align: center;
    margin-bottom: 60px;
    .post-title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 12px;
    }
    .post-categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    .post-date {
      margin-top: 12px;
      color: #666;
      font-size: 14px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 1.4rem;
  }
  h3 {
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
  p {
    margin-bottom: 4rem;
  }
`;

export default PostViewer;
