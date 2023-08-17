import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "./apiAddToCart";
import { toast } from "react-hot-toast";
import { getCartSupabaseReturnSchema } from "../../utils/getCartSupabase/getCartSupabase.schema";
import { getCartLSReturnSchema } from "../../utils/getCartLS/getCartLS.schema";

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
      console.log(currentCart);
      if (!currentCart) return;
      //TODO LS/supabase sprawdzanie
      const currentCartParsed = getCartLSReturnSchema.safeParse(currentCart);
      //TODO ERROR
      if (!currentCartParsed.success) {
        console.log(currentCartParsed.error);
        throw new Error();
      }
      const newCart = [...currentCartParsed.data, { weaponId }];
      client.setQueryData(["Cart"], newCart);
      return { currentCart, newCart };
    },
  });
};
