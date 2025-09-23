import NewsList from "@/components/newsList/newslist";
import { getAllNews } from "@/lib/news";

export default async function NewsPage({ params }) {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
