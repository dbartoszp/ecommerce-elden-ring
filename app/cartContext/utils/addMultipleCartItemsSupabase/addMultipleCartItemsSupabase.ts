"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type CartItems = {
  cart_id: number;
  weapon_ids: number[];
};

export const addMultipleCartItemsSupabase = async ({
  cart_id,
  weapon_ids,
}: CartItems) => {
  const supabase = createClientComponentClient();
  const itemIdsToInsert = weapon_ids.map((id) => ({ cart_id, weapon_id: id }));

  try {
    const { error } = await supabase
      .from("CartItems")
      .insert(itemIdsToInsert)
      .select();
    if (error) console.log(error);
  } catch (err) {
    console.log(err);
  }
};
