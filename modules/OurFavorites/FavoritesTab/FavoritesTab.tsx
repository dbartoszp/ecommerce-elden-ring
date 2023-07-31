"use client";
import { FavoritesItem } from "../FavoritesItem.tsx/FavoritesItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useGetWeaponsByIds } from "@/modules/weapons/hooks/useGetWeaponsByIds/useGetWeaponsByIds";
import { Spinner } from "@/modules/ui/Spinner/Spinner";
import { useEffect } from "react";

type FavoritesTabProps = {
  weaponIds: number[];
};

export function FavoritesTab({ weaponIds }: FavoritesTabProps) {
  const weapons = useGetWeaponsByIds(weaponIds);
  // console.log(weapons.data);

  // const [sliderRef] = useKeenSlider<HTMLDivElement>(
  //   {
  //     breakpoints: {
  //       "(min-width:640px)": {
  //         slides: {
  //           perView: 2,
  //           spacing: 15,
  //         },
  //       },
  //       "(min-width:768px)": {
  //         slides: {
  //           perView: 3,
  //           spacing: 0,
  //         },
  //       },
  //     },
  //   },
  //   [],
  // );

  //todo spinner styling
  if (weapons.isLoading || weapons.isFetching || !weapons.data)
    return <Spinner />;

  if (weapons.error && weapons.isError) {
    console.log(weapons.error);
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
