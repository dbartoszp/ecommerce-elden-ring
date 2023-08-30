import { useQuery } from "@tanstack/react-query";
import { getWeaponsByRange } from "../apiUseGetWeaponsByRange";
type getWeaponsByRangeParams = {
  start: number;
  end: number;
  name: string;
  categoryID: number;
  filter: string;
};

export const useGetWeaponsByRange = ({
  start,
  end,
  name,
  categoryID,
  filter,
}: getWeaponsByRangeParams) => {
  return useQuery({
    queryKey: ["Weapons", start, end, name, categoryID, filter],
    queryFn: () => getWeaponsByRange({ start, end, name, categoryID, filter }),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
