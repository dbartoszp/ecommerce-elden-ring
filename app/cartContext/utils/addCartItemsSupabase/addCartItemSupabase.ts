"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type CartItems = {
  cart_id: number;
  weapon_id: number;
};

export const addCartItemSupabase = async ({
  cart_id,
  weapon_id,
}: CartItems) => {
  const supabase = createClientComponentClient();
  try {
    const { data, error } = await supabase
      .from("CartItems")
      .insert([{ cart_id, weapon_id }])
      .select();
    if (error) console.log(error);
  } catch (err) {
    console.log(err);
  }
};
