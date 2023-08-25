import { useQuery } from "@tanstack/react-query";
import { getCategoryIDByName } from "../apiUseGetCategoryIDByName";

export const useGetCategoryIDByName = (categoryName: string) => {
  return useQuery({
    queryKey: ["Filters"],
    queryFn: () => getCategoryIDByName(categoryName),
    refetchOnWindowFocus: true,
  });
};
