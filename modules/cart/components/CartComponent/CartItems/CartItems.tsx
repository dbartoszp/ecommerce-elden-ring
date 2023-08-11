import { countWeaponsById } from "@/modules/cart/utils/countWeaponsById/countWeaponsById";
import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";
import { CartItem } from "./CartItem/CartItem";

type CartItemsProps = {
  weaponIds: number[];
};

export const CartItems = ({ weaponIds }: CartItemsProps) => {
  const weapons = useGetWeaponsByIds(weaponIds).data;

  const weaponItems = weapons?.map((weapon) => {
    return {
      weapon,
      count: countWeaponsById({ weapons: weaponIds, weaponId: weapon.id }),
    };
  });

  return (
    <div>
      {" "}
      {weaponItems?.map((weaponItem) => {
        console.log("weaponItem:", weaponItem);
        return (
          <div key={weaponItem.weapon.id}>
            <CartItem weapon={weaponItem.weapon} count={weaponItem.count} />
          </div>
        );
      })}
    </div>
  );
};
