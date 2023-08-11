import { addCartItemsLS } from "../../utils/addCartItemsLS/addCartItemsLS";
import { createCartSupabase } from "../../utils/createCartSupabase/createCartSupabase";
import { addCartItemSupabase } from "../../utils/addCartItemsSupabase/addCartItemSupabase";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

type CartItem = {
  weaponId: number;
};

export const addToCart = async ({ weaponId }: CartItem) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      await addCartItemsLS({ weaponId });
      return;
    }

    const cartId = await createCartSupabase();

    await addCartItemSupabase({ cartId, weaponId });
  } catch (err) {
    console.log(err);
  }
};
