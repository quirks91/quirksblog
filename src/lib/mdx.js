import fs from "fs";
import { visit } from "unist-util-visit";
import path from "path";

// 확장자 추출
const getExtensionOfFilename = (filename) => {
  const lastDotIndex = filename.lastIndexOf(".");

  if (lastDotIndex === -1) {
    return "";
  }

  const extension = filename.slice(lastDotIndex + 1);
  return extension;
};

export const transformImgSrc = ({ mdxPath, path }) => {
  return (tree) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => child.type === "image");

      if (image === undefined) return;

      const fileName = image.url.replace("./", "");
      const imageUrl = `${path}/${mdxPath}/${fileName}`;
      const imageBuffer = fs.readFileSync(imageUrl);
      const base64String = imageBuffer.toString("base64");
      const extension = getExtensionOfFilename(fileName);
      image.url = `data:image/${extension};base64,${base64String}`;

      if (!image.alt) return;

      const citeNode = {
        type: "mdxJsxFlowElement",
        name: "cite",
        attributes: [
          { type: "mdxJsxAttribute", name: "className", value: "image-cite" },
        ],
        children: [{ type: "text", value: image.alt }],
      };

      node.children.push(citeNode);
    });
  };
};

export const extractSlug = (pathString, basePath) => {
  const path = "/" + pathString.replace(/\\/g, "/");
  return path
    .slice(path.indexOf(basePath))
    .replace(`${basePath}/`, "")
    .replace("/index.mdx", "");
};

export const mdxFilePath = (pathString, basePath) => {
  const path = "/" + pathString.replace(/\\/g, "/");

  return path
    .slice(path.indexOf(basePath))
    .replace(`${basePath}/`, "")
    .replace("/index.mdx", "");
};
