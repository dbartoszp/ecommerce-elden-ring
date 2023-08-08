import { useMutation } from "@tanstack/react-query";
import { addToCart } from "./apiAddToCart";
import { toast } from "react-hot-toast";

type CartItem = {
  weapon_id: number;
};

export const useAddToCart = () => {
  return useMutation({
    mutationFn: ({ weapon_id }: CartItem) => addToCart({ weapon_id }),
    onSuccess: () => {
      toast.success("Item added to the cart");
    },
    onError: () => {
      toast.error("Could not add this item to the cart.");
    },
  });
};
