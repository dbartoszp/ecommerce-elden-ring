type Weapon = {
  id: number;
  name: string;
  category: string;
  weight: number;
  image: string;
};

type CollectionsModalItemProps = {
  weapon: Weapon;
};
export const CollectionsModalItem = ({ weapon }: CollectionsModalItemProps) => {
  return <div>{weapon.name}</div>;
};
