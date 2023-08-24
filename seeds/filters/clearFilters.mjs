import supabase from "../../services/supabase.mjs";

const clearFilters = async () => {
  const { error } = await supabase.from("Filters").delete().neq("id", -1);
};

await clearFilters();
