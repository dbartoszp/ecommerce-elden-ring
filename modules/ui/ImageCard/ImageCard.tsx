import Image from "next/image";

type ImageCardProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  width: number;
  height: number;
};

export function ImageCard({
  src,
  alt,
  title,
  description,
  width,
  height,
}: ImageCardProps) {
  return (
    <div className="flex h-auto flex-col items-center justify-between space-y-3 md:w-96">
      <Image
        className="h-1/2 w-3/4 rounded-md border border-elden-beige object-cover md:h-full md:w-full"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="flex-col space-y-1 text-center">
        <h3 className="font-semibold">{title}</h3>
        <h3 className="text-sm font-thin">{description}</h3>
      </div>
    </div>
  );
}
