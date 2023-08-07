import { useMutation } from "@tanstack/react-query";
import { addToCart } from "./apiAddToCart";
import { toast } from "react-hot-toast";

type CartItem = {
  cart_id: number;
  weapon_id: number;
};

export const useAddToCart = () => {
  return useMutation({
    mutationFn: ({ cart_id, weapon_id }: CartItem) =>
      addToCart({ cart_id, weapon_id }),
    onSuccess: () => {
      toast.success("Item added to the cart");
    },
    onError: () => {
      toast.error("Could not add this item to the cart.");
    },
  });
};
