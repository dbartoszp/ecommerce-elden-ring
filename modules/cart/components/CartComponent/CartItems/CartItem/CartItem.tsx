import { useAddToCart } from "@/modules/cart/hooks/useAddToCart/useAddToCart";
import { useDeleteFromCart } from "@/modules/cart/hooks/useDeleteFromCart/useDeleteFromCart";
import { Button } from "@/modules/ui/Button/Button";
import { Weapon } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds.schema";
import Image from "next/image";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

type WeaponItem = {
  weapon: Weapon[number];
  count: number;
  onAdd: () => void;
  onDelete: () => void;
};

export const CartItem = ({ weapon, count, onAdd, onDelete }: WeaponItem) => {
  const addToCart = useAddToCart();
  const deleteFromCart = useDeleteFromCart();
  const [countNew, setCountNew] = useState(count);

  const handleAddToCart = () => {
    onAdd();
    addToCart.mutate({ weaponId: weapon.id });
    setCountNew((cn) => (cn = cn + 1));
  };

  const handleDeleteFromCart = () => {
    if (countNew > 0) {
      onDelete();
      deleteFromCart.mutate({ weaponId: weapon.id });
      setCountNew((cn) => (cn = cn - 1));
    }
  };

  return (
    <div className="flex items-center space-x-3 border-b border-b-dark-green p-2 sm:space-y-12 md:space-y-16">
      <Image alt={weapon.name} src={weapon.image} width={100} height={100} />
      <div className="flex flex-col space-y-1">
        <span className="border-b border-b-dark-green font-semibold uppercase tracking-wider ">
          {weapon.name}
        </span>
        <span>
          Currently in cart:{" "}
          <span className="text-lg font-semibold">{countNew}</span>
        </span>
        <span>
          Total price:{" "}
          <span className="text-lg font-semibold">
            {(countNew * weapon.price) / 100} PLN
          </span>
        </span>
      </div>
      <Button size="md" onClick={handleAddToCart}>
        <HiPlus />
      </Button>
      <Button size="md" variant="danger" onClick={handleDeleteFromCart}>
        <HiMinus />
      </Button>
    </div>
  );
};
