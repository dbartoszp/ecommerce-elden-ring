import supabase from "../../services/supabase.mjs";

const clearWeapons = async () => {
  const { error } = await supabase.from("Weapons").delete().neq("id", -1);
};

await clearWeapons();
