import supabase from "@/services/supabase.mjs";
import { useGetCollectionByIdReturnSchema } from "../hooks/useGetCollectionById/useGetCollectionById.schema";
import { useGetCollectionsByIdsReturnSchema } from "../hooks/useGetCollectionsByIds/useGetCollectionsByIds.schema";

export const getCollection = async () => {
  const { data, error } = await supabase.from("Collections").select("*");
  if (error) {
    console.error(error);
    throw new Error("Collections couldnt be loaded");
  }
  return data;
};

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
