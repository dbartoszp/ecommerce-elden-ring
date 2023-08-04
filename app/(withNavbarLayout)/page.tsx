import { Collections } from "@/modules/Collections/Collections";
import { SectionHomeImage } from "@/modules/HomepageHeader/SectionHomeImage";
import { OurFavorites } from "@/modules/OurFavorites/OurFavorites";
import { Modal } from "@/modules/ui/Modal/Modal";
import { Separator } from "@/modules/ui/Separator/Separator";

export default function Home() {
  return (
    <main>
      <SectionHomeImage />
      <OurFavorites />
      {/* <div className="mt-[20rem]">koksu</div> */}
      <Separator src="/images/separator-2.jpg" alt="" />
      {/* <div className="mt-[20rem]">koksu</div> */}
      <Collections />
    </main>
  );
}
