import supabase from "../../../services/supabase.mjs";
import { useGetWeaponCategoriesReturnSchema } from "./hooks/useGetWeaponCategories.schema";

export const getWeaponCategories = async () => {
  const { data, error } = await supabase.from("Categories").select();
  const categories = useGetWeaponCategoriesReturnSchema.safeParse(data);

  if (error) {
    console.error(error);
    throw new Error("categories couldnt be loaded");
  }
  if (categories.success) {
    return categories.data;
  }
  throw categories.error;
};
