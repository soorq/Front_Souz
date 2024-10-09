import dynamic from "next/dynamic";

const News = dynamic(
  () => import("~@/src/screens/news").then((p) => p.NewsPage),
  { ssr: false }
);

export default function NewsPage() {
  return <News />;
}
