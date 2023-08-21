import { Weapon } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds.schema";
import Image from "next/image";

type WeaponParam = {
  weapon: Weapon[number];
};

export const WeaponCard = ({ weapon }: WeaponParam) => {
  return (
    <div className="flex w-44 flex-col items-center justify-center bg-[#f1f1f1] shadow-md  md:w-72 ">
      <Image
        className="w-full"
        width={400}
        height={400}
        alt={weapon.name}
        src={weapon.image}
      />
      <div className="flex w-full flex-col bg-[#fff] p-2 tracking-wide text-dark-green sm:p-6">
        <span className="font-semibold">{weapon.name}</span>
        <span>
          {weapon.category}, weight: {weapon.weight}
        </span>
        <span>{weapon.price / 100} PLN</span>
      </div>
    </div>
  );
};
