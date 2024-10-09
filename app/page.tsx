import dynamic from "next/dynamic";

const RootPage = dynamic(
  () => import("~@/src/screens/root").then((p) => p.RootPage),
  { ssr: false }
);

export default function Home() {
  return <RootPage />;
}
