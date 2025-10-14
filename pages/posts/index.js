import AllPosts from "../../components/posts/all-posts";
import PostsGrid from "../../components/posts/posts-grid";
import { getAllPosts } from "../../lib/posts-lib";

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
