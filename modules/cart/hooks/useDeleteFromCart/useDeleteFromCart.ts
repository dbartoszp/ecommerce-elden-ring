import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromCart } from "./apiDeleteFromCart";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import { getCartLSReturnSchema } from "../../utils/getCartLS/getCartLS.schema";
import { getCartSupabaseReturnSchema } from "../../utils/getCartSupabase/getCartSupabase.schema";

type CartItem = {
  weaponId: number;
};

export const useDeleteFromCart = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({ weaponId }: CartItem) => deleteFromCart({ weaponId }),
    onSuccess: async () => {
      toast.success("Item deleted from the cart");
    },
    onError: (_, __, context) => {
      //@ts-ignore
      client.setQueryData(["Carts"], context.currentCart);
      toast.error("Could not delete this item from the cart.");
    },
    onMutate: async ({ weaponId }) => {
      await client.cancelQueries({ queryKey: ["Carts"] });
      const currentCart = client.getQueryData(["Carts"]);

      if (!currentCart) return;
      const user = await getCurrentUser();
      let currentCartParsed;
      if (!user) {
        currentCartParsed = getCartLSReturnSchema.safeParse(currentCart);
      } else {
        currentCartParsed = getCartSupabaseReturnSchema.safeParse(currentCart);
      }

      if (!currentCartParsed.success) {
        client.setQueryData(["Carts"], currentCart);
        toast.error("Could not delete this item from the cart.");
        throw new Error();
      }

      const indexToDelete = currentCartParsed.data.findIndex(
        (item) => item.weaponId === weaponId,
      );

      if (indexToDelete === -1) {
        return;
      }
      const newCart = currentCartParsed.data.splice(indexToDelete, 1);

      client.setQueryData(["Cart"], newCart);
      return { currentCart, newCart };
    },
  });
};
