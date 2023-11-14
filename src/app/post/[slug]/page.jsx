import PostViewer from "@/components/post/Viewer";
import { getPost, getPostList } from "@/lib/post";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { post } = await getPost(slug);

  return {
    title: `${post.title}`,
    description: `${post.description}`,
    authors: [{ name: "quirks91" }],
    publisher: "quirks91@gmail.com",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const postList = await getPostList();

  return postList.map((post) => ({
    slug: post.slug,
  }));
}

const PostViewPage = async ({ params }) => {
  const { slug } = params;
  const { post } = await getPost(slug);

  return (
    <>
      <PostViewer postData={post} />
    </>
  );
};

export default PostViewPage;
