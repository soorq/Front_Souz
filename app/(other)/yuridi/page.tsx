import dynamic from "next/dynamic";

const Yuridik = dynamic(
  () => import("~@/src/screens/yuridi").then((p) => p.YuridiPage),
  { ssr: false }
);

export default function YuridikPage() {
  return <Yuridik />;
}
