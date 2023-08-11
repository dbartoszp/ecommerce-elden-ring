import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

type CartItem = {
  weapon_id: number;
};

export const addCartItemsLS = async ({ weapon_id }: CartItem) => {
  const user = await getCurrentUser();
  if (user) return;
  const cartItemsJSON = localStorage.getItem("cartItems");

  const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  cartItemsParsed.push({ weapon_id });
  const updatedCartItems = JSON.stringify(cartItemsParsed);

  localStorage.setItem("cartItems", updatedCartItems);
};
