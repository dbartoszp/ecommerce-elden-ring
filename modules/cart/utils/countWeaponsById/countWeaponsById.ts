type CountWeaponsByIdParams = {
  weapons: number[];
  weaponId: number;
};

export const countWeaponsById = ({
  weapons,
  weaponId,
}: CountWeaponsByIdParams) => {
  return weapons.reduce(
    (count, weapon) => (weapon === weaponId ? count + 1 : count),
    0,
  );
};
