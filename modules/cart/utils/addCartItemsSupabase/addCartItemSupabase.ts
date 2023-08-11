"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type CartItems = {
  cartId: number;
  weaponId: number;
};

export const addCartItemSupabase = async ({ cartId, weaponId }: CartItems) => {
  const supabase = createClientComponentClient();
  try {
    const { error } = await supabase
      .from("CartItems")
      .insert([{ cartId, weaponId }])
      .select();
    if (error) console.log(error);
  } catch (err) {
    console.log(err);
  }
};
