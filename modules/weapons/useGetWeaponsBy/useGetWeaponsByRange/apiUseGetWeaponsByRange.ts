import supabase from "@/services/supabase.mjs";
import { useGetWeaponsByReturnSchema } from "../useGetWeaponsBy.schema";

type getWeaponsByRangeParams = {
  start: number;
  end: number;
  name: string;
  filter: string;
  categoryID: number;
};

export const getWeaponsByRange = async ({
  start,
  end,
  name,
  filter,
  categoryID,
}: getWeaponsByRangeParams) => {
  let query = supabase.from("Weapons").select("*");
  if (categoryID !== 0) query = query.eq("categoryID", categoryID);
  if (filter !== "") query = query.eq("filter", filter);
  const { data, error } = await query
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
