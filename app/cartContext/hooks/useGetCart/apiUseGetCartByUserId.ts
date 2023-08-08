import supabase from "../../../../services/supabase.mjs";
import { useGetCartByUserIdReturnSchema } from "./useGetCartByUserId.schema";

export const getCartByUserId = async (userId: string) => {
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("user_id", userId);
  const cart = useGetCartByUserIdReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("cart couldnt be loaded");
  }
  if (cart.success) {
    return cart.data;
  }
  throw cart.error;
};
