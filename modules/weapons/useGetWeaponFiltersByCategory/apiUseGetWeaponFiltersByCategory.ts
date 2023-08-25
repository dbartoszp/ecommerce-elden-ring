import supabase from "../../../services/supabase.mjs";
import { useGetWeaponFiltersByCategoryReturnSchema } from "./hooks/useGetWeaponFiltersByCategory.schema";

export const getWeaponFiltersByCategory = async (categoryID: number) => {
  if (!categoryID || categoryID === 0) return [];
  const { data, error } = await supabase
    .from("Filters")
    .select()
    .eq("categoryID", categoryID);
  const filters = useGetWeaponFiltersByCategoryReturnSchema.safeParse(data);

  if (error) {
    console.error(error);
    throw new Error("categories couldnt be loaded");
  }
  if (filters.success) {
    return filters.data;
  }
  throw filters.error;
};
