import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import supabase from "@/services/supabase.mjs";
import { createCartReturnSchema } from "../createCartSupabase.schema";

export const getUserCart = async () => {
  const user = await getCurrentUser();

  //!! TODO ROZDZIELIC NA 2
  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("user_id", user?.user.id);
  const cart = createCartReturnSchema.safeParse(data);
  //   console.log(cart, data);
  if (error) {
    console.error(error);
    throw new Error("cart couldnt be created");
  }
  if (cart.success && cart.data.length === 1) {
    // console.log(cart.data[0].id);
    return cart.data[0].id;
  }
  //   console.log("no cart in db");
  return null;
};
