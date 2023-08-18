import supabase from "@/services/supabase.mjs";
import { useGetCollectionByIdReturnSchema } from "./useGetCollectionById.schema";

export const getCollectionById = async (id: number) => {
  const { data, error } = await supabase
    .from("Collections")
    .select("*")
    .eq("id", id);
  const collection = useGetCollectionByIdReturnSchema.safeParse(data);
  if (error) {
    console.error(error);
    throw new Error("collection couldnt be loaded");
  }
  if (collection.success) {
    return collection.data;
  }
  throw collection.error;
};
