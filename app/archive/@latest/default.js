import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/newsList/newslist";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
