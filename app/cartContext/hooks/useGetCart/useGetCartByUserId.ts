import { useQuery } from "@tanstack/react-query";
import { getCartByUserId } from "./apiUseGetCartByUserId";

export const useGetCartByUserId = (userId: string) => {
  return useQuery({
    queryKey: ["Carts"],
    queryFn: () => getCartByUserId(userId),
    refetchOnWindowFocus: true,
  });
};
