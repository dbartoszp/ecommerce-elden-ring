import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createCartReturnSchema } from "./createCartSupabase.schema";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
const supabase = createClientComponentClient();

export const createCartSupabase = async () => {
  const user = await getCurrentUser();

  //!! TODO ROZDZIELIC NA 2
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("user_id", user?.user.id);
  const cart = createCartReturnSchema.safeParse(data);
  console.log(cart, data);
  if (error) {
    console.error(error);
    throw new Error("cart couldnt be created");
  }
  if (cart.success && cart.data.length === 1) {
    return cart.data[0].id;
  }
  //!! TU DRUGA
  const { data: newCartData, error: newCartError } = await supabase
    .from("Carts")
    .insert([{ user_id: user?.user.id }])
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