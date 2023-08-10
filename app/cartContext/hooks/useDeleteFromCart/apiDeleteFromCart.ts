import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import { deleteCartItemsLS } from "../../utils/deleteCartItemsLS/deleteCartItemsLS";
import { createCartSupabase } from "../../utils/createCartSupabase/createCartSupabase";
import { deleteCartItemsSupabase } from "../../utils/deleteCartItemSupabase/deleteCartItemSupabase";
import { getCartSupabase } from "../../utils/getCartSupabase/getCartSupabase";

type CartItem = {
  id: number;
  weapon_id: number;
  cart_id: number;
};

type DeleteFromCartParams = {
  weapon_id: number;
};

export const deleteFromCart = async ({ weapon_id }: DeleteFromCartParams) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      await deleteCartItemsLS({ weapon_id });
      return;
    }

    const cartId = await createCartSupabase();
    const cartItems = await getCartSupabase(cartId);
    const weaponToDelete = cartItems.find(
      (item: CartItem) => item.weapon_id === weapon_id,
    );
    if (!weaponToDelete) return;

    deleteCartItemsSupabase({ cart_id: cartId, id: weaponToDelete.id });
  } catch (err) {
    console.log(err);
  }
};
