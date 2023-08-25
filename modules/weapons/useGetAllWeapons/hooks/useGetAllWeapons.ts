import { useQuery } from "@tanstack/react-query";
import { getAllWeapons } from "../apiUseGetAllWeapons";

export const useGetAllWeapons = () => {
  return useQuery({
    queryKey: ["Weapons"],
    queryFn: () => getAllWeapons(),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
