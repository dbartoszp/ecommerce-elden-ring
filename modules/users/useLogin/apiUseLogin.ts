import { createCartSupabase } from "@/app/cartContext/utils/createCartSupabase/createCartSupabase";
import { mergeSupabaseLS } from "@/app/cartContext/utils/mergeSupabaseLS/mergeSupabaseLS";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();
type UserLogin = {
  email: string;
  password: string;
};

export const login = async (user: UserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });
  const cartId = await createCartSupabase();
  mergeSupabaseLS({ cart_id: cartId });
  if (error) throw new Error(error.message);

  return data;
};
