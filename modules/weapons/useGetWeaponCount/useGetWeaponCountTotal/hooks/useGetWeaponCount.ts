import { useQuery } from "@tanstack/react-query";
import { getWeaponCountTotal } from "../apiUseGetWeaponCountTotal";

export const useGetWeaponCountTotal = () => {
  return useQuery({
    queryKey: ["Weapons"],
    queryFn: () => getWeaponCountTotal(),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
