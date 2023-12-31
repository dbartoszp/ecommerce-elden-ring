import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFromCart } from "./apiDeleteFromCart";
import { parseGetCart } from "../../utils/parseGetCart/parseGetCart";
import { parseContextReturnSchema } from "../../utils/parseContext/parseContext.schema";

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
      const contextParsed = parseContextReturnSchema.safeParse(context);

      if (contextParsed.success) {
        client.setQueryData(["Carts"], contextParsed.data.currentCart);
      }
      toast.error("Could not delete this item from the cart.");
    },
    onMutate: async ({ weaponId }) => {
      await client.cancelQueries({ queryKey: ["Carts"] });
      const currentCart = client.getQueryData(["Carts"]);

      if (!currentCart) return;

      const currentCartParsed = await parseGetCart(currentCart);

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
