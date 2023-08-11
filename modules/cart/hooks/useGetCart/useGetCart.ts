import { useQuery } from "@tanstack/react-query";
import { getCart } from "./apiUseGetCart";

export const useGetCart = () => {
  return useQuery({
    queryKey: ["Carts"],
    queryFn: () => getCart(),
    refetchOnWindowFocus: true,
  });
};
