import supabase from "@/services/supabase.mjs";
import { useGetWeaponCountReturnSchema } from "../useGetWeaponCount.schema";

export const getWeaponCountTotal = async () => {
  const { error, count } = await supabase
    .from("Weapons")
    .select("*", { count: "exact", head: true });

  const counted = useGetWeaponCountReturnSchema.safeParse(count);
  if (error) {
    console.error(error);
    throw new Error("count couldnt be loaded");
  }
  if (counted.success) {
    return counted.data;
  }
  throw counted.error;
};
