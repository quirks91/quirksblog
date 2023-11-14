import { getPostList } from "@/lib/post";

export default async function sitemap() {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  const postList = await getPostList();

  const routes = postList.map((v) => {
    return {
      url: `${URL}/post/${v.slug}`,
      lastModified: new Date(v.date).toISOString(),
    };
  });

  const mainRoutes = [
    {
      url: `${URL}`,
      lastModified: new Date('2023-11-14').toISOString(),
    },
  ];
  return [...routes, ...mainRoutes];
}
