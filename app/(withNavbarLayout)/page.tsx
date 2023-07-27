import { Footer } from "@/modules/Footer/Footer";
import { SectionHomeImage } from "@/modules/HomepageHeader/SectionHomeImage";
import { Separator } from "@/modules/ui/Separator/Separator";

export default function Home() {
  return (
    <main>
      <SectionHomeImage />
      <div className="mt-[20rem]">koksu</div>
      <Separator src="/images/separator-2.jpg" alt="" />
      <div className="mt-[20rem]">koksu</div>
      <Footer />
    </main>
  );
}
