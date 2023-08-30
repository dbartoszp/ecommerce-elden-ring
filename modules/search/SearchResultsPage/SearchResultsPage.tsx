import { useGetWeaponsByRange } from "@/modules/weapons/useGetWeaponsBy/useGetWeaponsByRange/hooks/useGetWeaponsByRange";
import { useSearchParams } from "next/navigation";
import { SearchResultsCounter } from "./SearchResultsCounter/SearchResultsCounter";
import { SearchResultsNavigation } from "./SearchResultsNavigation/SearchResultsNavigation";
import { useGetAllWeapons } from "@/modules/weapons/useGetAllWeapons/hooks/useGetAllWeapons";
import { ErrorMessage } from "@/modules/ui/ErrorMessage/ErrorMessage";
import { SearchResultsSkeleton } from "./SearchResultsSkeleton/SearchResultsSkeleton";
import { WeaponList } from "@/modules/weapons/WeaponList/WeaponList";
import { useGetWeaponCount } from "@/modules/weapons/useGetWeaponCount/useGetWeaponCount/hooks/useGetWeaponCount";

type SearchResultsPageProps = {
  itemsPerPage: number;
};

export const SearchResultsPage = ({ itemsPerPage }: SearchResultsPageProps) => {
  const searchParams = useSearchParams();
  const weaponsAll = useGetAllWeapons();

  const nameQuery = searchParams.get("query") || "";
  const filterQuery = searchParams.get("filter") || "";
  const categoryQuery = Number(searchParams.get("category")) || 0;
  const pageQuery = Number(searchParams.get("page")) || 1;

  const queryCount = useGetWeaponCount({
    name: nameQuery,
    filter: filterQuery,
    categoryID: categoryQuery,
  });

  const weapons = useGetWeaponsByRange({
    start: itemsPerPage * (pageQuery - 1),
    end: itemsPerPage * pageQuery - 1,
    name: nameQuery,
    categoryID: categoryQuery,
    filter: filterQuery,
  });

  if (weapons.isLoading) {
    return <SearchResultsSkeleton />;
  }

  if (!weapons.isSuccess || !weaponsAll.isSuccess) {
    return <ErrorMessage>Error loading weapons</ErrorMessage>;
  }

  if (!queryCount.isSuccess) {
    return <ErrorMessage>Error counting weapons</ErrorMessage>;
  }
  return (
    <div>
      <SearchResultsCounter
        results={weapons.data.length}
        total={queryCount.data}
      />
      <div className="flex flex-col space-y-10">
        <WeaponList weapons={weapons.data} />
        <SearchResultsNavigation
          itemsPerPage={itemsPerPage}
          queryCount={queryCount.data}
        />
      </div>
    </div>
  );
};
