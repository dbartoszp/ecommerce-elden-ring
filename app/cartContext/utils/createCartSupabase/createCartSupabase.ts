import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createCartReturnSchema } from "./createCartSupabase.schema";
import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
const supabase = createClientComponentClient();

export const createCartSupabase = async () => {
  const user = await getCurrentUser();

  const { data, error } = await supabase
    .from("Carts")
    .select("*")
    .eq("user_id", user?.user.id);
  console.log(data);
  const cart = createCartReturnSchema.safeParse(data);

  if (error) {
    console.error(error);
    throw new Error("cart couldnt be created");
  }
  if (cart.success && cart.data.length === 1) {
    return cart.data[0].id;
  }
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
    // console.log("Created a new cart:", newCart.data.at(0)?.id);
    throw newCart.error;
  }
  const cartItem = newCart.data.at(0);
  if (!cartItem) {
    throw new Error("cart couldnt be created");
  }
  return newCart.data[0].id;
};
