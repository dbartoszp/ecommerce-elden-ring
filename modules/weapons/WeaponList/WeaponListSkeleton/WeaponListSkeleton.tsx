import React from "react";
import { WeaponCardSkeleton } from "../WeaponCard/WeaponCardSkeleton/WeaponCardSkeleton";

export const WeaponListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-10 lg:gap-16">
      <WeaponCardSkeleton />
      <WeaponCardSkeleton />
      <WeaponCardSkeleton />
      <WeaponCardSkeleton />
    </div>
  );
};
