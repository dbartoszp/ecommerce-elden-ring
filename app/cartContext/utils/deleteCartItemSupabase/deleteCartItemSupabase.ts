"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type CartItems = {
  cart_id: number;
  id: number;
};

export const deleteCartItemsSupabase = async ({ cart_id, id }: CartItems) => {
  const supabase = createClientComponentClient();
  try {
    const { error } = await supabase
      .from("CartItems")
      .delete()
      .eq("cart_id", cart_id)
      .eq("id", id);

    if (error) console.log(error);
  } catch (err) {
    console.log(err);
  }
};
