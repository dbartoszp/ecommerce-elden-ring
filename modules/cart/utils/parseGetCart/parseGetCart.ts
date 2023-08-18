import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";
import { getCartLSReturnSchema } from "../getCartLS/getCartLS.schema";
import { getCartSupabaseReturnSchema } from "../getCartSupabase/getCartSupabase.schema";

export const parseGetCart = async (currentCart: unknown) => {
  const user = await getCurrentUser();
  if (!user) {
    return getCartLSReturnSchema.safeParse(currentCart);
  } else {
    return getCartSupabaseReturnSchema.safeParse(currentCart);
  }
};
