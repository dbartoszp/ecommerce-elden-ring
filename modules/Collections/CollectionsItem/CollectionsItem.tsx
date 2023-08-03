import { Button } from "@/modules/ui/Button/Button";
import Image from "next/image";

type Collection = {
  title: string;
  image: string;
  items: number[];
};

type CollectionsItemProps = {
  collection: Collection;
};

export const CollectionsItem = ({ collection }: CollectionsItemProps) => {
  const handleOpenModal = () => {
    console.log("open modal");
  };

  return (
    <div className="flex h-full w-96 items-center justify-center">
      <Image
        className="h-full w-full object-cover"
        src={collection.image}
        width={400}
        height={400}
        alt={`${collection.title} collection`}
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform md:bottom-12">
        <Button size="md" variant="secondary" onClick={handleOpenModal}>
          Check out the {collection.title} collection
        </Button>
      </div>
    </div>
  );
};
