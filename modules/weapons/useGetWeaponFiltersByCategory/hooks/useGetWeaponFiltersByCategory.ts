import { useQuery } from "@tanstack/react-query";
import { getWeaponFiltersByCategory } from "../apiUseGetWeaponFiltersByCategory";

export const useGetWeaponFiltersByCategory = (categoryID: number) => {
  return useQuery({
    queryKey: ["Filters"],
    queryFn: () => getWeaponFiltersByCategory(categoryID),
    refetchOnWindowFocus: true,
  });
};
