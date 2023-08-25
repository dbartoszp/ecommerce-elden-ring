import supabase from "../../../../services/supabase.mjs";

const getCategoryIDByFilter = async (filterName) => {
  if (!filterName) return null;
  const { data: filters, error } = await supabase
    .from("Filters")
    .select("categoryID")
    .eq("name", filterName);
  return filters[0].categoryID;
};

export default getCategoryIDByFilter;
