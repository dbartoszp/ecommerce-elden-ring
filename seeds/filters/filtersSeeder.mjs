import supabase from "../../services/supabase.mjs";

const FILTERS = [
  { filter: "Axe", categoryID: 2 },
  { filter: "Ballista", categoryID: 4 },
  { filter: "Bow", categoryID: 4 },
  { filter: "Claw", categoryID: 5 },
  { filter: "Colossal Sword", categoryID: 1 },
  { filter: "Colossal Weapon", categoryID: 1 },
  { filter: "Crossbow", categoryID: 4 },
  { filter: "Curved Greatsword", categoryID: 1 },
  { filter: "Curved Sword", categoryID: 2 },
  { filter: "Dagger", categoryID: 2 },
  { filter: "Fist", categoryID: 5 },
  { filter: "Flail", categoryID: 2 },
  { filter: "Glintstone Staff", categoryID: 3 },
  { filter: "Great Hammer", categoryID: 1 },
  { filter: "Great Spear", categoryID: 1 },
  { filter: "Greataxe", categoryID: 1 },
  { filter: "Greatbow", categoryID: 4 },
  { filter: "Greatsword", categoryID: 1 },
  { filter: "Halberd", categoryID: 1 },
  { filter: "Hammer", categoryID: 2 },
  { filter: "Heavy Thrusting Sword", categoryID: 1 },
  { filter: "Katana", categoryID: 2 },
  { filter: "Light Bow", categoryID: 4 },
  { filter: "Reaper", categoryID: 1 },
  { filter: "Sacred Seal", categoryID: 3 },
  { filter: "Spear", categoryID: 2 },
  { filter: "Straight Sword", categoryID: 2 },
  { filter: "Thrusting Sword", categoryID: 2 },
  { filter: "Twinblade", categoryID: 2 },
  { filter: "Whip", categoryID: 5 },
];

const addFilter = async (newFilter) => {
  try {
    const { data } = await supabase
      .from("Filters")
      .insert([{ name: newFilter.filter, categoryID: newFilter.categoryID }])
      .select();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const seedFilters = async () => {
  try {
    for await (const filter of FILTERS) {
      try {
        console.log(filter);
        await addFilter(filter);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

await seedFilters();
