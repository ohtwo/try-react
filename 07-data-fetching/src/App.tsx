import { type ReactNode, useEffect, useState } from "react";

import BlogPosts, { type BlogPost } from "./components/BlogPosts.tsx";
import { get } from "./util/http.ts";
import fetchingImg from "./assets/data-fetching.png";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPosts() {
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts",
      )) as RawDataBlogPost[];

      const posts = data.map((post) => ({
        id: post.id,
        title: post.title,
        text: post.body,
      }));

      setFetchedPosts(posts);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="Fetching..." />
      {content}
    </main>
  );
}

export default App;
