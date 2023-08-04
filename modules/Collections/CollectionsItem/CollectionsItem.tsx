import { Button } from "@/modules/ui/Button/Button";
import { Modal } from "@/modules/ui/Modal/Modal";
import Image from "next/image";
import { CollectionsModalItem } from "./CollectionsModalItem/CollectionsModalItem";
import { useGetWeaponsByIds } from "@/modules/weapons/hooks/useGetWeaponsByIds/useGetWeaponsByIds";
import { isZodError } from "@/modules/errors/type-guards/zod/isZodError";

type Collection = {
  title: string;
  image: string;
  items: number[];
};

type CollectionsItemProps = {
  collection: Collection;
};

export const CollectionsItem = ({ collection }: CollectionsItemProps) => {
  const weapons = useGetWeaponsByIds(collection.items);

  if (weapons.isLoading || weapons.isFetching || !weapons.data) return null;

  if (weapons.error && weapons.isError) {
    console.log(weapons.error);

    if (isZodError(weapons.error)) return "There is a problem with Zod";

    return weapons.error.at(0).message;
  }

  return (
    <div className="flex h-full  items-center justify-center">
      <Image
        className="h-full  w-96 object-cover"
        src={collection.image}
        width={400}
        height={400}
        alt={`${collection.title} collection`}
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform md:bottom-12">
        <Modal
          title={`Check out the ${collection.title} collection`}
          description="Description test!!!"
          openText={`Check out the ${collection.title} collection`}
        >
          {weapons.data.map((weapon) => (
            <div key={weapon.id}>
              <CollectionsModalItem weapon={weapon} />
            </div>
          ))}
          {/* <CollectionsModalItem /> */}
        </Modal>
      </div>
    </div>
  );
};
