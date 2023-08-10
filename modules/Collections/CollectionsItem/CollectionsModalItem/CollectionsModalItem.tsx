import { useAddToCart } from "@/app/cartContext/hooks/useAddToCart/useAddToCart";
import { useDeleteFromCart } from "@/app/cartContext/hooks/useDeleteFromCart/useDeleteFromCart";
import { useGetCart } from "@/app/cartContext/hooks/useGetCart/useGetCart";
import { countWeaponsById } from "@/app/cartContext/utils/countWeaponsById/countWeaponsById";
import { Button } from "@/modules/ui/Button/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

type CartWeapon = {
  id: number;
  cart_id: number;
  weapon_id: number;
};

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
    if (cartWeapons.isSuccess) {
      const weaponsIds = cartWeapons.data.map(
        (cartWeapon: CartWeapon) => cartWeapon.weapon_id,
      );
      setCount(countWeaponsById({ weapons: weaponsIds, weaponId: weapon.id }));
    }
  }, [cartWeapons.data, cartWeapons.isSuccess, weapon.id]);

  const handleAddToCart = () => {
    addToCart.mutate({ weapon_id: weapon.id });
    setCount((c) => c + 1);
  };

  const handleDeleteFromCart = () => {
    if (count > 0) {
      deleteFromCart.mutate({ weapon_id: weapon.id });
      setCount((c) => c - 1);
    }
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
        <div className="flex space-x-2">
          <span className={count > 0 ? "" : "invisible"}>
            Currently in cart: {count}
          </span>
          <Button size="md" onClick={handleAddToCart}>
            <HiPlus />
          </Button>
          <Button size="md" variant="danger" onClick={handleDeleteFromCart}>
            <HiMinus />
          </Button>
        </div>
      </div>
    </>
  );
};
