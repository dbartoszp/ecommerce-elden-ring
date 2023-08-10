import { useGetCart } from "@/app/cartContext/hooks/useGetCart/useGetCart";
import { CartItem } from "../CartItem/CartItem";
import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";
import { countWeaponsById } from "../../utils/countWeaponsById/countWeaponsById";

type CartWeapon = {
  id: number;
  cart_id: number;
  weapon_id: number;
};

export const CartComponent = () => {
  //!! TO FIX
  const cartWeapons = useGetCart();
  const weaponsIds = cartWeapons.data?.map(
    (cartWeapon: CartWeapon) => cartWeapon.weapon_id,
  );

  const weapons = useGetWeaponsByIds(weaponsIds).data;

  const weaponItems = weapons?.map((weapon) => {
    return {
      weapon,
      count: countWeaponsById({ weapons: weaponsIds, weaponId: weapon.id }),
    };
  });

  return (
    <div>
      <h1>Your weaponItems:</h1>
      {weaponItems?.map((weaponItem) => (
        <div key={weaponItem.weapon.id}>
          <span>
            name: {weaponItem.weapon.name} count: {weaponItem.count} total
            price: {(weaponItem.count * weaponItem.weapon.price) / 100}zł
          </span>
        </div>
      ))}
    </div>
  );
};