import { Link } from "@/modules/ui/Button/Link";
import { Weapon } from "@/modules/weapons/useGetWeaponsByIds/hooks/useGetWeaponsByIds.schema";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type FavoritesItemProps = {
  weapon: Weapon[number];
};

export function FavoritesItem({ weapon }: FavoritesItemProps) {
  return (
    <div className="keen-slider__slide flex justify-center p-5 md:p-8">
      {(
        <div className="flex w-11/12 flex-col items-center justify-center space-y-6 border-2 bg-light-olive-lighter pb-4 font-semibold shadow-md md:h-5/6 md:w-96 md:pb-16">
          <Image
            className="w-full border-b-2 border-b-dark-green bg-light-green"
            alt={weapon.name}
            src={weapon.image}
            width={400}
            height={400}
          />
          <div className="border-b-2 border-b-dark-green text-2xl">
            <h2>{weapon.name || <Skeleton />}</h2>
          </div>
          <div className="capitalize">
            {`${weapon.category}, weighing only ${weapon.weight}!` || (
              <Skeleton />
            )}
          </div>
          <Link href={`/product/${weapon.id}`} variant="primary" size="lg">
            SHOP NOW
          </Link>
        </div>
      ) || <Skeleton />}
    </div>
  );
}
