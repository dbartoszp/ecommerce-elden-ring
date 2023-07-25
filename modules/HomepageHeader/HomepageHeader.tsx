/* eslint-disable @next/next/no-img-element */
import headerBackground from "@/public/images/homepage-header-bg.jpg";
import Image from "next/image";
import { Button } from "../ui/Button/Button";

export function HomepageHeader() {
  return (
    <header className="relative z-30 mt-[4.3rem] h-[755px] w-full 2xl:h-[865px]">
      <Image
        width={1280}
        height={720}
        className="absolute h-full w-full object-cover"
        alt="godrick-elden-ring"
        src="/images/homepage-header-bg.jpg"
      />
      <div
        style={{
          textShadow:
            "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
        }}
        className="absolute bottom-16 left-8 space-y-2 stroke-2 text-elden-beige md:left-[20%]"
      >
        <h1 className="text-4xl font-bold tracking-widest">
          Choose the perfect weapon.
        </h1>
        <h2 className="text-xl font-semibold tracking-wide">
          Affordable. Sharp. Enchanted. We&apos;ve got it all.
        </h2>
        <div className="space-x-6">
          <Button variant="secondary" to="melee">
            SHOP MELEE
          </Button>
          <Button variant="secondary" to="sorcery">
            SHOP SORCERY
          </Button>
        </div>
      </div>
    </header>
  );
}
