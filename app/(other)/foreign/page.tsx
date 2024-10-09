import dynamic from "next/dynamic";

const Inoplatej = dynamic(
  () => import("~@/src/screens/inoplatej").then((p) => p.InoplatejPage),
  { ssr: false }
);

export default function InoplatejPage() {
  return <Inoplatej />;
}
