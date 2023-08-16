import { Collections } from "@/modules/Collections/Collections";
import { SectionHomeImage } from "@/modules/HomepageHeader/SectionHomeImage";
import { OurFavorites } from "@/modules/OurFavorites/OurFavorites";
import { Separator } from "@/modules/ui/Separator/Separator";

export default function Home() {
  return (
    <main>
      <SectionHomeImage />
      <OurFavorites />
      <Separator src="/images/separator-2.jpg" alt="" />
      <Collections />
    </main>
  );
}
