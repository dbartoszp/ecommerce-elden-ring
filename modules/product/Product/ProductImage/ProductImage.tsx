import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <Image
      src={src}
      width={400}
      height={400}
      alt={alt}
      className="border-b border-b-dark-green bg-[#fafafa] pb-2 pt-12  shadow-md"
    />
  );
};
