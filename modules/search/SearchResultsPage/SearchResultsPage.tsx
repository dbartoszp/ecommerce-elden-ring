import { WeaponList } from "@/modules/ui/WeaponList/WeaponList";
import { useGetWeaponCount } from "@/modules/weapons/useGetWeaponCount/hooks/useGetWeaponCount";
import React from "react";

type SearchResultsPageProps = {
  itemsPerPage: number;
};

export const SearchResultsPage = ({ itemsPerPage }: SearchResultsPageProps) => {
  const totalCount = useGetWeaponCount();

  if (!totalCount.isSuccess) {
    return <div>error z liczeniem</div>;
  }
  const numberOfPages = Math.ceil(totalCount.data / itemsPerPage);
  console.log(numberOfPages);
  return (
    <div>
      <WeaponList />
    </div>
  );
};
