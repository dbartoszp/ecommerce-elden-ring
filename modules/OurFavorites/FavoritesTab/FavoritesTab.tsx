"use client";
import { FavoritesItem } from "../FavoritesItem.tsx/FavoritesItem";
import "keen-slider/keen-slider.min.css";
import { useGetWeaponsByIds } from "@/modules/weapons/hooks/useGetWeaponsByIds/useGetWeaponsByIds";
import { isZodError } from "@/modules/errors/type-guards/zod/isZodError";
import { FavoritesItemSkeleton } from "../FavoritesItem.tsx/FavoritesItemSkeleton";

type FavoritesTabProps = {
  weaponIds: number[];
};

export function FavoritesTab({ weaponIds }: FavoritesTabProps) {
  const weapons = useGetWeaponsByIds(weaponIds);

  //todo spinner styling
  if (weapons.isLoading || weapons.isFetching || !weapons.data)
    return <FavoritesItemSkeleton items={1} />;

  if (weapons.error && weapons.isError) {
    console.log(weapons.error);

    isZodError(weapons.error);

    return weapons.error.at(0).message;
  }

  return weapons.data.map((weapon) => {
    return (
      <div key={weapon.id}>
        <FavoritesItem weapon={weapon} />
      </div>
    );
  });
}
