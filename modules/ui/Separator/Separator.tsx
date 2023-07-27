import Image from "next/image";

type SeparatorProps = {
  src: string;
  alt: string;
};

export function Separator({ src, alt }: SeparatorProps) {
  return (
    <div className="relative h-96 w-full ">
      <Image layout="fill" objectFit="cover" src={src} alt={alt} />
    </div>
  );
}
