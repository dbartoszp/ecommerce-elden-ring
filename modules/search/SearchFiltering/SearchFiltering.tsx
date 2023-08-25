import { SearchCategories } from "./SearchCategories/SearchCategories";
import { SearchFilters } from "./SearchFilters/SearchFilters";

export const SearchFiltering = () => {
  return (
    <div>
      <SearchCategories />
      <SearchFilters />
    </div>
  );
};
// import { useGetWeaponCategories } from "@/modules/weapons/useGetWeaponCategories/hooks/useGetWeaponCategories";
// import { useSearchParams } from "next/navigation";
// import { SearchCategories } from "./SearchCategories/SearchCategories";
// import { SearchFilters } from "./SearchFilters/SearchFilters";
// import { useGetCategoryIDByName } from "@/modules/weapons/useGetCategoryIDByName/hooks/useGetCategoryIDByName";

// export const SearchFiltering = () => {
//   const categories = useGetWeaponCategories();
//   const searchParams = useSearchParams();
//   const categoryQuery = searchParams.get("category");
//   const categoryID = useGetCategoryIDByName(String(categoryQuery));

//   if (!categories.isSuccess || !categoryID.isSuccess)
//     return <div>error z ladowaniem</div>;
//   const categoryIDData = categoryID.data || [];
//   return (
//     <div>
//       <SearchCategories />
//       {categoryIDData.length > 1 ? (
//         <SearchFilters categoryID={categoryIDData[0].id} />
//       ) : null}
//       {/* <SearchFilters categoryID={categoryID.data[0].id} /> */}
//     </div>
//   );
// };
