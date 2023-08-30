import { WeaponCard } from "./WeaponCard/WeaponCard";
import { Weapon } from "@/modules/weapons/useGetWeaponsBy/useGetWeaponsBy.schema";

//!!przeniesc do modułu weapons

type WeaponListProps = {
  weapons: Weapon;
};

export const WeaponList = ({ weapons }: WeaponListProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-10 lg:gap-16">
        {weapons.map((weapon) => {
          return (
            <div key={weapon.id}>
              <WeaponCard weapon={weapon} />
            </div>
          );
        })}
      </div>
    </>
  );
};
