import { addMultipleCartItemsSupabase } from "../addMultipleCartItemsSupabase/addMultipleCartItemsSupabase";

type MergeSupabaseLSParams = {
  cart_id: number;
};

type CartItem = {
  weapon_id: number;
};

export const mergeSupabaseLS = ({ cart_id }: MergeSupabaseLSParams) => {
  const cartItemsJSON = localStorage.getItem("cartItems");

  const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  const cartItemsIds = cartItemsParsed.map((item: CartItem) =>
    Number(item.weapon_id),
  );
  addMultipleCartItemsSupabase({ cart_id, weapon_ids: cartItemsIds });
  localStorage.clear();
};
