import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromCart } from "./apiDeleteFromCart";

type CartItem = {
  weaponId: number;
};

export const useDeleteFromCart = () => {
  return useMutation({
    mutationFn: ({ weaponId }: CartItem) => deleteFromCart({ weaponId }),
    onSuccess: () => {
      toast.success("Item deleted from the cart");
    },
    onError: () => {
      toast.error("Could not delete this item from the cart.");
    },
  });
};
