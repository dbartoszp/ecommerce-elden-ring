import { getUserCart } from "./getUserCart/getUserCart";
import { createNewCart } from "./createNewCart/createNewCart";

export const createCartSupabase = async () => {
  const userCart = await getUserCart();
  if (!userCart) {
    const newCart = await createNewCart();
    return newCart;
  }
  return userCart;
};
