import supabase from "@/services/supabase.mjs";
import { useGetWeaponsByReturnSchema } from "../useGetWeaponsBy/useGetWeaponsBy.schema";

export const getAllWeapons = async () => {
  const { data, error } = await supabase.from("Weapons").select("*");

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
