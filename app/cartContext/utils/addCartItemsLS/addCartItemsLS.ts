import { getCurrentUser } from "@/modules/users/getCurrentUser/getCurrentUser";

type CartItem = {
  weapon_id: number;
};

export const addCartItemsLS = async ({ weapon_id }: CartItem) => {
  const user = await getCurrentUser();
  if (!user) {
    const cartItemsJSON = localStorage.getItem("cartItems");
    // console.log("LS before:", cartItemsJSON);

    const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
    cartItemsParsed.push({ weapon_id });
    const updatedCartItems = JSON.stringify(cartItemsParsed);

    // console.log("LS after:", updatedCartItems);
    localStorage.setItem("cartItems", updatedCartItems);

    return updatedCartItems;
  }
  return null;
};
