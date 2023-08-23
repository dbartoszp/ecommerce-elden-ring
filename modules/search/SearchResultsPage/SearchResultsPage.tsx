import { Button } from "@/modules/ui/Button/Button";
import { WeaponList } from "@/modules/ui/WeaponList/WeaponList";
import { useGetWeaponsByRange } from "@/modules/weapons/useGetWeaponsBy/useGetWeaponsByRange/hooks/useGetWeaponsByRange";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { SearchResultsCounter } from "./SearchResultsCounter/SearchResultsCounter";
import { useGetWeaponCountByName } from "@/modules/weapons/useGetWeaponCount/useGetWeaponCountByName/hooks/useGetWeaponCountByName";

type SearchResultsPageProps = {
  itemsPerPage: number;
};

export const SearchResultsPage = ({ itemsPerPage }: SearchResultsPageProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const queryCount = useGetWeaponCountByName(searchParams.get("query") ?? "");

  const currentPage = Number(searchParams.get("page")) || 1;

  const weapons = useGetWeaponsByRange({
    start: itemsPerPage * (currentPage - 1),
    end: itemsPerPage * currentPage - 1,
    name: searchParams.get("query") ?? "",
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      router.replace(
        pathname + "?" + createQueryString("page", `${currentPage + 1}`),
      );
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.replace(
        pathname + "?" + createQueryString("page", `${currentPage - 1}`),
      );
    }
  };

  if (!weapons.isSuccess) {
    return <div>error z weapons</div>;
  }

  if (!queryCount.isSuccess) {
    return <div>error z liczeniem</div>;
  }
  const numberOfPages = Math.ceil(queryCount.data / itemsPerPage);
  return (
    <div>
      <SearchResultsCounter
        results={weapons.data.length}
        total={queryCount.data}
      />
      <Button size="sm" onClick={handlePrevPage}>
        poprzednia
      </Button>
      <span>{currentPage}</span>
      <Button size="sm" onClick={handleNextPage}>
        kolejna
      </Button>
      <WeaponList weapons={weapons.data} />
    </div>
  );
};
