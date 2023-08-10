import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromCart } from "./apiDeleteFromCart";

type CartItem = {
  weapon_id: number;
};

export const useDeleteFromCart = () => {
  return useMutation({
    mutationFn: ({ weapon_id }: CartItem) => deleteFromCart({ weapon_id }),
    onSuccess: () => {
      toast.success("Item deleted from the cart");
    },
    onError: () => {
      toast.error("Could not delete this item from the cart.");
    },
  });
};
