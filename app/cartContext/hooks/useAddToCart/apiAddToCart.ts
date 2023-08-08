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
  //jesli nie dodalo do LocalStorage === uzytkownik jest zalogowany
  // console.log(await addCartItemsLS({ weapon_id }));

  try {
    const user = await getCurrentUser();
    if (!user) {
      await addCartItemsLS({ weapon_id });
      return;
    }

    //jesli nie znalazlo matchujacego carta, tworzymy nowy
    const cartId = await createCartSupabase();

    console.log("cartId:", cartId);
    const cartItemsJSON = localStorage.getItem("cartItems");

    const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
    console.log(cartItemsParsed);
    const cartItemsIds = cartItemsParsed.map((item) => item.weapon_id);
    console.log(cartItemsIds);
    // if (cartItemsJSON) mergeSupabaseLS({cartId,});

    addCartItemSupabase({ cart_id: cartId, weapon_id });
  } catch (err) {
    console.log(err);
  }
};
