"use client";
import { FavoritesItem } from "../FavoritesItem.tsx/FavoritesItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useGetWeaponsByIds } from "@/modules/weapons/hooks/useGetWeaponsByIds/useGetWeaponsByIds";
import { Spinner } from "@/modules/ui/Spinner/Spinner";
import { useEffect } from "react";
import { ZodError } from "zod";

type FavoritesTabProps = {
  weaponIds: number[];
};

export function FavoritesTab({ weaponIds }: FavoritesTabProps) {
  const weapons = useGetWeaponsByIds(weaponIds);

  //todo spinner styling
  if (weapons.isLoading || weapons.isFetching || !weapons.data)
    return <Spinner />;

  if (weapons.error && weapons.isError) {
    console.log(weapons.error);
    if (weapons.error instanceof ZodError) {
      console.log(weapons.error);
    }

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
