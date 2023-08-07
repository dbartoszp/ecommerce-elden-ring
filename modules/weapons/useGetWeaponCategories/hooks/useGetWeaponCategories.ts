import { useQuery } from "@tanstack/react-query";
import { getWeaponCategories } from "../apiUseGetWeaponCategories";

export const useGetWeaponCategories = () => {
  return useQuery({
    queryKey: ["distinct_categories"],
    queryFn: () => getWeaponCategories(),
    refetchOnWindowFocus: true,
  });
};
