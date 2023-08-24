import { WeaponList } from "@/modules/ui/WeaponList/WeaponList";
import { useGetWeaponsByRange } from "@/modules/weapons/useGetWeaponsBy/useGetWeaponsByRange/hooks/useGetWeaponsByRange";
import { useSearchParams } from "next/navigation";
import { SearchResultsCounter } from "./SearchResultsCounter/SearchResultsCounter";
import { useGetWeaponCountByName } from "@/modules/weapons/useGetWeaponCount/useGetWeaponCountByName/hooks/useGetWeaponCountByName";
import { SearchResultsNavigation } from "./SearchResultsNavigation/SearchResultsNavigation";

type SearchResultsPageProps = {
  itemsPerPage: number;
};

export const SearchResultsPage = ({ itemsPerPage }: SearchResultsPageProps) => {
  const searchParams = useSearchParams();

  const queryCount = useGetWeaponCountByName(searchParams.get("query") ?? "");

  const currentPage = Number(searchParams.get("page")) || 1;

  const weapons = useGetWeaponsByRange({
    start: itemsPerPage * (currentPage - 1),
    end: itemsPerPage * currentPage - 1,
    name: searchParams.get("query") ?? "",
  });

  if (!weapons.isSuccess) {
    return <div>error z weapons</div>;
  }

  if (!queryCount.isSuccess) {
    return <div>error z liczeniem</div>;
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
