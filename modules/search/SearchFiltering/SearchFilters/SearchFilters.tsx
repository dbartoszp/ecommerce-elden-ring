import { Button } from "@/modules/ui/Button/Button";
import { ErrorMessage } from "@/modules/ui/ErrorMessage/ErrorMessage";
import { useGetWeaponFiltersByCategory } from "@/modules/weapons/useGetWeaponFiltersByCategory/hooks/useGetWeaponFiltersByCategory";
import { useSearchParams } from "next/navigation";
import { SearchFiltersSkeleton } from "./SearchFiltersSkeleton/SearchFiltersSkeleton";
import { useQueryString } from "@/modules/navigation/hooks/useQueryString/useQueryString";
import { SearchFiltersPlaceholder } from "./SearchFiltersPlaceholder/SearchFiltersPlaceholder";

export const SearchFilters = () => {
  const searchParams = useSearchParams();

  const categoryQuery = Number(searchParams.get("category")) || 0;
  const filterQuery = searchParams.get("filter") || "";

  const filters = useGetWeaponFiltersByCategory(Number(categoryQuery));
  const { createQueryString, pushQueryStringRouter } = useQueryString();

  const handleFilterChange = (filterName: string) => {
    pushQueryStringRouter(
      createQueryString([
        { name: "filter", value: filterName },
        { name: "query", value: "" },
        { name: "page", value: "1" },
      ]),
    );
  };
  if (!categoryQuery || categoryQuery === 0)
    return <SearchFiltersPlaceholder />;
  if (filters.isLoading) return <SearchFiltersSkeleton />;
  if (!filters.isSuccess)
    return <ErrorMessage>Error loading filters</ErrorMessage>;

  return (
    <div className="flex flex-col space-y-2">
      {filters.data?.map((filter) => (
        <Button
          rounded={false}
          size="sm"
          onClick={() => handleFilterChange(filter.name)}
          key={filter.name}
          variant={filterQuery === filter.name ? "primary" : "secondary"}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};
