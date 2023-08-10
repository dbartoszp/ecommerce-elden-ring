import { getCartLSReturnSchema } from "./getCartLS.schema";
import * as z from "zod";

const testSchema = z.string();

export const getCartLS = () => {
  const cartItemsLSJSON = localStorage.getItem("cartItems");

  console.log("cartItemsLSJSON:", cartItemsLSJSON);
  const zodParsedData = getCartLSReturnSchema.safeParse(
    testSchema.safeParse(cartItemsLSJSON),
  );
  console.log(zodParsedData);
  return zodParsedData;
};
