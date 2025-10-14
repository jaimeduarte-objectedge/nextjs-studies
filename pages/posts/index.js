import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import PostsGrid from "../../components/posts/posts-grid";
import { getAllPosts } from "../../lib/posts-lib";
import Head from "next/head";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All posts for our blog." />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
