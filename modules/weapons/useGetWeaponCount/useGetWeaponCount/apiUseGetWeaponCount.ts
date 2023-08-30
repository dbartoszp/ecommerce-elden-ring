import supabase from "@/services/supabase.mjs";
import { useGetWeaponCountReturnSchema } from "../useGetWeaponCount.schema";

type GetWeaponCountParams = {
  name: string;
  filter: string;
  categoryID: number;
};

export const getWeaponCount = async ({
  name,
  filter,
  categoryID,
}: GetWeaponCountParams) => {
  let query = supabase
    .from("Weapons")
    .select("*", { count: "exact", head: true });

  if (categoryID !== 0) query = query.eq("categoryID", categoryID);

  if (filter !== "") query = query.eq("filter", filter);

  const { count, error } = await query.ilike("name", `%${name}%`);

  const counted = useGetWeaponCountReturnSchema.safeParse(count);
  if (error) {
    throw new Error("count couldnt be loaded");
  }
  if (counted.success) {
    return counted.data;
  }
  throw counted.error;
};
