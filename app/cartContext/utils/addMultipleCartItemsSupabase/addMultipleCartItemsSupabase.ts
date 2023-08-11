"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type CartItems = {
  cartId: number;
  weaponIds: number[];
};

export const addMultipleCartItemsSupabase = async ({
  cartId,
  weaponIds,
}: CartItems) => {
  const supabase = createClientComponentClient();
  const itemIdsToInsert = weaponIds.map((id) => ({ cartId, weaponId: id }));

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
