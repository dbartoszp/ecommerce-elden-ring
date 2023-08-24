import supabase from "../../services/supabase.mjs";

const CATEGORIES = ["Melee Heavy", "Melee Light", "Sorcery", "Ranged", "Other"];

const addCategory = async (newCategory) => {
  try {
    const { data, error } = await supabase
      .from("Categories")
      .insert([{ name: newCategory }])
      .select();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const seedCategories = async () => {
  try {
    for await (const category of CATEGORIES) {
      try {
        console.log(category);
        await addCategory(category);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

await seedCategories();
