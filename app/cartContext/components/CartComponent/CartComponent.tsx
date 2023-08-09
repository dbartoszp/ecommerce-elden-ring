import { useGetCart } from "@/app/cartContext/hooks/useGetCart/useGetCart";
import { CartItem } from "../CartItem/CartItem";
import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";
import { countWeaponsById } from "../../utils/countWeaponsById/countWeaponsById";

type CartWeapon = {
  id: number;
  cart_id: number;
  weapon_id: number;
};

const testId = 219;

export const CartComponent = () => {
  const cartWeapons = useGetCart().data || [];
  const weaponsIds = cartWeapons.map(
    (cartWeapon: CartWeapon) => cartWeapon.weapon_id,
  );

  const weapons = useGetWeaponsByIds(weaponsIds).data || [];
  console.log(weapons);
  const testCount = countWeaponsById({ weapons: weaponsIds, weaponId: testId });
  console.log(`This many weapons with the id ${testId}`, testCount);

  const weaponItems = weapons.map((weapon) => {
    return {
      weapon,
      count: countWeaponsById({ weapons: weaponsIds, weaponId: weapon.id }),
    };
  });

  console.log("weaponItems:", weaponItems);
  console.log("weaponItems[0]", weaponItems[0]);

  return (
    <div>
      {/* <CartItem weaponItem={weaponItems[0]} /> */}
      <h1>Your weapons:</h1>
      {weapons.map((weapon, i) => (
        <div key={i}>
          <span>
            name:{weapon.name} count:{testCount} total:
            {(weapon.price * testCount) / 100}zł
          </span>
          {/* <CartItem weapon={weapon} /> */}
        </div>
      ))}
    </div>
  );
};
