import { addMultipleCartItemsSupabase } from "../addMultipleCartItemsSupabase/addMultipleCartItemsSupabase";

type mergeSupabaseLSParams = {
  cart_id: number;
};

export const mergeSupabaseLS = ({ cart_id }: mergeSupabaseLSParams) => {
  const cartItemsJSON = localStorage.getItem("cartItems");
  console.log("LS before:", cartItemsJSON);

  const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  //todo fix types
  const cartItemsIds = cartItemsParsed.map((item) => item.weapon_id);
  console.log(cartItemsParsed);
  addMultipleCartItemsSupabase({ cart_id, cartItemsIds });
  //   return updatedCartItems;
};
