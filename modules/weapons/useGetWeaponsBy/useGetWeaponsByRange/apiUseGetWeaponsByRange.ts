import supabase from "@/services/supabase.mjs";
import { useGetWeaponsByReturnSchema } from "../useGetWeaponsBy.schema";

type getWeaponsByRangeParams = {
  start: number;
  end: number;
  name: string;
};

export const getWeaponsByRange = async ({
  start,
  end,
  name,
}: getWeaponsByRangeParams) => {
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .ilike("name", `%${name}%`)
    .range(start, end);
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
