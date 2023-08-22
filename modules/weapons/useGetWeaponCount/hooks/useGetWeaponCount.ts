import { useQuery } from "@tanstack/react-query";
import { getWeaponCount } from "../apiUseGetWeaponCount";

export const useGetWeaponCount = () => {
  return useQuery({
    queryKey: ["Weapons"],
    queryFn: () => getWeaponCount(),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
