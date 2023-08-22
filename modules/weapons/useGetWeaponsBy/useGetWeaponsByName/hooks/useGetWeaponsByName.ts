import { useQuery } from "@tanstack/react-query";
import { getWeaponsByName } from "../apiUseGetWeaponsByName";

export const useGetWeaponsByName = (name: string) => {
  return useQuery({
    queryKey: ["Weapons", name],
    queryFn: () => getWeaponsByName(name),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
