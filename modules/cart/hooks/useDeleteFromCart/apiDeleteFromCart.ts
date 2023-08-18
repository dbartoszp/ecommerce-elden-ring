import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import { deleteCartItemsLS } from "../../utils/deleteCartItemsLS/deleteCartItemsLS";
import { createCartSupabase } from "../../utils/createCartSupabase/createCartSupabase";
import { deleteCartItemsSupabase } from "../../utils/deleteCartItemSupabase/deleteCartItemSupabase";
import { getCartSupabase } from "../../utils/getCartSupabase/getCartSupabase";

type CartItem = {
  id: number;
  weaponId: number;
  cartId: number;
};

type DeleteFromCartParams = {
  weaponId: number;
};

export const deleteFromCart = async ({ weaponId }: DeleteFromCartParams) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      await deleteCartItemsLS({ weaponId });
      return;
    }

    const cartId = await createCartSupabase();
    const cartItems = await getCartSupabase(cartId);
    const weaponToDelete = cartItems.find(
      (item: CartItem) => item.weaponId === weaponId,
    );
    if (!weaponToDelete) return;

    await deleteCartItemsSupabase({ cartId, id: weaponToDelete.id });
  } catch (err) {
    console.log(err);
  }
};
