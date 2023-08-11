import { addMultipleCartItemsSupabase } from "../addMultipleCartItemsSupabase/addMultipleCartItemsSupabase";

type MergeSupabaseLSParams = {
  cartId: number;
};

type CartItem = {
  weaponId: number;
};

export const mergeSupabaseLS = ({ cartId }: MergeSupabaseLSParams) => {
  const cartItemsJSON = localStorage.getItem("cartItems");

  const cartItemsParsed = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  const cartItemsIds = cartItemsParsed.map((item: CartItem) =>
    Number(item.weaponId),
  );
  addMultipleCartItemsSupabase({ cartId, weaponIds: cartItemsIds });
  localStorage.clear();
};
