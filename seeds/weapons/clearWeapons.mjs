import supabase from "../../services/supabase.mjs";

const clearWeapons = async () => {
  const { error } = await supabase.from("Weapons").delete().neq("id", 2137);
};

await clearWeapons();
