import { Navbar } from "@/modules/ui/Navbar/Navbar";

export default function TestIDLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: string;
  };
}) {
  return (
    <section>
      <h1>Test ID layout</h1>
      {children}
      <h2>Test ID layout</h2>
    </section>
  );
}
