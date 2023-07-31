import { Link } from "@/modules/ui/Button/Link";
import Image from "next/image";

type Weapon = {
  id: number;
  name: string;
  category: string;
  weight: number;
  image: string;
};

type FavoritesItemProps = {
  weapon: Weapon;
};

export function FavoritesItem({ weapon }: FavoritesItemProps) {
  // const test = useGetWeaponsByIds([219, 220]);
  // console.log(test.data);
  // console.log(weapon.data);

  ////todo spinner styling
  // if (weapon.isLoading || weapon.isFetching || !weapon.data) return <Spinner />;

  // if (weapon.error && weapon.isError) {
  //   console.log(weapon.error);
  //   return weapon.error.at(0).message;
  // }

  // const weaponData = weapon.data.at(0);
  // if (!weaponData) return null;

  return (
    <div className="keen-slider__slide flex justify-center p-5 md:p-8">
      <div className="flex w-11/12 flex-col items-center justify-center space-y-6 border-2 bg-light-olive-lighter pb-4 font-semibold shadow-md md:h-5/6 md:w-96 md:pb-16">
        <Image
          className="w-full border-b-2 border-b-dark-green bg-light-green"
          alt={weapon.name}
          src={weapon.image}
          width={400}
          height={400}
        />
        <div className="border-b-2 border-b-dark-green text-2xl">
          <h2>{weapon.name}</h2>
        </div>
        <div className="capitalize">
          {weapon.category}, weighing only {weapon.weight}!
        </div>
        <Link href={`/products/${weapon.id}`} variant="primary" size="lg">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}
