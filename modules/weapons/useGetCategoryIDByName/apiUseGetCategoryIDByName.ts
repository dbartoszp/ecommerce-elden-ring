import supabase from "../../../services/supabase.mjs";
import { useGetCategoryIDByNameReturnSchema } from "./hooks/useGetCategoryIDByName.schema";

export const getCategoryIDByName = async (categoryName: string) => {
  if (!categoryName) return 0;
  const { data, error } = await supabase
    .from("Categories")
    .select()
    .eq("name", categoryName);
  const category = useGetCategoryIDByNameReturnSchema.safeParse(data);

  if (error) {
    console.error(error);
    throw new Error("categories couldnt be loaded");
  }
  if (category.success) {
    return category.data;
  }
  throw category.error;
};
