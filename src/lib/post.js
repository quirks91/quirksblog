import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { extractSlug, mdxFilePath, transformImgSrc } from "./mdx";
import rehypeHighlight from "rehype-highlight";

const BASE_PATH = "/contents/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = async (postPath) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data;

  const mdxPath = mdxFilePath(postPath, BASE_PATH);
  const slug = extractSlug(postPath, BASE_PATH);

  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[transformImgSrc, { mdxPath, path: POSTS_PATH }]],
      rehypePlugins: [rehypeHighlight, { theme: "one-dark-pro" }],
      format: "mdx",
    },
  });

  return {
    ...grayMatter,
    slug,
    mdx,
  };
};

export const getPostList = async () => {
  const postPaths = sync(`${POSTS_PATH}/**/*.mdx`);
  const result = await Promise.all(
    postPaths.map((postPath) => {
      return parsePost(postPath);
    })
  );

  // 가져온 mdx파일들을 front matter의 date를 기준으로 내림차순 정렬합니다.
  return result.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
};

export const getPost = async (slug) => {
  const postList = await getPostList();
  const postIndex = postList.findIndex((post) => post?.slug === slug);

  return {
    post: postList[postIndex],
  };
};
