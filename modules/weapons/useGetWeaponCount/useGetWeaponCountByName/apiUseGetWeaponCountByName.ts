import supabase from "@/services/supabase.mjs";
import { useGetWeaponCountReturnSchema } from "../useGetWeaponCount.schema";

export const getWeaponCountByName = async (name: string) => {
  const { error, count } = await supabase
    .from("Weapons")
    .select("*", { count: "exact", head: true })
    .ilike("name", `%${name}%`);

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
