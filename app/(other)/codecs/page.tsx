import dynamic from "next/dynamic";

const Codecs = dynamic(
  () => import("~@/src/screens/codecs").then((p) => p.CodecsPage),
  { ssr: false }
);

export default function CodecsPage() {
  return <Codecs />;
}
