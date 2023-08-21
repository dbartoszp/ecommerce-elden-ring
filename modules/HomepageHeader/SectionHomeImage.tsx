import Image from "next/image";
import { Link } from "../ui/Button/Link";

export function SectionHomeImage() {
  return (
    <section className="relative z-30 mt-14 h-[780px] w-full 2xl:h-[880px]">
      <Image
        width={1280}
        height={780}
        className="absolute h-full w-full object-cover"
        alt="godrick-elden-ring"
        src="/images/section-home-image.jpg"
      />
      <div className="absolute bottom-16 left-8 space-y-2 stroke-2 text-elden-beige md:left-[20%]">
        <div
          style={{
            textShadow:
              "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
          }}
        >
          <h1 className="text-4xl font-bold tracking-widest">
            Choose the perfect weapon.
          </h1>
          <h2 className="text-xl font-semibold tracking-wide">
            Affordable. Sharp. Enchanted. We&apos;ve got it all.
          </h2>
        </div>
        <div className="space-x-6">
          <Link href="/" variant="secondary" size="md">
            SHOP MELEE
          </Link>
          <Link href="/" variant="secondary" size="md">
            SHOP SORCERY
          </Link>
        </div>
      </div>
    </section>
  );
}
