import { useQuery } from "@tanstack/react-query";
import { getWeaponCount } from "../apiUseGetWeaponCount";
type GetWeaponCountParams = {
  name: string;
  filter: string;
  categoryID: number;
};
export const useGetWeaponCount = ({
  name,
  filter,
  categoryID,
}: GetWeaponCountParams) => {
  return useQuery({
    queryKey: ["Weapons", name, filter, categoryID],
    queryFn: () => getWeaponCount({ name, filter, categoryID }),
    refetchOnWindowFocus: true,
    cacheTime: Infinity,
  });
};
