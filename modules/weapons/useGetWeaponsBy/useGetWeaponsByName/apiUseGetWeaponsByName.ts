import supabase from "@/services/supabase.mjs";
import { useGetWeaponsByReturnSchema } from "../useGetWeaponsBy.schema";

export const getWeaponsByName = async (name: string) => {
  console.log(name);
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .ilike("name", `%${name}%`);
  console.log(data);
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
