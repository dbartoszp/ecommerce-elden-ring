import { Metadata } from "next";

export const metadata: Metadata = {
  title: "test title change",
};

export default function page({ params }: any) {
  return <div>page no. {params.id}</div>;
}
