import AllPosts from "../../components/posts/all-posts";
import PostsGrid from "../../components/posts/posts-grid";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps easy and cool",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps easy and cool",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps easy and cool",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps easy and cool",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
