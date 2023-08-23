import { useQuery } from "@tanstack/react-query";
import { getWeaponCountByName } from "../apiUseGetWeaponCountByName";

export const useGetWeaponCountByName = (name: string) => {
  return useQuery({
    queryKey: ["Weapons", name],
    queryFn: () => getWeaponCountByName(name),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
