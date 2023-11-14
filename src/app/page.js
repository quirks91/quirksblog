import PostList from "@/components/post/List";
import { getPostList } from "@/lib/post";

async function RootPage() {
  const postList = await getPostList();

  return (
    <>
      <PostList postList={postList} />
    </>
  );
}

export default RootPage;
