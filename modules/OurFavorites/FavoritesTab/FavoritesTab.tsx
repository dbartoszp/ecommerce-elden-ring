"use client";
import { FavoritesItem } from "../FavoritesItem.tsx/FavoritesItem";
import "keen-slider/keen-slider.min.css";
import { isZodError } from "@/modules/errors/type-guards/zod/isZodError";
import { FavoritesItemSkeleton } from "../FavoritesItem.tsx/FavoritesItemSkeleton";
import { useGetWeaponsByIds } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds";

type FavoritesTabProps = {
  weaponIds: number[];
};

export function FavoritesTab({ weaponIds }: FavoritesTabProps) {
  const weapons = useGetWeaponsByIds(weaponIds);

  if (weapons.isLoading || weapons.isFetching || !weapons.data)
    return <FavoritesItemSkeleton items={1} />;

  if (weapons.error && weapons.isError && isZodError(weapons.error)) {
    return <span>{weapons.error?.errors?.at(0)?.message}</span>;
  }

  return weapons.data.map((weapon) => {
    return (
      <div key={weapon.id}>
        <FavoritesItem weapon={weapon} />
      </div>
    );
  });
}
