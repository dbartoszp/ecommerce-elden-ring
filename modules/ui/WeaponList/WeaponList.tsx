import { WeaponCard } from "./WeaponCard/WeaponCard";
const testWeapon = {
  name: "Test Weapon",
  weight: 3.5,
  price: 213799,
  category: "Axe",
  description: "testDescription",
  id: 403,
  image:
    "https://eldenring.fanapis.com/images/weapons/17f69c35d2cl0i1oh7zuqfb3mdvsj.png",
};

type WeaponListProps = {
  query: string;
};

export const WeaponList = ({ query }: WeaponListProps) => {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 lg:gap-16">
      <h2> witam ciebie {query}</h2>
      <WeaponCard weapon={testWeapon} />
      <WeaponCard weapon={testWeapon} />
      <WeaponCard weapon={testWeapon} />
      <WeaponCard weapon={testWeapon} />
      <WeaponCard weapon={testWeapon} />
      <WeaponCard weapon={testWeapon} />
      <WeaponCard weapon={testWeapon} />
    </div>
  );
};
