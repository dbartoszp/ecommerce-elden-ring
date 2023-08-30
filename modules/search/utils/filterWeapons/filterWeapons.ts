type Weapon = {
  filter: string;
  id: number;
  name: string;
  weight: number;
  image: string;
  price: number;
  categoryID: number;
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
  if (categoryQuery !== 0) {
    filteredWeapons = filteredWeapons.filter(
      (weapon) => weapon.categoryID === categoryQuery,
    );
  }
  if (filterQuery !== "") {
    filteredWeapons = filteredWeapons.filter(
      (weapon) => weapon.filter === filterQuery,
    );
  }
  console.log(filteredWeapons);
  return filteredWeapons;
};
