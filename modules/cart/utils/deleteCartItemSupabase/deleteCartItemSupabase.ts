"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type CartItems = {
  cartId: number;
  id: number;
};

export const deleteCartItemsSupabase = async ({ cartId, id }: CartItems) => {
  const supabase = createClientComponentClient();
  await supabase.from("CartItems").delete().eq("cartId", cartId).eq("id", id);
};
