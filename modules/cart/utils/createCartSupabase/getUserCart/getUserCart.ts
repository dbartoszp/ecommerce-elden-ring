import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import supabase from "@/services/supabase.mjs";
import { createCartReturnSchema } from "../createCartSupabase.schema";

export const getUserCart = async () => {
  const user = await getCurrentUser();

  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("userId", user?.user.id);
  const cart = createCartReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("cart couldnt be created");
  }
  if (cart.success && cart.data.length === 1) {
    return cart.data[0].id;
  }
  return null;
};
