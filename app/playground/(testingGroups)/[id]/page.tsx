import { Metadata } from "next";
export const metadata: Metadata = {
  title: "test title change",
};

export default function page({ params }: any) {
  return (
    <div className="bg-red-600 text-4xl text-slate-100">
      page no. {params.id}
    </div>
  );
}
