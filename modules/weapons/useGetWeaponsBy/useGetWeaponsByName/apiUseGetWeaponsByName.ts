import supabase from "@/services/supabase.mjs";
import { useGetWeaponsByReturnSchema } from "../useGetWeaponsBy.schema";

export const getWeaponsByName = async (name: string) => {
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .ilike("name", `%${name}%`);

  const weapons = useGetWeaponsByReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("weapons couldnt be loaded");
  }
  if (weapons.success) {
    return weapons.data;
  }
  throw weapons.error;
};
