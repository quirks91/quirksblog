"use client";

import styled from "styled-components";
import Link from "next/link";

const PostList = ({ postList }) => {
  return (
    <StyledPostList>
      {postList.map((post) => {
        return (
          <div key={post.slug} className="post-item">
            <Link href={`/post/${post.slug}`} className="title">
              {post.title}
            </Link>
            <div className="description">{post.description}</div>
            <div className="date">{post.date}</div>
          </div>
        );
      })}
    </StyledPostList>
  );
};
const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  .post-item {
    padding: 30px 0;
    .title {
      font-weight: 700;
      font-size: 2.4rem;
      color: black;
      &:hover {
        color: #008cf6;
      }
    }
    .description {
    }
    .date {
      font-size: 1.4rem;
      margin-top: 6px;
      color: #666;
    }
    .categories {
      display: flex;
      column-gap: 12px;
      margin-top: 6px;
    }
  }
`;

export default PostList;
