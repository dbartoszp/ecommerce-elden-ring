import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

type CartItem = {
  weapon_id: number;
};

export const deleteCartItemsLS = async ({ weapon_id }: CartItem) => {
  const user = await getCurrentUser();
  if (user) return;
  const cartItemsJSON = localStorage.getItem("cartItems");

  if (cartItemsJSON) {
    const cartItemsParsed = JSON.parse(cartItemsJSON);
    const indexToDelete = cartItemsParsed.findIndex(
      (item: CartItem) => item.weapon_id === weapon_id,
    );

    if (indexToDelete !== -1) {
      cartItemsParsed.splice(indexToDelete, 1);
      const updatedCartItems = JSON.stringify(cartItemsParsed);
      localStorage.setItem("cartItems", updatedCartItems);
    }
  }
};