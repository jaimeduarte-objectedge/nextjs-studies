import { Fragment } from "react/jsx-runtime";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-lib";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dev Froggy</title>
        <meta name="description" content="I post about programming and web development. HOPLOBATRACHUS" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
