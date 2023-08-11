import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

type CartItem = {
  weaponId: number;
};

export const deleteCartItemsLS = async ({ weaponId }: CartItem) => {
  const user = await getCurrentUser();
  if (user) return;
  const cartItemsJSON = localStorage.getItem("cartItems");

  if (cartItemsJSON) {
    const cartItemsParsed = JSON.parse(cartItemsJSON);
    const indexToDelete = cartItemsParsed.findIndex(
      (item: CartItem) => item.weaponId === weaponId,
    );

    if (indexToDelete !== -1) {
      cartItemsParsed.splice(indexToDelete, 1);
      const updatedCartItems = JSON.stringify(cartItemsParsed);
      localStorage.setItem("cartItems", updatedCartItems);
    }
  }
};
