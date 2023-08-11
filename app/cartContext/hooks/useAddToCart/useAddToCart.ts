import { useMutation } from "@tanstack/react-query";
import { addToCart } from "./apiAddToCart";
import { toast } from "react-hot-toast";

type CartItem = {
  weaponId: number;
};

export const useAddToCart = () => {
  return useMutation({
    mutationFn: ({ weaponId }: CartItem) => addToCart({ weaponId }),
    onSuccess: () => {
      toast.success("Item added to the cart");
    },
    onError: () => {
      toast.error("Could not add this item to the cart.");
    },
  });
};
