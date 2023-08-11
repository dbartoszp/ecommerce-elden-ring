"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";

type CartItems = {
  cartId: number;
  id: number;
};

export const deleteCartItemsSupabase = async ({ cartId, id }: CartItems) => {
  const supabase = createClientComponentClient();
  try {
    const { error } = await supabase
      .from("CartItems")
      .delete()
      .eq("cartId", cartId)
      .eq("id", id);

    if (error) console.log(error);
  } catch (err) {
    toast.error("Could not delete an item from the cart");
    console.log(err);
  }
};
