import { Link } from "@/modules/ui/Button/Link";
import { useGetWeaponById } from "@/modules/weapons/hooks/useGetWeaponById/useGetWeaponById";
import { error } from "console";
import Image from "next/image";

type FavoritesItemProps = {
  weaponId: number;
};

const testWeapon = {
  id: 219,
  name: "Hand Axe",
  category: "axe",
  weight: 3.5,
  image:
    "https://eldenring.fanapis.com/images/weapons/17f69c35d2cl0i1oh7zuqfb3mdvsj.png",
};

export function FavoritesItem({ weaponId }: FavoritesItemProps) {
  const weapon = useGetWeaponById(weaponId);
  console.log(weapon.data);

  if (weapon.isLoading || weapon.isFetching || !weapon.data)
    return <div>Loading...</div>;

  if (weapon.error && weapon.isError) {
    console.log(weapon.error);
    return weapon.error.at(0).message;
  }

  const weaponData = weapon.data.at(0);

  return (
    <div className="keen-slider__slide flex justify-center p-5 md:p-8">
      <div className="flex w-11/12 flex-col items-center justify-center space-y-6 border-2 bg-light-olive-lighter pb-4 font-semibold shadow-md md:h-5/6 md:w-96 md:pb-16">
        <Image
          className="w-full border-b-2 border-b-dark-green bg-light-green"
          alt={weaponData.name}
          src={weaponData.image}
          width={400}
          height={400}
        />
        <div className="border-b-2 border-b-dark-green text-2xl">
          <h2>{weaponData.name}</h2>
        </div>
        <div className="capitalize">
          {weaponData.category}, weighing only {weaponData.weight}!
        </div>
        <Link href={`/products/${weaponData.id}`} variant="primary" size="lg">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
