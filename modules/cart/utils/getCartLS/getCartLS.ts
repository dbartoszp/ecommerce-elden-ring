import { getCartLSReturnSchema } from "./getCartLS.schema";

export const getCartLS = () => {
  const cartItemsLSJSON = localStorage.getItem("cartItems");
  if (!cartItemsLSJSON) return null;

  const zodParsedData = getCartLSReturnSchema.safeParse(
    JSON.parse(cartItemsLSJSON),
  );
  if (zodParsedData.success) {
    return zodParsedData.data;
  }
  throw zodParsedData.error;
};
