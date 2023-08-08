import { useAddToCart } from "@/app/cartContext/hooks/useAddToCart/useAddToCart";
import { Button } from "@/modules/ui/Button/Button";
import Image from "next/image";
import { HiPlus } from "react-icons/hi2";

type Weapon = {
  id: number;
  name: string;
  category: string;
  weight: number;
  image: string;
  price: number;
};

type CollectionsModalItemProps = {
  weapon: Weapon;
};

export const CollectionsModalItem = ({ weapon }: CollectionsModalItemProps) => {
  const addToCart = useAddToCart();

  const handleAddToCart = () => {
    addToCart.mutate({ weapon_id: weapon.id });
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-b-dark-green p-1">
        <Image src={weapon.image} alt={weapon.name} width={80} height={20} />
        <div className="flex flex-col">
          <span className="ml-5 mt-5 font-semibold text-dark-green">
            {weapon.name}
          </span>
          <span className="ml-5 mt-5 font-semibold text-dark-green">
            {weapon.price / 100}zł
          </span>
        </div>
        <div className="flex">
          <Button size="md" onClick={handleAddToCart}>
            <HiPlus />
          </Button>
        </div>
      </div>
    </>
  );
};
