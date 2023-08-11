import supabase from "@/services/supabase.mjs";
import { createCartReturnSchema } from "../createCartSupabase.schema";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

export const createNewCart = async () => {
  const user = await getCurrentUser();
  //!! TU DRUGA
  const { data: newCartData, error: newCartError } = await supabase
    .from("Carts")
    .insert([{ userId: user?.user.id }])
    .select();
  const newCart = createCartReturnSchema.safeParse(newCartData);
  if (newCartError) {
    console.error(newCartError);
    throw new Error("cart couldnt be created");
  }
  if (!newCart.success) {
    throw newCart.error;
  }
  const cartItem = newCart.data.at(0);
  if (!cartItem) {
    throw new Error("cart couldnt be created");
  }
  return newCart.data[0].id;
};
