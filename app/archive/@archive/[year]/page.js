import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/newsList/newslist";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
