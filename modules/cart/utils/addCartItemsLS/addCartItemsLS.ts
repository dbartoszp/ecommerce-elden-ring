import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

type CartItem = {
  weaponId: number;
};

export const addCartItemsLS = async ({ weaponId }: CartItem) => {
  const user = await getCurrentUser();
  if (user) return;
  const cartItemsJSON = localStorage.getItem("cartItems");

  const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  cartItemsParsed.push({ weaponId });
  const updatedCartItems = JSON.stringify(cartItemsParsed);

  localStorage.setItem("cartItems", updatedCartItems);
};
