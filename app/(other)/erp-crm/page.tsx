import dynamic from "next/dynamic";

const ErpCrm = dynamic(
  () => import("~@/src/screens/erp-crm").then((p) => p.ErpCrmPage),
  { ssr: false }
);

export default function ErpCrmPage() {
  return <ErpCrm />;
}
