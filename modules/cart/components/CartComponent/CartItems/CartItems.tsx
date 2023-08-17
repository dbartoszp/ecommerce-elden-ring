"use client";
import { countWeaponsById } from "@/modules/cart/utils/countWeaponsById/countWeaponsById";
import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";
import { CartItem } from "./CartItem/CartItem";
import { Link } from "@/modules/ui/Button/Link";
import { useState } from "react";

type CartItemsProps = {
  weaponIds: number[];
};

export const CartItems = ({ weaponIds }: CartItemsProps) => {
  const weaponsData = useGetWeaponsByIds(weaponIds);
  // const [totalPrice, setTotalPrice] = useState(0);
  const weapons = weaponsData.data;

  let totalPrice = 0;
  const weaponItems = weapons?.map((weapon) => {
    const weaponsCounted = countWeaponsById({
      weapons: weaponIds,
      weaponId: weapon.id,
    });
    totalPrice += weaponsCounted * weapon.price;
    // setTotalPrice(
    //   (totalPrice) => (totalPrice += weaponsCounted * weapon.price),
    // );

    return {
      weapon,
      count: weaponsCounted,
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
