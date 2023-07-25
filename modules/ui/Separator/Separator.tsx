import Image from "next/image";

type SeparatorProps = {
  src: string;
  alt: string;
};

export function Separator({ src, alt }: SeparatorProps) {
  return (
    <div className="max-h-80">
      <Image
        className="max-h-80"
        src={src}
        alt={alt}
        width={1920}
        height={640}
      />
      {/* <div
        className="flex w-full items-center py-20"
        style={{ backgroundImage: `url('${src}')` }}
      >
        separator
      </div> */}
    </div>
  );
}
