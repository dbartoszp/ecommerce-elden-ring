import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import { getCartLS } from "../../utils/getCartLS/getCartLS";
import { getCartSupabase } from "../../utils/getCartSupabase/getCartSupabase";
import { createCartSupabase } from "../../utils/createCartSupabase/createCartSupabase";

export const getCart = async () => {
  try {
    const user = getCurrentUser();
    if (!user) {
      return getCartLS();
    }
    const cartId = await createCartSupabase();
    return await getCartSupabase(cartId);
  } catch (err) {
    console.log(err);
  }
};
