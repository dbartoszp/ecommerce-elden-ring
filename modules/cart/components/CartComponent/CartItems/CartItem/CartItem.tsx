import { Weapon } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds.schema";

type WeaponItem = {
  weapon: Weapon[number];
  count: number;
};

export const CartItem = ({ weapon, count }: WeaponItem) => {
  // console.log("weapon:", weapon);
  return <div>{weapon.name + count}</div>;
};
