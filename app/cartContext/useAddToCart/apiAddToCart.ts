import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { addCartItemsLS } from "../addCartItemsLS/addCartItemsLS";

const supabase = createClientComponentClient();

type CartItem = {
  cart_id: number;
  weapon_id: number;
};

export const addToCart = async ({ cart_id, weapon_id }: CartItem) => {
  //jesli nie dodalo do LocalStorage === uzytkownik jest zalogowany
  if (!(await addCartItemsLS({ cart_id, weapon_id }))) {
    console.log(localStorage.getItem("cartItems"));
  }
  //dodaj do local storage jesli user nie jest zalogowany
  ////dodaj do supabase jesli user jest zalogowany po poprzednim zmergowaniu cartow
  //   const { data, error } = await supabase
  //     .from("CartItems")
  //     .insert([{ cart_id, weapon_id }])
  //     .select();
};
