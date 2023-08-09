type Weapon = {
  id: number;
  weight: number;
  name: string;
  price: number;
  image: string;
};

type DeleteOneWeaponParams = {
  weapons: Weapon[];
  weaponIdToDelete: number;
};

export const deleteOneWeapon = ({
  weapons,
  weaponIdToDelete,
}: DeleteOneWeaponParams) => {
  const indexOfWeaponToDelete = weapons.findIndex(
    (weapon) => weapon.id === weaponIdToDelete,
  );
  if (indexOfWeaponToDelete === -1) return weapons;

  return [
    ...weapons.slice(0, indexOfWeaponToDelete),
    ...weapons.slice(indexOfWeaponToDelete + 1),
  ];
};
