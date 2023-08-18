import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "./apiAddToCart";
import { toast } from "react-hot-toast";
import { getCartSupabaseReturnSchema } from "../../utils/getCartSupabase/getCartSupabase.schema";
import { getCartLSReturnSchema } from "../../utils/getCartLS/getCartLS.schema";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import { parseGetCart } from "../../utils/parseGetCart/parseGetCart";

type CartItem = {
  weaponId: number;
};

export const useAddToCart = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ weaponId }: CartItem) => addToCart({ weaponId }),
    onSuccess: async () => {
      toast.success("Item added to the cart");
    },
    onError: (_, __, context) => {
      //@ts-ignore
      client.setQueryData(["Carts"], context.currentCart);
      toast.error("Could not add this item to the cart.");
    },
    onMutate: async ({ weaponId }) => {
      await client.cancelQueries({ queryKey: ["Carts"] });
      const currentCart = client.getQueryData(["Carts"]);

      if (!currentCart) return;

      const currentCartParsed = await parseGetCart(currentCart);

      if (!currentCartParsed.success) {
        client.setQueryData(["Carts"], currentCart);
        toast.error("Could not add this item to the cart.");
        throw new Error();
      }
      const newCart = [...currentCartParsed.data, { weaponId }];
      client.setQueryData(["Cart"], newCart);
      return { currentCart, newCart };
    },
  });
};
