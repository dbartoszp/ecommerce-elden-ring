import supabase from "../../../services/supabase.mjs";
import { useGetWeaponsByIdsReturnSchema } from "./hooks/useGetWeaponsByIds.schema";

export const getWeaponsByIds = async (ids: number[]) => {
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .in("id", ids);

  const weapons = useGetWeaponsByIdsReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("weapons couldnt be loaded");
  }
  if (weapons.success) {
    return weapons.data;
  }
  throw weapons.error;
};
