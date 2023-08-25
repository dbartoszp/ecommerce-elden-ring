import { Button } from "@/modules/ui/Button/Button";
import { useGetWeaponFiltersByCategory } from "@/modules/weapons/useGetWeaponFiltersByCategory/hooks/useGetWeaponFiltersByCategory";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const SearchFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const filters = useGetWeaponFiltersByCategory(Number(categoryQuery));

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  const handleFilterChange = (filterName: string) => {
    router.replace(
      pathname + "?" + createQueryString("filter", String(filterName)),
    );
  };

  if (!filters.isSuccess) return <div>error</div>;
  if (filters.isLoading) return <div>loader</div>;

  return (
    <div className="flex flex-col space-y-2">
      {filters.data?.map((filter) => (
        <Button
          size="sm"
          onClick={() => handleFilterChange(filter.name)}
          key={filter.name}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

// import { useGetCategoryIDByName } from "@/modules/weapons/useGetCategoryIDByName/hooks/useGetCategoryIDByName";
// import { useGetWeaponFiltersByCategory } from "@/modules/weapons/useGetWeaponFiltersByCategory/hooks/useGetWeaponFiltersByCategory";
// import { useSearchParams } from "next/navigation";

// type SearchFiltersProps = {
//   categoryID: number;
// };

// export const SearchFilters = ({ categoryID }: SearchFiltersProps) => {
//   console.log(categoryID);
//   const filters = useGetWeaponFiltersByCategory(categoryID);
//   if (!filters.isSuccess) return <div>error z ladowaniem</div>;

//   console.log(categoryID);
//   return <div>SearchFilters</div>;
// };
