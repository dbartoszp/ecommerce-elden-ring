import { useQuery } from "@tanstack/react-query";
import { getWeaponsByIds } from "../../services/apiWeapons";

export const useGetWeaponsByIds = (ids: number[]) => {
  return useQuery({
    queryKey: ["Weapons", ids],
    queryFn: () => getWeaponsByIds(ids),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
