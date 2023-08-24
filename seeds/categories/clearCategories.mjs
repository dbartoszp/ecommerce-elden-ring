import supabase from "../../services/supabase.mjs";

const clearCategories = async () => {
  const { error } = await supabase.from("Categories").delete().neq("id", -1);
};

await clearCategories();
