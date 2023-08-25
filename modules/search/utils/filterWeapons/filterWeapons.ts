type Weapon = {
  categoryID: number;
  filter: string;
};

type fitlerWeaponsParams = {
  weapons: Weapon[];
  categoryQuery: number;
  filterQuery: string;
};

export const filterWeapons = ({
  weapons,
  categoryQuery,
  filterQuery,
}: fitlerWeaponsParams) => {
  let filteredWeapons = weapons;
  if (categoryQuery)
    filteredWeapons = filteredWeapons.filter(
      (weapon) => weapon.categoryID === categoryQuery,
    );
  if (filterQuery)
    filteredWeapons = filteredWeapons.filter(
      (weapon) => weapon.filter === filterQuery,
    );
  return filteredWeapons;
};
