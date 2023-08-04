import supabase from "../../../services/supabase.mjs";
import { useGetWeaponByIdReturnSchema } from "../hooks/useGetWeaponById/useGetWeaponById.schema";
import { useGetWeaponCategoriesReturnSchema } from "../hooks/useGetWeaponCategories/useGetWeaponCategories.schema";
import { useGetWeaponsByIdsReturnSchema } from "../hooks/useGetWeaponsByIds/useGetWeaponsByIds.schema";

export const getWeapons = async () => {
  const { data, error } = await supabase.from("Weapons").select("*");
  if (error) {
    console.error(error);
    throw new Error("weapons couldnt be loaded");
  }
  return data;
};

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

export const getWeaponById = async (id: number) => {
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .eq("id", id);
  const weapon = useGetWeaponByIdReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("weapon couldnt be loaded");
  }
  if (weapon.success) {
    return weapon.data;
  }
  throw weapon.error;
};

// export const getWeaponByName = async (name: string) => {
//   const { data, error } = await supabase
//     .from("Weapons")
//     .select("*")
//     .eq("name", name);
//   if (error) {
//     console.error(error);
//     throw new Error("weapon couldnt be loaded");
//   }
//   return data;
// };

export const getWeaponCategories = async () => {
  const { data, error } = await supabase.from("distinct_categories").select();
  // console.log("data:", data);
  const categories = useGetWeaponCategoriesReturnSchema.safeParse(data);
  // console.log("categories:", categories);

  if (error) {
    console.error(error);
    throw new Error("categories couldnt be loaded");
  }
  if (categories.success) {
    return categories.data;
  }
  throw categories.error;
};
