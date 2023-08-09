import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { addCartItemsLS } from "../../utils/addCartItemsLS/addCartItemsLS";
import { createCartSupabase } from "../../utils/createCartSupabase/createCartSupabase";
import { addCartItemSupabase } from "../../utils/addCartItemsSupabase/addCartItemSupabase";
import { mergeSupabaseLS } from "../../utils/mergeSupabaseLS/mergeSupabaseLS";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

const supabase = createClientComponentClient();

type CartItem = {
  weapon_id: number;
};

export const addToCart = async ({ weapon_id }: CartItem) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      await addCartItemsLS({ weapon_id });
      return;
    }

    const cartId = await createCartSupabase();

    addCartItemSupabase({ cart_id: cartId, weapon_id });
  } catch (err) {
    console.log(err);
  }
};
