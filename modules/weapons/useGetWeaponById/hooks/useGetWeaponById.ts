import { useQuery } from "@tanstack/react-query";
import { getWeaponById } from "../apiUseGetWeaponById";

export const useGetWeaponById = (id: number) => {
  return useQuery({
    queryKey: ["Weapons"],
    queryFn: () => getWeaponById(id),
    refetchOnWindowFocus: true,
  });
};
