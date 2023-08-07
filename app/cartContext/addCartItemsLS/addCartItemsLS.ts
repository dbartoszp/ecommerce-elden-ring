import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type CartItem = {
  cart_id: number;
  weapon_id: number;
};

export const addCartItemsLS = async ({ cart_id, weapon_id }: CartItem) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    const cartItemsJSON = localStorage.getItem("cartItems");
    console.log("LS before:", cartItemsJSON);

    const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
    cartItemsParsed.push({ cart_id, weapon_id });
    const updatedCartItems = JSON.stringify(cartItemsParsed);

    console.log("LS after:", cartItemsJSON);
    localStorage.setItem("cartItems", updatedCartItems);

    return updatedCartItems;
  }
  return null;
};
