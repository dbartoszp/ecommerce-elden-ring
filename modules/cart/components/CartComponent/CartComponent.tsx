import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";
import { countWeaponsById } from "../../utils/countWeaponsById/countWeaponsById";
import { useGetCart } from "../../hooks/useGetCart/useGetCart";

export const CartComponent = () => {
  const cartWeapons = useGetCart();

  let weaponsIds = cartWeapons.data?.map((cartWeapon) => cartWeapon.weaponId);
  if (!weaponsIds) weaponsIds = [];

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
