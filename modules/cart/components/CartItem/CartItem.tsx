type Weapon = {
  id: number;
  price: number;
  name: string;
  image: string;
};

type WeaponItem = {
  weapon: Weapon;
  count: number;
};

export const CartItem = (weaponItem: WeaponItem) => {
  return <div>{weaponItem.weapon.id}</div>;
};
