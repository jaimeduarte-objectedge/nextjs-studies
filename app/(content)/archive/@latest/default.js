import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/newsList/newslist";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
