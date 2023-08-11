type CountWeaponsByIdParams = {
  weapons?: number[];
  weaponId: number;
};

export const countWeaponsById = ({
  weapons,
  weaponId,
}: CountWeaponsByIdParams) => {
  if (!weapons) return 0;
  return weapons?.reduce(
    (count, weapon) => (weapon === weaponId ? count + 1 : count),
    0,
  );
};
