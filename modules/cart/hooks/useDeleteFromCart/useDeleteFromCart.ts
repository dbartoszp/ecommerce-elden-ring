import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromCart } from "./apiDeleteFromCart";

type CartItem = {
  weaponId: number;
};

export const useDeleteFromCart = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ weaponId }: CartItem) => deleteFromCart({ weaponId }),
    onSuccess: async () => {
      toast.success("Item deleted from the cart");
      await client.invalidateQueries(["Carts"]);
    },
    onError: () => {
      toast.error("Could not delete this item from the cart.");
    },
  });
};
