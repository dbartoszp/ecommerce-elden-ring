import { countWeaponsById } from "@/modules/cart/utils/countWeaponsById/countWeaponsById";
import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";
import { CartItem } from "./CartItem/CartItem";
import { Link } from "@/modules/ui/Button/Link";

type CartItemsProps = {
  weaponIds: number[];
};

export const CartItems = ({ weaponIds }: CartItemsProps) => {
  const weapons = useGetWeaponsByIds(weaponIds).data;
  let totalPrice = 0;

  const weaponItems = weapons?.map((weapon) => {
    totalPrice +=
      countWeaponsById({ weapons: weaponIds, weaponId: weapon.id }) *
      weapon.price;
    return {
      weapon,
      count: countWeaponsById({ weapons: weaponIds, weaponId: weapon.id }),
    };
  });

  return (
    <div className="items-center justify-center text-dark-green sm:flex sm:flex-row sm:space-x-12 md:space-x-24">
      <div>
        {weaponItems?.map((weaponItem) => {
          return (
            <div key={weaponItem.weapon.id}>
              <CartItem weapon={weaponItem.weapon} count={weaponItem.count} />
            </div>
          );
        })}
      </div>
      <div>
        <div className="mb-4 mt-3 text-center">
          <span className="text-xl font-semibold">
            TOTAL: {totalPrice / 100} PLN
          </span>
        </div>
        <div className="flex justify-center">
          <Link variant="primary" size="lg" href="/checkout">
            GO TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};
