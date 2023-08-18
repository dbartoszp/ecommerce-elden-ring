import supabase from "@/services/supabase.mjs";
import { useGetCollectionsByIdsReturnSchema } from "./useGetCollectionsByIds.schema";

export const getCollectionsByIds = async (ids: number[]) => {
  const { data, error } = await supabase
    .from("Collections")
    .select("*")
    .in("id", ids);
  const collections = useGetCollectionsByIdsReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("collections couldnt be loaded");
  }
  if (collections.success) {
    return collections.data;
  }
  throw collections.error;
};
