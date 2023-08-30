import { Weapon } from "@/modules/weapons/useGetWeaponsBy/useGetWeaponsBy.schema";
import Image from "next/image";
import { useAddToCart } from "@/modules/cart/hooks/useAddToCart/useAddToCart";
import { Link } from "@/modules/ui/Button/Link";
import { Button } from "@/modules/ui/Button/Button";

type WeaponParam = {
  weapon: Weapon[number];
};

export const WeaponCard = ({ weapon }: WeaponParam) => {
  const addToCart = useAddToCart();

  return (
    <div className="flex w-44 flex-col items-center justify-center bg-[#f1f1f1] shadow-md  md:w-72 ">
      <Image
        className="w-full"
        width={400}
        height={400}
        alt={weapon.name}
        src={weapon.image}
      />
      <div className="flex w-full flex-col bg-[#fff] p-2  tracking-wide text-dark-green sm:p-6">
        <span className="font-semibold">{weapon.name}</span>
        <span>
          {weapon.filter}, weight: {weapon.weight}
        </span>
        <span>{weapon.price / 100} PLN</span>
        <Link variant="primary" size="sm" href={`/product/${weapon.id}`}>
          <span className="text-center"> GO TO PRODUCT PAGE</span>
        </Link>
        <Button
          onClick={() => addToCart.mutate({ weaponId: weapon.id })}
          variant="secondary"
          size="sm"
        >
          QUICK ADD
        </Button>
      </div>
    </div>
  );
};
