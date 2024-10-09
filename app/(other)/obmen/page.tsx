import dynamic from "next/dynamic";

const Obmen = dynamic(
  () => import("~@/src/screens/obmen").then((p) => p.ObmenPage),
  { ssr: false }
);

export default function ObmenPage() {
  return <Obmen />;
}
