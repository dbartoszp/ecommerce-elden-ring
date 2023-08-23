import { useQuery } from "@tanstack/react-query";
import { getWeaponsByRange } from "../apiUseGetWeaponsByRange";
type getWeaponsByRangeParams = {
  start: number;
  end: number;
  name: string;
};

export const useGetWeaponsByRange = ({
  start,
  end,
  name,
}: getWeaponsByRangeParams) => {
  return useQuery({
    queryKey: ["Weapons", start, end, name],
    queryFn: () => getWeaponsByRange({ start, end, name }),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
