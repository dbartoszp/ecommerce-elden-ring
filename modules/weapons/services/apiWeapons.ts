import supabase from "../../../services/supabase.mjs";
import { useGetWeaponByIdReturnSchema } from "../hooks/useGetWeaponById/useGetWeaponById.schema";

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
  // console.log("getWeaponsByIds data:", data);
  if (error) {
    throw new Error("weapons couldnt be loaded");
  }
  return data;
};

export const getWeaponById = async (id: number) => {
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .eq("id", id);
  const weapon = useGetWeaponByIdReturnSchema.safeParse(data);
  // console.log("weapon:", weapon.data[0]);
  if (error) {
    console.error(error);
    throw new Error("weapon couldnt be loaded");
  }
  if (weapon.success) {
    return weapon.data;
  }
  throw weapon.error.issues;
};

export const getWeaponByName = async (name: string) => {
  const { data, error } = await supabase
    .from("Weapons")
    .select("*")
    .eq("name", name);
  if (error) {
    console.error(error);
    throw new Error("weapon couldnt be loaded");
  }
  return data;
};
