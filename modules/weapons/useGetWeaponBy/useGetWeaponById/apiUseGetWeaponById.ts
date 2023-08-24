import supabase from "@/services/supabase.mjs";
import { useGetWeaponByIdReturnSchema } from "./hooks/useGetWeaponById.schema";

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
