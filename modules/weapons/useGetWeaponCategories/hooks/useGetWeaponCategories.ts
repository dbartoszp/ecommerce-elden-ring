import { useQuery } from "@tanstack/react-query";
import { getWeaponCategories } from "../apiUseGetWeaponCategories";

export const useGetWeaponCategories = () => {
  return useQuery({
    queryKey: ["Categories"],
    queryFn: () => getWeaponCategories(),
    refetchOnWindowFocus: true,
  });
};
