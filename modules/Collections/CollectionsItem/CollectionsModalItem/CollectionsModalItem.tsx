import { useAddToCart } from "@/modules/cart/hooks/useAddToCart/useAddToCart";
import { useDeleteFromCart } from "@/modules/cart/hooks/useDeleteFromCart/useDeleteFromCart";
import { useGetCart } from "@/modules/cart/hooks/useGetCart/useGetCart";
import { countWeaponsById } from "@/modules/cart/utils/countWeaponsById/countWeaponsById";
import { Button } from "@/modules/ui/Button/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

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
  const deleteFromCart = useDeleteFromCart();
  const cartWeapons = useGetCart();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cartWeapons.isSuccess && cartWeapons.data) {
      const weaponsIds = cartWeapons.data.map(
        (cartWeapon) => cartWeapon.weaponId,
      );
      setCount(countWeaponsById({ weapons: weaponsIds, weaponId: weapon.id }));
    }
  }, [cartWeapons.data, cartWeapons.isSuccess, weapon.id]);

  const handleAddToCart = () => {
    addToCart.mutate({ weaponId: weapon.id });
    setCount((c) => c + 1);
  };

  const handleDeleteFromCart = () => {
    if (count > 0) {
      deleteFromCart.mutate({ weaponId: weapon.id });
      setCount((c) => c - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-around border-b border-b-dark-green p-1 md:justify-between">
        <Image src={weapon.image} alt={weapon.name} width={80} height={20} />
        <div className="flex flex-col">
          <span className="ml-5 mt-5 font-semibold text-dark-green">
            {weapon.name}
          </span>
          <span className="ml-5 mt-5 font-semibold text-dark-green">
            {weapon.price / 100}zł
          </span>
        </div>
        <div className="flex space-x-2 font-semibold">
          <span className={count > 0 ? "" : "invisible"}>
            Currently in cart: {count}
          </span>
          <Button size="md" onClick={handleAddToCart}>
            <HiPlus />
          </Button>
          <Button
            size="md"
            variant={count > 0 ? "danger" : "secondary"}
            onClick={handleDeleteFromCart}
            disabled={count <= 0}
          >
            <HiMinus />
          </Button>
        </div>
      </div>
    </>
  );
};
