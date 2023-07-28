import { useQuery } from "@tanstack/react-query";
import { getWeaponById } from "../../services/apiWeapons";

export const useGetWeaponById = (id: number) => {
  return useQuery({
    queryKey: ["Weapons"],
    queryFn: () => getWeaponById(id),
    refetchOnWindowFocus: true,
  });
};
