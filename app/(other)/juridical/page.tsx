import dynamic from "next/dynamic";

const Juridical = dynamic(
  () => import("~@/src/screens/juridical").then((p) => p.YuridiPage),
  { ssr: false }
);

export default function JuridicalPage() {
  return <Juridical />;
}
