import supabase from "@/services/supabase.mjs";
import { getCartSupabaseReturnSchema } from "./getCartSupabase.schema";

export const getCartSupabase = async (id: number) => {
  const { data, error } = await supabase
    .from("CartItems")
    .select("*")
    .eq("cart_id", id);
  const cart = getCartSupabaseReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("cart couldnt be loaded");
  }
  if (cart.success) {
    return cart.data;
  }
  throw cart.error;
};
